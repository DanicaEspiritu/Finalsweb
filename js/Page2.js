
var signup_link = document.querySelector(".a1")
var login_link = document.querySelector(".a2")

var signup_form = document.querySelector('.signup-form');
var login_form = document.querySelector('.login-form');

var sign_sub= document.querySelector('.sign-sub');
var log_sub= document.querySelector('.log-sub');

sign_sub.addEventListener('click', signupAlert);
log_sub.addEventListener('click', loginAlert);

function signupAlert(){
    alert("Signed Up Successfully!");
}
function loginAlert(){
    alert("Logged In Successfully!");
}

login_link.addEventListener('click', signup_hide);
signup_link.addEventListener('click', login_hide);

function signup_hide(){
    signup_form.style.display = "none";
    login_form.style.display = "block";
    signup_link.style.background = "white";
    login_link.style.background = "maroon";
    login_link.style.color = "black";
}
function login_hide(){
    signup_form.style.display = "block";
    login_form.style.display = "none";
    signup_link.style.background = "maroon";
    login_link.style.background = "white";
}

