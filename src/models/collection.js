const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true }, // URL or path to the cover image
});

module.exports = mongoose.model('Collection', collectionSchema);
