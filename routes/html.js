// requirements

const path = require('path');
const router = require('express').Router();

// index

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// exercise


// stats


// exports

module.exports = router;