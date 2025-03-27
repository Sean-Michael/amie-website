const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const seedDatabase = require('./seeds/seed'); // Import the seed function
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access'); // Import helper
const Handlebars = require('handlebars'); // Import Handlebars

// Load environment variables
dotenv.config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async (connection) => {
  console.log('✅ MongoDB connected');
  
  // Run the seed script if SEED_DB environment variable is set
  if (process.env.SEED_DB === 'true') {
    console.log('🌱 Seeding database...');
    await seedDatabase(); // Ensure this runs after the connection is established
  }

  // Start the server only after the database connection and optional seeding
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
})
.catch((err) => console.error('❌ MongoDB error:', err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'))); // Ensure this serves the public directory

// Define the eq helper
const hbs = exphbs.create({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  helpers: {
    eq: (a, b) => a === b
  },
  handlebars: allowInsecurePrototypeAccess(Handlebars), // Allow prototype access
});

// View engine setup
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const indexRoutes = require('./routes/index');
const bioRoutes = require('./routes/bio');
const worksRoutes = require('./routes/works');
const galleryRoutes = require('./routes/gallery');
const collectionsRoutes = require('./routes/collections');

app.use('/', indexRoutes);
app.use('/bio', bioRoutes);
app.use('/works', worksRoutes);
app.use('/gallery', galleryRoutes);
app.use('/collections', collectionsRoutes);
