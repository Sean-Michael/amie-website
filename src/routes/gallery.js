// filepath: /Users/smr/Documents/GitHub/amie-website/src/routes/gallery.js
const express = require('express');
const router = express.Router();
const Artwork = require('../models/artwork');

router.get('/', async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.render('gallery', { title: 'Gallery', artworks });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;