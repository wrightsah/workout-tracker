// require mongojs

const mongojs = require('mongojs');

// require express

const express = require('express');

// require mongoose 

const mongoose = require('mongoose');

// initialize server on PORT 3001

const app = express();
const PORT = process.env.PORT || 3001;

// body parser middleware

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// file requirements - public, api, html




// server listener

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})