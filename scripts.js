// scripts.js

// Handle sign-up form submission
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
  
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the username already exists
    const existingUser = users.find(u => u.username === newUsername);
    if (existingUser) {
      alert('Username already exists. Please choose a different one.');
      return;
    }
  
    // Add the new user to the list
    users.push({ username: newUsername, password: newPassword });
  
    // Save the updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Sign up successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to Login Page
  });
  
  // Handle login form submission
  document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Retrieve stored users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the entered credentials match any stored user
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const redirectPage = document.getElementById('redirectPage').value;

    console.log('Redirecting to:', redirectPage);
      alert('Login successful!');
      window.location.href = redirectPage; // Redirect to Add Recipe Page
    } else {
      alert('Invalid username or password.');
    }
  });