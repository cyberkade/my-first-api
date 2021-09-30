require('dotenv').config()

console.log('Hello, World!!');
console.log(process.argv[2]);
console.log(process.env.USERNAME);
console.log(process.env.FOO);

const express = require('express');
const server = express();
server.use(express.json());

server.get('/hello', (req, res) => {
    res.send('<h1>HELLO THERE!</h1>');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`listening on ${port}`);
});
