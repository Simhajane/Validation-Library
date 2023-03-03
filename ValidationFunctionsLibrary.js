
// Validates Name field and returns false if this field is empty or equals Null
function NameValidation(name) {
    if (name == null || name == "") {
        alert("We just want to know your name");
        return false;
    } else {
        return true;
    }
}

// Validates Email field and returns false if this field is empty or equals Null 
function EmailValidation(email) {

    if (email == null || email == "") {
        alert("Enter your email. No spam, we promice");
        return false;
    }
    else {

        return true;
    }
}

// Validates Password field and returns false if this field is empty or equals Null or if password length is less than 8 symbols
function PasswordValidation(password) {

    if (password == null || password == "") {
        alert("Create a password");
        return false;
    }

    if (password.length < 8) {
        alert("Password should contain at least 8 symbols");
        return false;
    }

    return true;
}

// Validates Password2 field and returns false if this field is empty or equals Null or if password2 doesn't match password
function PasswordRetypeValidation(password2) {

    if (password2 == null || password2 == "") {
        alert("Type password again");
        return false;
    }

    if (password2 != password) {
        alert("Passwords should match");
        return false;
    }

    return true;
}
