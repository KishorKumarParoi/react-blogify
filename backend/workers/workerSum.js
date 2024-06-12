const { parentPort, workerData } = require('worker_threads');
console.log('Worker is running');

// parentPort.on('message', (msg) => {
//     console.log('Message from parent: ', msg);
// });

// parentPort.on('error', (err) => {
//     console.log('Error: ', err);
// });

// console.log('Thread count: ', workerData.thread_count);
// console.log(workerData);

// parentPort.on('exit', (code) => {
//     console.log('Worker stopped with exit code: ', code);
// });
let limit = 100000000000 / workerData.thread_count;

let result = 0;
for (let i = 0; i < limit; i++) {
    result++;
}

parentPort.postMessage(result);