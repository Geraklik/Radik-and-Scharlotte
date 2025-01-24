// Replace with your credentials
const VALID_USERNAME = "Radik_Mersedes";
const VALID_PASSWORD = "Sigareta";

// Form handling
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validate credentials
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    // Redirect to main site
    window.location.href = "main.html"; // Replace with your main site's URL
  } else {
    // Show error message
    document.getElementById("error-message").classList.remove("hidden");
  }
});