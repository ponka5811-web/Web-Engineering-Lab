
// Responsive Navbar
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dark Light Mode
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Typing Effect
const typing = document.getElementById('typing');
const texts = ['UI/UX Designer', 'Frontend Designer', 'Creative Developer'];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if(charIndex < texts[textIndex].length){
    typing.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect(){
  if(charIndex > 0){
    typing.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();

// Active Navigation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href').includes(current)){
      link.classList.add('active');
    }
  });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projects.forEach(project => {
      if(filter === 'all' || project.dataset.category === filter){
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Scroll Top
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// // Preloader
// window.addEventListener('load', () => {
//   document.getElementById('preloader').style.display = 'none';
// });

// Form Validation
const form = document.querySelector('form');

if(form){
  form.addEventListener('submit', (e) => {
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
      if(input.value.trim() === ''){
        valid = false;
        input.style.borderColor = 'red';
      }
    });

    if(!valid){
      e.preventDefault();
      alert('Please fill all required fields.');
    }
  });
}
