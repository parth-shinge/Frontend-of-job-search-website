document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload on form submission

        // Retrieve form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const branch = document.getElementById("branch").value;

        // Validate form fields
        if (!name || !email || !mobile || !branch) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert("Name should contain only letters and spaces.");
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert("Mobile number should be exactly 10 digits.");
            return;
        }

        // Create form data object
        const formData = {
            name: name,
            email: email,
            mobile: mobile,
            branch: branch,
        };

        // Retrieve existing data from localStorage
        let registrationData = JSON.parse(localStorage.getItem("registrationData")) || [];

        // Add the new form data
        registrationData.push(formData);

        // Save updated data back to localStorage
        localStorage.setItem("registrationData", JSON.stringify(registrationData));

        // Show success message
        successMessage.textContent = "Registration successful!";
        successMessage.style.color = "green";

        // Reset the form
        form.reset();
    });
});
