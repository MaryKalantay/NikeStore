
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
function Validation() {
  var first_name = document.querySelector(".form-input[name=first_name]").value;
  var last_name = document.querySelector(".form-input[name=last_name]").value;
  var email = document.querySelector(".form-input[name=email]").value;
  var password_1 = document.querySelector(".form-input[name=pass_1]").value;
  var password_2 = document.querySelector(".form-input[name=pass_2").value;

  if (   (first_name != "") && (last_name != "") && (email != "") && (password_1 != "") && (password_2 != "")  ) {
     if ( password_1 == password_2 ) {
      document.getElementById("registr-submit").removeAttribute("disabled", "");
      console.log("name is correct");
     }
     else {
      document.getElementById("registr-submit").setAttribute("disabled", "disabled");
    }
  }
}

document.querySelector(".form-input").addEventListener("input", Validation);
document.addEventListener('input', Validation);

// Registration
function Registration() {
  new_user.firstName  = document.querySelector(".form-input[name=first_name]").value, 
  new_user.lastName  = document.querySelector(".form-input[name=last_name]").value, 
  new_user. email = document.querySelector(".form-input[name=email]").value, 
  new_user.password_1 = document.querySelector(".form-input[name=pass_1]").value,
  new_user.password_1  = document.querySelector(".form-input[name=pass_2]").value;
  console.log({new_user});
};

function registerMessage() {
  document.querySelector(".form-fields").style.display = "none";
  document.querySelector("#registr-submit").style.display = "none"
  document.querySelector(".registr-form").innerHTML += "Thank you <b>" + new_user.firstName + " " + new_user.lastName + "</b> for registration</h2>";
} 

// Action btn for registration
document.getElementById("registr-submit").addEventListener("click", function(event) {
  Registration();
  registerMessage();
  event.preventDefault();
}, false);
