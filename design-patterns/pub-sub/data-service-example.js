const changeListeners = []

// Registers 'foreign' interests inside our data service
export function subscribe(callbackFunction) {
    changeListeners.push(callbackFunction)
}

// Data service invokes this function when a change is made
function publish(data) {
    changeListeners.forEach((changeListeners) => { changeListeners(data) })
}
