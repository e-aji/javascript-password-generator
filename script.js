// Assignment Code
var generateBtn = document.querySelector("#generate");

var useUppercase = ["A","B","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
var useLowercase = ["a","b","c","d","e","f","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
var useNumbers = ["0", "1","2","3","4","5","6","7","8","9"];
var useSpecialChar = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","]","^","_","`","{","|","}","~"];

var userOptions = {
  useUppercase: true, 
  useLowercase: true,
  useNumbers: true,
  useSpecialChar: true,
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  var password = userOptions[Math.floor(Math.random() * userOptions.length)];
  passwordText.value = password;

return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}