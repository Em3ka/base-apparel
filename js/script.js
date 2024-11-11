document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const errorMessage = document.querySelector(".error-message");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
  const redColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--red-color-600"
  );

  document.getElementById("email-form").addEventListener("submit", (event) => {
    if (!emailRegex.test(email.value)) {
      event.preventDefault();
      displayError();
    }
  });

  function displayError() {
    email.style.border = `2px solid ${redColor}`;
    errorMessage.style.opacity = 1;
  }
});
