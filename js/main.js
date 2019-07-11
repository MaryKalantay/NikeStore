
let new_user = {
  firstName: "", 
  lastName: "", 
  email: "", 
  password_1: "",
  password_1: "",
  dateLogin: new Date()
};
console.log(new_user);

let first_name = document.querySelector(".form-input[name=first_name]").value;
let last_name = document.querySelector(".form-input[name=last_name]").value;
let email = document.querySelector(".form-input[name=email]").value;
let password_1 = document.querySelector(".form-input[name=pass_1]").value;
let password_2 = document.querySelector(".form-input[name=pass_2").value;

// Validation
document.querySelector(".form-input[name=first_name]").addEventListener("change", Validation(first_name, 12));

function Validation(input, value) {
  if (input != "" ) {
    document.getElementById("registr-submit").removeAttribute("disabled", "");
    console.log("valid")
  }
  else {
    document.getElementById("registr-submit").setAttribute("disabled", "");
    console.log("error")
  }  
}




function Registration() {
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
