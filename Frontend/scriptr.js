const form = document.getElementById('registrationForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (data.success) {
    // Redirect to login page after successful registration
    window.location.replace('/');
  } else {
    errorMessage.textContent = data.message;
  }
});
