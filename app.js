const passwordBox = document.getElementById('password')
const button = document.querySelector('button')
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!@$%^&*()}{|\/?";
const numbers = "123456789";
const allCharacters = upperCase + lowerCase + specialCharacters + numbers;

function generateRandomPassword(){
    let password = '';
    // password += upperCase[Math.floor(Math.random()*upperCase.length)]
    // password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    // password += specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
    // password += numbers[Math.floor(Math.random()*numbers.length)]
    while(length> password.length){
        password += allCharacters[Math.floor(Math.random()*allCharacters.length)]
    }
    passwordBox.value = password
    console.log(password);
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

button.addEventListener('click',generateRandomPassword)