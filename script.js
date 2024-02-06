// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var number = "1234567890";
  var special =  "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";

  
  var uppercasePref = confirm ("Do you want lowercase letters in your password?");
  var lowercasePref = confirm ("Do you want uppercase letters in your password?");
  var numberPref = confirm ("Do you want numbers in your password?");
  var specialPref = confirm ("Do you want special characters in your password?");

  if (!uppercasePref && !lowercasePref && !numberPref && !specialPref) {
    alert ("You must select at least one character type in your password");
    return "";
  }
  var passwordLength = prompt("How long do you want your password to be?");

  if (passwordLength <8) {
    alert("Password must be at least 8 characters");
    return "";

  }else if (passwordLength >128){
    alert("Password must be less than 128 characters")
    return "";

  }else(
    alert("Password meets the correct criteria!")
  )

    var passwordChar = "";

    if (uppercasePref) {
      passwordChar += uppercase;

    }
    if (lowercasePref) {
      passwordChar += lowercase;

    }
      if (numberPref) {
        passwordChar += number;
    }

      if (specialPref) {
        passwordChar += special;
    }
    
    var password = "";

    /* For loop to ensure that a random character that meets the specified length is selected each time*/

    for (var i = 0; i < passwordLength; i++){
      password += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));

    }
  
    return password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
