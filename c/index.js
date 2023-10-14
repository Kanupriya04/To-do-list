const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate sending data to the server
  setTimeout(() => {
    successMessage.style.display = 'block';
    contactForm.reset();
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }, 1000);
});
