document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";

  if (name.length < 3) {
    errorMessage.textContent = "Name must be at least 3 characters long.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    errorMessage.textContent = "Message should be at least 10 characters.";
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});
