
let new_user = {
  firstName: "", 
  lastName: "", 
  email: "", 
  password_1: "",
  password_1: "",
  dateLogin: new Date()
};
console.log(new_user);

// Validation
document.querySelector(".form-input[name=first_name]").addEventListener("input", Validation);
document.querySelector(".form-input[name=last_name]").addEventListener("input", Validation);
document.querySelector(".form-input[name=email]").addEventListener("input", Validation);
document.querySelector(".form-input[name=pass_1]").addEventListener("input", Validation);
document.querySelector(".form-input[name=pass_2]").addEventListener("input", Validation);

function Validation() {
  if (this.value != " " ) {
    document.getElementById("registr-submit").removeAttribute("disabled", "");
    console.log("name is correct");
  }
}

function Registration() {
  let first_name = document.querySelector(".form-input[name=first_name]").value;
  let last_name = document.querySelector(".form-input[name=last_name]").value;
  let email = document.querySelector(".form-input[name=email]").value;
  let password_1 = document.querySelector(".form-input[name=pass_1]").value;
  let password_2 = document.querySelector(".form-input[name=pass_2").value;
  new_user.firstName = first_name, 
  new_user.lastName = last_name, 
  new_user. email = email, 
  new_user.password_1 = password_1,
  new_user.password_1 = password_1;
  console.log({new_user});
};

// Action btn for registration
function ActionRegistrButton() {
  Registration();
}

document.getElementById("registr-submit").addEventListener("click", ActionRegistrButton) 
