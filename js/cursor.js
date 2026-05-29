
// Custom Cursor
const dot = document.getElementById('dot');
const ring = document.getElementById('ring');

window.addEventListener('mousemove', (e) => {
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';

  ring.style.left = e.clientX - 16 + 'px';
  ring.style.top = e.clientY - 16 + 'px';
});
