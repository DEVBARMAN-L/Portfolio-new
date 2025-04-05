document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'dashboard.html';
});
