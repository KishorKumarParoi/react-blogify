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
            resolve(result);
        });

        worker.on('error', (err) => {
            reject(err);
        });
    })
}

module.exports = createWorker;