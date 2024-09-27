function validateEmail() {
    // Get the email input field
    var text=document.getElementById("email").value;

    var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z{2,8}])?$/;

    if(regx.test(text)){
        window.alert("valid");
    }else{
        window.alert("invalid");
    }
}

