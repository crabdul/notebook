const amqp = require("amqplib")

const channel, queue
amqp
    .connect("amqp://localhost")
    .then(conn => conn.createChannel())
    .then(ch => {
        channel = ch
        return channel.assertQueue("results_queue")
    })
    .then(q => {
        queue = q.queue
        channel.consume(queue, msg => {
            console.log('Message from worker :', msg.connect.toString())
        })
    })

