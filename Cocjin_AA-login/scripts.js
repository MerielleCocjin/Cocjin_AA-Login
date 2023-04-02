function validate(){
    var username = document.querySelector("#user");
    var error = document.querySelector("#condition");
    var password = document.querySelector("#key");

    if(username.value.length==0 && password.value.length != 0){
        error.innerHTML = "Please enter a valid username."
        console.log("Log-in error")
    }

    if(password.value.length==0 && username.value.length != 0){
        error.innerHTML = "Please enter your password."
        console.log("Log-in error")
    }

    if(username.value.length==0 && password.value.length == 0){
        error.innerHTML = "Please fill up the form"
        console.log("Log-in error")
    }

    if(username.value.length!=0 && password.value.length != 0){
        error.innerHTML = "You are successfully logged in"
        console.log("Log-in success")
        window.location = "C:/Users/Arkhi Jan/Desktop/Cocjin_AA-login/COCJIN_CS-Project/index.html"
    }
}