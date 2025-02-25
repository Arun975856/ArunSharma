

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = timeString;
  }
  setInterval(updateTime, 1000);
  updateTime();

document.querySelector('a[href="#con"]').addEventListener('click', function(event) {
  event.preventDefault(); 
  document.getElementById('con').scrollIntoView({
    behavior: 'smooth'
  });
});