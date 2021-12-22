function displayLogin() {
   document.getElementsByClassName("Login").style.visibility = "visible";
   document.getElementsByClassName("Signup").style.visibility = "hidden";
}
function displaySignup() {
   document.getElementsByClassName("Login").style.visibility = "hidden";
   document.getElementsByClassName("Signup").style.visibility = "visible";
}

document.getElementById("Loginshow").addEventListener("click", displayLogin);
document.getElementById("Signupshow").addEventListener("click", displaySignup);