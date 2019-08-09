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
  disabledBtn();
}


function disabledBtn() {
  let first_name = document.querySelector(".form-input[name=first_name]").value;
  let user_email = document.querySelector(".form-input[name=email]").value;
  let password_1 = document.querySelector(".form-input[name=pass_1]").value;
  let password_2 = document.querySelector(".form-input[name=pass_2").value;
  
  if ( (first_name != "") && ( validateEmail(user_email) ) && ( validatePass(password_1, password_2) ) ) {
     document.getElementById("registr-submit").removeAttribute("disabled", "");
    }
    else {
     document.getElementById("registr-submit").setAttribute("disabled", "disabled");
   }
}

function validatePass(pass1, pass2) {
  if ( (pass1 != "") && (pass2 != "") ) {
    if ( pass1 == pass2 ) {
      document.querySelector(".success-pass").style.display = "flex";
      document.querySelector(".error-pass").style.display = "none";
    }
    else {
      document.querySelector(".error-pass").style.display = "flex";
      document.querySelector(".success-pass").style.display = "none";  
    }
    return true
  }
}


function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    document.querySelector(".success-email").style.display = "flex";
    document.querySelector(".error-email").style.display = "none";
  }
  else {
    document.querySelector(".error-email").style.display = "flex";
    document.querySelector(".success-email").style.display = "none";
  }
}


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

//Action btn for registration
document.querySelector("#registr-submit").addEventListener("click", function(event) {
  Registration();
  registerMessage();
  event.preventDefault();
}, false);

