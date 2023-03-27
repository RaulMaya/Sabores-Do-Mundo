const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector("#firstNameSignUp").value.trim();
  const lastname = document.querySelector("#lastNameSignUp").value.trim();
  const username = document.querySelector("#usernameSignUp").value.trim();
  const email = document.querySelector("#emailSignUp").value.trim();
  const password = document.querySelector("#passwordSignUp").value.trim();

  if (firstname && lastname && username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ firstname, lastname, username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .getElementById("signUpLi")
  .addEventListener("submit", signupFormHandler);
