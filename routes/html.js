// requirements

const path = require('path');
const router = require('express').Router();

// index

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// exercise
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// stats
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// exports

module.exports = router;