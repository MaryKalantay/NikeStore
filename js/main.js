

function Registration() {

  let first_name = document.querySelector("#first_name").value;
  let last_name = document.querySelector("#last_name").value;
  let email = document.querySelector("#email").value;
  let password_1 = document.querySelector("#password_1").value;
  let password_2 = document.querySelector("#password_2").value;

  let new_user = {
    firstName: "No name", 
    lastName: "No name", 
    email: "No name", 
    password_1: "No name",
    password_1: "No name"
  };

  new_user.firstName = first_name, 
  new_user.lastName = last_name, 
  new_user. email = email, 
  new_user.password_1 = password_1,
  new_user.password_1 = password_1

  console.log(new_user);
};

document.getElementById("registr-submit").onclick = function() {Registration()};
