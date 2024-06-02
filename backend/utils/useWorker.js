const { Worker } = require('worker_threads');

function createWorker() {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./workers/workerSum.js', {
            workerData: {
                thread_count: process.env.THREAD_COUNT,
                message: 'Hello from createWorker'
            }
        });
        worker.on('message', (result) => {
            resolve(`Result is ${result}`);
        });

        worker.on('error', (err) => {
            reject(`100: An error occured: ${err}`);
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(`Worker stopped with exit code ${code}`);
            }
        });

        worker.postMessage('working');
    })
}

module.exports = createWorker;