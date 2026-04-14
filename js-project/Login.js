var logincon = document.querySelector(".logincon")
var loginpage = document.querySelector(".loginpage")
var left = document.querySelector(".left")
var right = document.querySelector(".right")
var account = document.querySelector(".account")
var bigtext = document.querySelector(".bigtext")
var smalltext = document.querySelector(".smalltext")
var bigtext2 = document.querySelector(".bigtext2")
var smalltext2 = document.querySelector(".smalltext2")
var login = document.querySelector(".login")
var atext4 = document.querySelector(".atext4")
var atext5 = document.querySelector(".atext5")
var signup = document.querySelector(".signup")
var biglogin = document.querySelector(".biglogin")
function first() {
    loginpage.classList.toggle("activity1")
    account.classList.toggle("activity2")
    login.classList.toggle("activity3")
    atext4.classList.toggle("activity4")
    atext5.classList.toggle("activity5")
}
function second() {
    loginpage.classList.toggle("activity6")
    account.classList.toggle("activity7")
    login.classList.toggle("activity8")
    atext4.classList.toggle("activity9")
    atext5.classList.toggle("activity10")
}
const email2 = document.getElementById("loginemail2")
const password2 = document.getElementById("loginpassword2")
const repeat = document.getElementById("passwordcopy")

const emailInput = document.getElementById("loginemail");
const passwordInput = document.getElementById("loginpassword");
const loginBtn = document.querySelector(".text"); // Sizda .text klassli element ekan

loginBtn.addEventListener("click", function () {
    if (passwordInput.value.length >= 8 && emailInput.value.endsWith("@gmail.com")) {
        let userName = prompt("Enter your name:");

        if (userName) {
            localStorage.setItem("userEmail", emailInput.value);
            localStorage.setItem("userPassword", passwordInput.value);
            localStorage.setItem("userName", userName);
            localStorage.setItem("isLoggedIn", "true");

            alert("You have successfully logged in!");
            window.location.href = "phone.html";
        } else {
            alert("Name not entered!");
        }

    } else {
        alert("Email or password is incorrect! (Password must be at least 8 characters and end with @gmail.com)");
    }
});
smalltext2.addEventListener("click", function(){
    if(email.value === email2.value && password.value === password2.value){
        logincon.style.display = "none";
        document.body.style.background = "white"
        var bigtext4 = document.createElement("div");
        document.body.appendChild(bigtext4);
        document.body.classList.toggle("display")
        bigtext4.style.fontSize = "60px"
        bigtext4.style.fontWeight = "bold"
        bigtext4.classList.toggle("color")

        bigtext4.innerHTML = "You Successfully Signed In! 😊";
        var back = document.createElement("div")
        document.body.appendChild(back)
        back.classList.toggle("back")
        back.innerHTML = "Back to initial page"
        back.addEventListener("click", function () {
            window.location.href = "phone.html"
        })
    } else {
        alert("Error! Please check your email or password!😐")
    }
})