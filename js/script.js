const events = document.querySelectorAll('.event');

events.forEach(event => {
  event.addEventListener('focus', () => {
    event.style.width = '40%';
    event.querySelector('img').style.transform = 'scale(1.1)';
  });

  event.addEventListener('blur', () => {
    event.style.width = '30%';
    event.querySelector('img').style.transform = 'scale(1)';
  });
});
