const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('collections', { title: 'Collections' });
});

module.exports = router;