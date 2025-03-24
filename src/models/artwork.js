// filepath: /Users/smr/Documents/GitHub/amie-website/src/models/artwork.js
const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  year: { type: Number },
  medium: { type: String },
  image: { type: String }, // URL or path to the image
});

module.exports = mongoose.model('Artwork', artworkSchema);