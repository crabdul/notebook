const amqp = require("amqplib")
const variationsStream = require('variations-stream')

let connection, channel
amqp
    .connect("amqp://localhost:5000")
    .then(conn => {
        connection = conn
        return conn.createChannel()
    })
    .then(ch => {
        channel = ch;
        produce()
    })
    .catch(err => console.log(err))

let batch = []
function produce() {
    variationsStream('abcdefg', 4)
        .on("data", combination => {
            batch.push(combination)
            if (batch.length === batchSize) {
                const msg = {
                    searchHash,
                    variations: batch
                }
                channel.sendToQueue("jobs_queue", new Buffer(JSON.stringify(msg)))
                batch = []
            }
        })
}
