const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Artwork = require('../models/artwork');
const Collection = require('../models/collection');

// Load environment variables
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err));

// Seed data
const artworks = [
  { title: 'Dreamscape', description: 'A surreal dream-like painting.', year: 2023, medium: 'Oil on Canvas', image: '/public/images/dreams.jpeg', collection: 'Dreams' },
  { title: 'Rolling Hills', description: 'A serene landscape.', year: 2021, medium: 'Watercolor', image: '/public/images/landscape.jpeg', collection: 'Landscapes' },
  { title: 'Modern Sculpture', description: 'A contemporary bronze sculpture.', year: 2022, medium: 'Bronze', image: '/public/images/sculpture.jpeg', collection: 'Sculpture' },
];

const collections = [
  { title: 'Dreams', description: 'A collection of surreal and dream-like works.', coverImage: '/public/images/dreams.jpeg' },
  { title: 'Landscapes', description: 'A collection of serene and natural landscapes.', coverImage: '/public/images/landscape.jpeg' },
  { title: 'Sculpture', description: 'A collection of modern and abstract sculptures.', coverImage: '/public/images/sculpture.jpeg' },
];

// Seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Artwork.deleteMany();
    await Collection.deleteMany();

    // Insert artworks
    const insertedArtworks = await Artwork.insertMany(artworks);

    // Map collections to include cover images
    collections.forEach((collection) => {
      const firstArtwork = insertedArtworks.find((artwork) => artwork.collection === collection.title);
      if (firstArtwork && firstArtwork.image) {
        collection.coverImage = firstArtwork.image; // Use the first artwork's image
      } else {
        collection.coverImage = '/public/images/amie-working.jpg'; // Provide a default cover image
      }
    });

    // Insert collections
    await Collection.insertMany(collections);

    console.log('✅ Database seeded successfully');
  } catch (err) {
    console.error('❌ Seeding error:', err);
  }
};

// Export the seedDatabase function
module.exports = seedDatabase;
