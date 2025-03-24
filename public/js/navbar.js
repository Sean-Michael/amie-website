// Select the menu toggle button and the mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Add a click event listener to the toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the 'hidden' class on the mobile menu
  mobileMenu.classList.toggle('hidden');
});