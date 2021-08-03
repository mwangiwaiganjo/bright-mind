const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signuplink = document.querySelector(".signup-link a");
signupBtn.onclick = (()=>{
    loginForm.style.marginleft= "-50%";
});
loginBtn.onclick = (()=>{
    loginForm.style.marginleft= "-0%";
});
signuplink.onclick = (()=>{
    signupBtn.click();
});