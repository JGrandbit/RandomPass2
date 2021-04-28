// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const numbers = '1234567890';
const specialChar = '\.[]{}()<>*+-=!?^$|';
function splitToArr(str){
  return str.split("")
}
function generatePassword(){
    let finalPassArray = [];
    let finalPass = '';
    let useLowerCaseLetters = confirm("Would you like to inslude lower case letters");
    let useUpperCaseLetters = confirm("Would you like to use uppercase letters");
    let useNumbers = confirm("Would you like to include numbers");
    let useSpecialChar  = confirm("Would you like to include special characters");
    if (!useLowerCaseLetters && !useUpperCaseLetters && !useNumbers && !useSpecialChar){
      alert("You need to choose at least one option");
      useLowerCaseLetters = confirm("Would you like to inslude lower case letters");
      useUpperCaseLetters = confirm("Would you like to use uppercase letters");
      useNumbers = confirm("Would you like to include numbers");
      useSpecialChar  = confirm("Would you like to include special characters");
    }
    let passLength  = prompt("How long the password should be");
    if (parseInt(passLength) < 8 ||parseInt(passLength) > 124)  {
        passLength = prompt("The password should be between 8 and 124 characters. Choose the length");
    }
    const passInt = parseInt(passLength);
    if (useLowerCaseLetters) finalPassArray.push(...splitToArr(lowerLetter));
    if (useUpperCaseLetters) finalPassArray.push(...splitToArr(upperLetters));
    if (useNumbers) finalPassArray.push(...splitToArr(numbers))
    if (useSpecialChar) finalPassArray.push(...splitToArr(specialChar));
    for (let i=0; i < passInt; i++)
    {
        let idx = Math.floor(Math.random() * finalPassArray.length);
        finalPass = finalPass+finalPassArray[idx];
    }
    return finalPass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
