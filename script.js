const form = document.getElementById('signupForm');
const message = document.getElementById('formMessage');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (!email) return;

  message.textContent = 'Logged: ' + email + ' — check your inbox to confirm.';
  message.classList.add('show');
  form.reset();
});
