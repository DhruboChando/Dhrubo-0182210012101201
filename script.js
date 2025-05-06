const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

// Function to update button color when input changes
function updateButtonColor() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email && password) {
        submitButton.style.backgroundColor = '#FF4F00'; 
        submitButton.style.color = 'white';  
        submitButton.disabled = false; 
    } else {
        submitButton.style.backgroundColor = '#ccc'; 
        submitButton.style.color = '#888'; 
        submitButton.disabled = true; 
    }
}

// Adding event listeners to the input fields to trigger the button color update
emailInput.addEventListener('input', updateButtonColor);
passwordInput.addEventListener('input', updateButtonColor);

// form submission
document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // login is successful, redirect to home.html
    window.location.href = "home.html";
});





//signup page
//form validation
// document.getElementById('my-form').addEventListener('submit', function (e) {
// const email = document.getElementById('email').value.trim();
// const password = document.getElementById('password').value.trim();
                
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // at least 6 chars, one letter and one number
                
//     if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         e.preventDefault(); // prevent form submission
//         return;
//     }
                
//     if (!passwordRegex.test(password)) {
//         alert("Password must be at least 6 characters long and contain at least one letter and one number.");
//         e.preventDefault(); // prevent form submission
//         return;
//     }
                
        
// });