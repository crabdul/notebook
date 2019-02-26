const zmq = require('zmq')
const variationsStream = require('variations-stream')
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const batchSize = 10000
const maxLength = process.argv[2]
const searchHash = process.argv[3]


// PUSH socket
const ventilator = zmq.socket('push')
// bind to local port 5000
// This is where the PULL socket of the workers will connect to receive
// their tasks
ventilator.bindSync("tcp://*:5016")

let batch = []
variationsStream(alphabet, maxLength)
    .on('data', combination => {
        batch.push(combination)
        if (batch.length === batchSize) {
            const msg = {
                searchHash,
                variations: batch
            }
            ventilator.send(JSON.stringify(msg))
            batch = []
        }
    })
    .on('end', () => {
        // send remaining combinations
        const msg = {
            searchHash,
            variations: batch
        }
        ventilator.send(JSON.stringify(msg))
    })
