/**
 * Minimal Pub Sub example
 *
 * Source:
 * https://msdn.microsoft.com/en-us/magazine/hh201955.aspx
 */


const topics = {}
const lastUid = -1

const publish = (topic, data) => {

    if (!topics.hasOwnProperty(topic)) return

    const notify = () => {
        const subscribers = topics[topic]
        const throwException = (e) => () => { throw e }
    }



}

