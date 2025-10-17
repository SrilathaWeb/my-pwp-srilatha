import 'flowbite'


// Auto-scroll every 5 seconds
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('[data-carousel-item]');
  let index = 0;
  setInterval(() => {
    items.forEach((item, i) => {
      item.classList.toggle('hidden', i !== index);
    });
    index = (index + 1) % items.length;
  }, 5000);
});