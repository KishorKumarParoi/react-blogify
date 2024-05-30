import dotenv from 'dotenv';
import express from 'express';
dotenv.config({
    path: './.env'
});

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Airpods Wireless Bluetooth Headphones',
            description: 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers an immersive listening experience Built-in microphone allows you to take calls while working.',
            price: 89.99,
            thumbnail: 'https://dummyimage.com/300x300/ccc/000.jpg'
        },
        {
            id: 2,
            name: 'iPhone 11 Pro 256GB Memory',
            description: 'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life.',
            price: 599.99,
            thumbnail: 'https://dummyimage.com/300x300/ccc/000.jpg'
        },
        {
            id: 3,
            name: 'Cannon EOS 80D DSLR Camera',
            description: 'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design.',
            price: 929.99,
            thumbnail: 'https://dummyimage.com/300x300/ccc/000.jpg'
        },
        {
            id: 4,
            name: 'Sony Playstation 4 Pro White Version',
            description: 'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music.',
            price: 399.99,
            thumbnail: 'https://dummyimage.com/300x300/ccc/000.jpg'
        },
        {
            id: 5,
            name: 'Logitech G-Series Gaming Mouse',
            description: 'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience.',
            price: 49.99,
            thumbnail: 'https://dummyimage.com/300x300/ccc/000.jpg'
        },
        {
            id: 6,
            name: 'Amazon Echo Dot 3rd Generation',
            description: 'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small spaces.',
            price: 29.99,
            thumbnail: 'https://dummyimage.com/300x300/ccc/000.jpg'
        },
    ]

    if (req?.query?.search) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search.toLowerCase()));
        res.send({ "size": filteredProducts.length, filteredProducts });
        return;
    };

    setTimeout(() => {
        res.send({ "size": products.length, products });
    }, 1000);
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});