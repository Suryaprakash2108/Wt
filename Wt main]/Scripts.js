// DOM elements for profile, modals, and forms
const profilePic = document.getElementById('profilePic');
const profileUsername = document.getElementById('profileUsername');

const loginModal = document.getElementById('loginModal');
const loginClose = document.getElementById('loginClose');
const loginForm = document.getElementById('loginForm');

const signUpModal = document.getElementById('signUpModal');
const signUpClose = document.getElementById('signUpClose');
const signUpForm = document.getElementById('signUpForm');
const showSignUp = document.getElementById('showSignUp');

// Show login modal when profile picture is clicked
profilePic.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close login modal
loginClose.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close sign-up modal
signUpClose.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Show sign-up modal when "Sign up" link is clicked
showSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signUpModal.style.display = 'block';
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple login check (you can replace this with a real authentication check)
    if (username && password) {
        localStorage.setItem('loggedInUser', username);
        profileUsername.textContent = username;
        loginModal.style.display = 'none';
    } else {
        alert('Please enter your credentials.');
    }
});

// Handle sign-up form submission
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save user info and log them in
    localStorage.setItem('loggedInUser', username);
    profileUsername.textContent = username;
    signUpModal.style.display = 'none';
});

// Display logged-in username if already saved in localStorage
window.onload = () => {
    const loggedInUser = localStorage.getItem('loggedInUser') || 'Guest';
    profileUsername.textContent = loggedInUser;
};
