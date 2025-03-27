const express = require('express');
const router = express.Router();
const Collection = require('../models/collection');
const Artwork = require('../models/artwork');

router.get('/', async (req, res) => {
  try {
    const collections = await Collection.find();
    res.render('collections', { title: 'Collections', collections });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    const artworks = await Artwork.find({ collection: collection.title });
    res.render('collection', { title: collection.title, collection, artworks });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
