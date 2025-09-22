// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mainNav.style.display = expanded ? 'none' : 'flex';
});

// Simple contact validation
function validateContactForm(e){
  const form = e.target;
  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const msg = form.querySelector('[name="message"]').value.trim();
  let errors = [];
  if(name.length < 2) errors.push('Name is too short');
  if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push('Email is invalid');
  if(msg.length < 10) errors.push('Message is too short');
  if(errors.length){
    e.preventDefault();
    alert(errors.join('\n'));
  }
}

const contactForm = document.querySelector('#contactForm');
contactForm?.addEventListener('submit', validateContactForm);

// Fade-in animation for project cards
const cards = document.querySelectorAll('.project-card');
cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
  card.classList.add('fade-in');
});

const detailButtons = document.querySelectorAll('.details-btn');

detailButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    if(extra.style.display === 'none' || extra.style.display === ''){
      extra.style.display = 'block';
      btn.textContent = 'Hide Details';
    } else {
      extra.style.display = 'none';
      btn.textContent = 'View Details';
    }
  });
});

