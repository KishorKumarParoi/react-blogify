const app = require('express')();
const dotenv = require('dotenv');
const users = require('./data');
// const os = require('os');
// console.log(os.cpus().length);

dotenv.config(
    {
        path: './.env'
    }
);

const createWorker = require('./utils/useWorker');
const thread_count = process.env.THREAD_COUNT;

// console.log(users);


app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get("/non-blocking", (req, res) => {
    res.status(200).send("Hello from non-blocking route");
});

app.get('/hello', (req, res) => {
    res.status(200).send('Hello from the other side');
});

app.get('/blocking', async (req, res) => {
    const start = Date.now();
    const workerPromises = [];

    for (let i = 0; i < thread_count; i++) {
        workerPromises.push(createWorker());
    }

    const threadResults = await Promise.all(workerPromises);
    const total = threadResults.reduce((acc, curr) => acc + curr, 0);

    console.log(threadResults);
    console.log(thread_count);

    console.log("Time taken: ", Date.now() - start, "ms");
    return res.status(200).send(`Total: ${total}`);
});

app.get("/single-thread-blocking", (req, res) => {
    const start = Date.now();
    const worker = createWorker();

    worker
        .then((result) => {
            console.log("Time taken: ", Date.now() - start, "ms");
            return res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
        });


    // workerSum.postMessage('Start');

    // workerSum.on('message', (result) => {
    //     console.log("Time taken: ", Date.now() - start, "ms");
    //     res.status(200).send(`Result: ${result}`);
    // });

    // workerSum.on('error', (err) => {
    //     console.log(`An error occured: ${err}`);
    // });

    // workerSum.on('exit', (code) => {
    //     if (code !== 0) {
    //         console.log(`Worker stopped with exit code ${code}`);
    //     }
    // });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});