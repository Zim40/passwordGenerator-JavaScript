// Assignment code here

// Variables

 var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerCase = "abcdefghijklmnopqrstuvwxyz";
 var Numerical = "0123456789";
 var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
 var password = [];
console.log(upperCase.length + lowerCase.length + Numerical.length + specialChars.length);


// Prompt for password length
function generatePassword () {
  var length = window.prompt("Choose a Password length between 8 and 128 characters long.")
  console.log(length);
if (length < 8 || length > 128) {
  alert("Your password must be between 8 and 128 characters!");
  return password;
} 


}
// Add Uppercase letters
var upCase = window.confirm("Would you like Upper case letters?");
console.log(upCase);
if (upCase == [true]){
  for (var i = 0; i < upperCase.length; i++)
  password.push(upperCase[i]);
  
}
// Add lower case letters
var lowCase = window.confirm("Would you like lowers case letters?");
console.log(lowCase);
if(lowCase == [true]) {
  for (var i = 0; i <lowerCase.length; i++)
  password.push(lowerCase[i]);
  
}
// Add numbers 
var Numbers = window.confirm("would you like to add numbers");
console.log(Numbers);
if (Numbers == [true]) {
  for (var i = 0; i <Numerical.length; i++)
  password.push(Numerical[i]);
  
}
// Add special characters 
var specChar = window.confirm("Would you like special characters");
console.log(specChar);
if (specChar == [true]) {
  for (var i = 0; i < specialChars.length; i++)
  password.push(specialChars[i]);
  
}
// Generating Password
for (var i = 0; i< length; i++){
  password = password + [Math.floor(Math.random() * length)];
  console.log(password);
  return password;





   
    
  }



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
