// Predefined user credentials
const users = {
  tgco24bhu1104: { password: "U?iQzOMer6", pdf: "pdfs/user.pdf" },
  admin: { password: "securepass", pdf: "pdfs/user.pdf" },
};

const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const loginContainer = document.querySelector(".login-container");

// Handle login form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userID = document.getElementById("userID").value.trim();
    const password = document.getElementById("password").value.trim();

    if (users[userID] && users[userID].password === password) {
        // Dim the login box
        loginContainer.style.opacity = "0.5"; // Dims the login container

        // Add a delay before navigating to the PDF display page
        setTimeout(() => {
            // Save user information to sessionStorage
            sessionStorage.setItem("loggedInUser", JSON.stringify(users[userID]));

            // Redirect to the PDF display page
            window.location.href = "pdf-display.html";
        }, 2000); // 2-second delay
    } else {
        // Show error message for invalid credentials
        errorMessage.textContent = "Invalid User ID or Password!";
    }
});
