const { parentPort, workerData } = require('worker_threads');

parentPort.postMessage(getEvenAge())

function getEvenAge() {
    console.log('Start Looking For even')
}