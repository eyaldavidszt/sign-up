let pw = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
let message = document.querySelector(".message");

confirm.addEventListener('keyup', (e) => {
    if (pw.value == confirm.value) 
    {
        confirm.setCustomValidity("");
        message.textContent = "";
        console.log(confirm.validity);
    }
    else {
        confirm.setCustomValidity("Passwords don't match.");
        message.textContent = "Passwords don't match";
        console.log(confirm.validity);
    }

});