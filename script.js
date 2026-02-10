function generate() {
    let passwordDisplay = document.getElementById("passwordDisplay");
    
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let passwordLength = 8;
    let createdPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        createdPassword = createdPassword + characters[randomNumber];
    }

    passwordDisplay.value = createdPassword;
}