// require mongojs

const mongojs = require('mongojs');

// require express

const express = require('express');

// initialize server on PORT 3000

const app = express();
const PORT = 3000;

// db here


// routes


// server listener

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})