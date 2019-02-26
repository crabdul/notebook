const amqp = require("amqplib")

let channel, queue
amqp
    .connect("amqp://localhost:5010")
    .then(conn => conn.createChannel())
    .then(ch => {
        channel = ch
        return channel.assertQueue("jobs_queue")
    })
    .then(q => {
        queue = q.queue
        consume()
    })

function consume() {
    channel.consume(queue, msg => {
        msg.variations.forEach(word => {
            console.log('word: ', word)
            if (word === 'cccc') {
                channel.sendToQueue('results_queue', new Buffer(`Found! ${word}`))
            }
        })
        channel.ack(msg)
    })
}

