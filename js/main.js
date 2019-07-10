// click button "registr" 
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
    password_1: "No name",
    dateLogin: new Date()
  };

  new_user.firstName = first_name, 
  new_user.lastName = last_name, 
  new_user. email = email, 
  new_user.password_1 = password_1,
  new_user.password_1 = password_1;

  localStorage.setItem (new_user.id, JSON.stringify(new_user));
  
  let userInlocalStorage = localStorage.getItem(new_user);
  
  console.log(new_user, userInlocalStorage);
};

document.getElementById("registr-submit").onclick = function() {Registration()};


// test sessionStorage & localStorage
if (window.sessionStorage && window.localStorage) {
  console.log("объекты sessionStorage и localtorage поддерживаются")
}
else {
  console.log("объекты sessionStorage и localtorage Не поддерживаются")
}

let colorRegistrBtn;
localStorage.setItem("colorRegistrBtn","green");
var bgColor = localStorage.getItem("colorRegistrBtn");
console.log(bgColor);