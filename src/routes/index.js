const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const featuredWorks = [
    { id: 1, title: 'Abstract Landscape', medium: 'Oil on Canvas', year: 2023, image: '/images/landscape.jpeg' },
    { id: 2, title: 'Modern Sculpture', medium: 'Bronze', year: 2022, image: '/images/sculpture.jpeg' },
    { id: 3, title: 'Digital Dreams', medium: 'Digital Art', year: 2024, image: '/images/dreams.jpeg' },
  ];
  res.render('index', { title: 'Home', featuredWorks });
});

module.exports = router;
