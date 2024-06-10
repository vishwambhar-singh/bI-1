// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        if (!isValidUsername(usernameInput.value)) {
            displayError(usernameInput, 'Invalid username');
            isValid = false;
        }

        if (!isValidEmail(emailInput.value)) {
            displayError(emailInput, 'Invalid email');
            isValid = false;
        }

        if (!isValidPassword(passwordInput.value)) {
            displayError(passwordInput, 'Password must be at least 6 characters long');
            isValid = false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            displayError(confirmPasswordInput, 'Passwords do not match');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if there are validation errors
        } else {
            showSuccessPopup();
        }
    });

    function isValidUsername(username) {
        // Implement your username validation logic (e.g., length requirements, character restrictions)
        return username.length >= 3;
    }

    function isValidEmail(email) {
        // Implement email validation logic (e.g., regex pattern)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        // Implement password validation logic (e.g., length requirements)
        return password.length >= 6;
    }

    function displayError(inputElement, errorMessage) {
        const errorSpan = inputElement.parentElement.querySelector('.error');
        errorSpan.textContent = errorMessage;
    }

    function showSuccessPopup() {
        alert('Registration successful!');
    }
});
