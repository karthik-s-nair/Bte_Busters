const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');



form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  // Predefined usernames and passwords
  const validUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  const user = validUsers.find(u => u.username === username && u.password === password);

  if (user) {
    // Redirect to the home page
    window.location.replace('homepage.html');
  } else {
    // Display an error message
    errorMessage.textContent = 'Invalid username or password';
  }
});