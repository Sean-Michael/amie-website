const express = require('express');
const router = express.Router();
const Collection = require('../models/collection');

router.get('/', async (req, res) => {
  try {
    const collections = await Collection.find().limit(3); // Fetch 3 featured collections
    res.render('index', { title: 'Home', collections });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
