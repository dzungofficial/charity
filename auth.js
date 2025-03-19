// Registration Functionality
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Save user data to localStorage
        const user = { name, email, password };
        localStorage.setItem(email, JSON.stringify(user));

        alert('Registration successful! Please sign in.');
        window.location.href = 'signin.html';
    });
}

// Sign-In Functionality
const signinForm = document.getElementById('signinForm');
if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from localStorage
        const user = JSON.parse(localStorage.getItem(email));

        if (user && user.password === password) {
            alert('Sign in successful!');
            localStorage.setItem('loggedInUser', email); // Track logged-in user
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            alert('Invalid email or password.');
        }
    });
}

// Logout Functionality
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser'); // Clear session
        alert('You have been logged out.');
        window.location.href = 'index.html'; // Redirect to sign-in page
    });
}