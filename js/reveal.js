
// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      reveal.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
