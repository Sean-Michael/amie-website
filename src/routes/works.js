const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('works', { title: 'Works' });
});

module.exports = router;