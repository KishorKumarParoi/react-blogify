const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    const ipAddress = req.socket.remoteAddress;
    const myUrl = url.parse(req.url, true);
    const timestamp = new Date().toUTCString();
    const log = `${timestamp}  "${req.method}" "ip-${ipAddress}" new request received from "${myUrl.pathname}" route\n`;

    fs.appendFile('./log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                res.end('Hello from the server');
                break;
            case '/about':
                res.end(`Hi, ${myUrl.query.fname} ${myUrl.query.lname}`);
                break;
            case '/contact':
                res.end('Contact us page');
                break;
            default:
                res.end('Page not found');
        }
    })
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// const fs = require('fs');
// const crypto = require('crypto');
// const app = require('express');

// process.env.UV_THREADPOOL_SIZE = 10;

// fs.writeFileSync('./test.txt', 'Hello, World!');

// setTimeout(() => {
//     console.log('Hello from Timer-1');
// }, 0);

// setImmediate(() => {
//     console.log('Hello from immediate Fn-1');
// });

// const start = Date.now();

// fs.readFile('./test.txt', 'utf-8', () => {
//     console.log('Hello from FS-1');

//     setTimeout(() => {
//         console.log('Hello from Timer-2');
//     }, 3000);

//     setTimeout(() => {
//         console.log('Hello from Timer-3');
//     }, 5000);

//     setImmediate(() => {
//         console.log('Hello from immediate Fn-2');
//     });

//     // cpu intensive task
//     crypto.pbkdf2('password1234', 'salt108', 100000, 1024, 'sha512', () => {
//         console.log('1-> done, time taken: ', Date.now() - start, "ms");
//     })
//     crypto.pbkdf2('password124', 'salt108', 100000, 1024, 'sha512', () => {
//         console.log('2-> done, time taken: ', Date.now() - start, "ms");
//     })
//     crypto.pbkdf2('passwor1234', 'salt108', 100000, 1024, 'sha512', () => {
//         console.log('3-> done, time taken: ', Date.now() - start, "ms");
//     })
//     crypto.pbkdf2('passwod1234', 'salt108', 100000, 1024, 'sha512', () => {
//         console.log('4-> done, time taken: ', Date.now() - start, "ms");
//     })
//     crypto.pbkdf2('passwod1234', 'salt108', 100000, 1024, 'sha512', () => {
//         console.log('5-> done, time taken: ', Date.now() - start, "ms");
//     })
//     crypto.pbkdf2('passwod1234', 'salt108', 100000, 1024, 'sha512', () => {
//         console.log('6-> done, time taken: ', Date.now() - start, "ms");
//     })
// });

// console.log('Hello from the top-level code');

