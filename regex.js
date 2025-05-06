//signup page
//form validation

document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    // Regex patterns
    const namePattern = /^[A-Za-z\s]{2,50}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    // Reset all field styles before validation
    name.style.border = email.style.border = password.style.border = confirmPassword.style.border = "";

    // Validation checks
    if (!name.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
        alert("Please fill in all required fields.");
        highlightInvalidFields([name, email, password, confirmPassword]);
        return;
    }

    if (!namePattern.test(name.value)) {
        alert("Name should be 2–50 alphabetic characters.");
        highlightInvalidFields([name]);
        return;
    }

    if (!emailPattern.test(email.value)) {
        alert("Enter a valid email address.");
        highlightInvalidFields([email]);
        return;
    }

    if (!passwordPattern.test(password.value)) {
        alert("Password must be at least 8 characters long and include at least one letter and one number.");
        highlightInvalidFields([password]);
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        highlightInvalidFields([password, confirmPassword]);
        return;
    }

    // All validations passed — redirect to home
    window.location.href = "home.html";
});

// Function to highlight invalid fields
function highlightInvalidFields(fields) {
    fields.forEach(field => {
        field.style.border = "2px solid red"; // Add red border
    });
}

