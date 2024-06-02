const fs = require('fs');
const crypto = require('crypto');
const app = require('express');

process.env.UV_THREADPOOL_SIZE = 10;

fs.writeFileSync('./test.txt', 'Hello, World!');

setTimeout(() => {
    console.log('Hello from Timer-1');
}, 0);

setImmediate(() => {
    console.log('Hello from immediate Fn-1');
});

const start = Date.now();

fs.readFile('./test.txt', 'utf-8', () => {
    console.log('Hello from FS-1');

    setTimeout(() => {
        console.log('Hello from Timer-2');
    }, 3000);

    setTimeout(() => {
        console.log('Hello from Timer-3');
    }, 5000);

    setImmediate(() => {
        console.log('Hello from immediate Fn-2');
    });

    // cpu intensive task
    crypto.pbkdf2('password1234', 'salt108', 100000, 1024, 'sha512', () => {
        console.log('1-> done, time taken: ', Date.now() - start, "ms");
    })
    crypto.pbkdf2('password124', 'salt108', 100000, 1024, 'sha512', () => {
        console.log('2-> done, time taken: ', Date.now() - start, "ms");
    })
    crypto.pbkdf2('passwor1234', 'salt108', 100000, 1024, 'sha512', () => {
        console.log('3-> done, time taken: ', Date.now() - start, "ms");
    })
    crypto.pbkdf2('passwod1234', 'salt108', 100000, 1024, 'sha512', () => {
        console.log('4-> done, time taken: ', Date.now() - start, "ms");
    })
    crypto.pbkdf2('passwod1234', 'salt108', 100000, 1024, 'sha512', () => {
        console.log('5-> done, time taken: ', Date.now() - start, "ms");
    })
    crypto.pbkdf2('passwod1234', 'salt108', 100000, 1024, 'sha512', () => {
        console.log('6-> done, time taken: ', Date.now() - start, "ms");
    })
});

console.log('Hello from the top-level code');

