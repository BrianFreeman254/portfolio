document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const menuContent = document.getElementById('menu-content');

  menuToggle.addEventListener('click', () => {
    menuContent.style.display = 'block';
  });

  menuClose.addEventListener('click', () => {
    menuContent.style.display = 'none';
  });

  // Biography Section Security
  const bioAccess = document.getElementById('bio-access');
  bioAccess.addEventListener('click', (e) => {
    e.preventDefault();
    const pin = prompt('Enter PIN to access Biography:');
    if (pin === '822775') {
      alert('Access Granted!');
      window.location.href = '#biography';
    } else {
      alert('Access Denied. Incorrect PIN!');
    }
  });

  // Analog Clock
  const hourHand = document.querySelector('.hour');
  const minuteHand = document.querySelector('.minute');
  const secondHand = document.querySelector('.second');

  function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    hourHand.style.transform = `rotate(${(360 / 12) * hours}deg)`;
    minuteHand.style.transform = `rotate(${(360 / 60) * minutes}deg)`;
    secondHand.style.transform = `rotate(${(360 / 60) * seconds}deg)`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // Initial call
});
