'use strict';

const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('hello world!');
});

server.listen(3030, () => console.log('listen 3030'));

module.exports = server;