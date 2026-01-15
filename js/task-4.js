const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    email: emailInput,
    password: passwordInput,
  } = event.currentTarget.elements;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email,
    password,
  };

  console.log(data);
  event.currentTarget.reset();
});

