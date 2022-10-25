// validation

let RegistrationForm = document.getElementById("registration-form");
RegistrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  console.log(event.target);
  let formElement = event.target;

  // username
  let usernameValue = document.getElementById("username").value;
  // let usernameValue = document.querySelector(`[name = "myusername"]`);

  if (usernameValue == " ") {
    errors.myusername = "Username field can not be empty ";
  }
  if (usernameValue.length < 5) {
    errors.myusername = "username must be more than 5 characters";
  }

  // password
  let password1 = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
  if (password1 == "") {
    errors.mypassword = "password field can not be empty";
  }
  if (password1 != password2) {
    errors.mypassword2 = "Passwords do not match ";
  }

  // Radio

  let age = false;

  formElement.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });
  if (!age) {
    errors.age = "please select your age";
  }

  // checkbox
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree to our terms and conditions";
  }

  console.log(errors);

  formElement.querySelectorAll(".error-text").forEach((item) => {
    item.textContent = " ";
  });
  for (let item in errors) {
    console.log(item);
    let spanError = document.getElementById("error_" + item);
    if (spanError) {
      spanError.textContent = errors[item];
    }
  }
  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }
});

// show hide password

let passwordfield = document.getElementById("password");
let toggleIcon = document.getElementById("toggleicon");

toggleIcon.addEventListener("click", function () {
  if (passwordfield.type == "password") {
    passwordfield.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordfield.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});
