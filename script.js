// Custom validation for email field
let email = document.getElementById('email');
email.addEventListener('input', () => {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("Your email is invalid.");
    } else {
        email.setCustomValidity("");
    }
});

// Custom validation for phone number field
let phoneNumber = document.getElementById('phone_number');
phoneNumber.addEventListener('input', () => {
    if (phoneNumber.validity.patternMismatch) {
        phoneNumber.setCustomValidity("The phone number starts with 0 and must have at least 9 digits.");
    } else {
        phoneNumber.setCustomValidity("");
    }
});

// Custom validation for password field
let passWord = document.getElementById('pass_word');
passWord.addEventListener('input', () => {
    if (passWord.validity.tooShort) {
        passWord.setCustomValidity("Your password must have at least 6 characters.");
    } else {
        passWord.setCustomValidity("");
    }
});

// Custom validation for confirm password field
let passWord2 = document.getElementById('confirm_pass_word');
passWord2.addEventListener('input', () => {
    if (passWord.value != passWord2.value) {
        passWord2.setCustomValidity("The password does not match.");
    } else {
        passWord2.setCustomValidity("");
    }
});

// Function to handle form submission
function displayThankYouNote() {
    // Remove the form after successful submission
    signUpForm.remove();

    // Display a "thank you" message on the right-side section
    const doc = document.querySelector('.right-side');
    const p = document.createElement('p');
    p.setAttribute('class', 'thankYou');                              
    p.textContent = 'You have successfully created a new account! Please check your email to receive the gift code.';
    doc.appendChild(p);
}

// Get the sign-up form and add a submit event listener
let signUpForm = document.getElementById('sign-up-form');
signUpForm.addEventListener("submit", displayThankYouNote);