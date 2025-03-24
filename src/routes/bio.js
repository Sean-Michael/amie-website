const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('bio', { title: 'Artist Bio' });
});

module.exports = router;