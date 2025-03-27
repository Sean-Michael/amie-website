const mongoose = require('mongoose');
const Collection = require('../models/collection'); // Adjust the path if needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/amie-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample Data
const collections = [
  {
    title: 'Abstract Landscapes',
    description: 'A collection of abstract interpretations of natural landscapes.',
    coverImage: '/images/abstract-landscape.jpg',
  },
  {
    title: 'Modern Sculptures',
    description: 'A showcase of modern sculptures exploring form and texture.',
    coverImage: '/images/modern-sculpture.jpg',
  },
  {
    title: 'Digital Dreams',
    description: 'A series of digital artworks inspired by surrealism and technology.',
    coverImage: '/images/digital-dreams.jpg',
  },
];

// Insert Data
async function seedDatabase() {
  try {
    await Collection.deleteMany(); // Clear existing data
    await Collection.insertMany(collections); // Insert sample data
    console.log('Database seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
}

seedDatabase();