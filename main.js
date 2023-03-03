// function submit() {
//     let name = document.getElementById('name').value;
//     return NameValidation(name)
// }

function Validation() {
    const name = document.getElementById('name').value;
    const inputName = document.getElementById('name');

    if (NameValidation(name) == true) {
        inputName.classList.add('correct-data')
    } else {

        inputName.classList.add('false-data')

    }

    const email = document.getElementById('email').value;
    const inputEmail = document.getElementById('email');

    if (EmailValidation(email) == true) {
        inputEmail.classList.add('correct-data')
    } else {

        inputEmail.classList.add('false-data')

    }

    const password = document.getElementById('password').value;
    const inputPassword = document.getElementById('password');

    if (PasswordValidation(password) == true) {
        inputPassword.classList.add('correct-data')
    } else {

        inputPassword.classList.add('false-data');

    }

    const password2 = document.getElementById('password2').value;
    const inputPassword2 = document.getElementById('password2');

    if (PasswordRetypeValidation(password) == true) {
        inputPassword2.classList.add('correct-data')
    } else {

        inputPassword2.classList.add('false-data');

    }

}
