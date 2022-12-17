// Assignment code here

// Variables
 var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerCase = "abcdefghijklmnopqrstuvwxyz";
 var Numerical = "0123456789";
 var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
 var passWord = "";
console.log(upperCase + lowerCase + Numerical + specialChars.length);
// Prompt for password length
function generatePassword () {

  var length = window.prompt("Choose a Password length between 8 and 128 characters long.")
    console.log(length);
  if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128 characters!");
  } 
  return(generatePassword);

}

var upCase = window.confirm("Would you like Upper case letters?");
console.log(upCase);
if (upCase == [true]){
  for (var i = 0; i < upperCase.length; i++)
  passWord.push(upperCase[i]);
}
var lowCase = window.confirm("Would you like lowers case letters?");
console.log(lowCase);
if(lowCase == [true]) {
  for (var i = 0; i <lowerCase.length; i++)
  passWord.push(lowerCase[i]);
}
var Numbers = window.prompt("would you like to add numbers");






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
