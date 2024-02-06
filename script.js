// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

  // Function to generate password based on preferences of each user
function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var number = "1234567890";
  var special =  "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";

  // Ask the user to confirm which character types they want
  var uppercasePref = confirm ("Do you want lowercase letters in your password?");
  var lowercasePref = confirm ("Do you want uppercase letters in your password?");
  var numberPref = confirm ("Do you want numbers in your password?");
  var specialPref = confirm ("Do you want special characters in your password?");

  if (!uppercasePref && !lowercasePref && !numberPref && !specialPref) {
    alert ("You must select at least one character type in your password");
    return "";
  }
  // Ask the user what their desired password length is
  var passwordLength = prompt("How long do you want your password to be?");

  // Check if the password length is within the set parameters, and if not display the appropriate message
  if (passwordLength <8) {
    alert("Password must be at least 8 characters");
    return "";

  }else if (passwordLength >128){
    alert("Password must be less than 128 characters")
    return "";

  }else(
    alert("Password meets the correct criteria!")
  )

  // String for all the password characters to be selected based on user preference 
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

    // For loop to ensure that a random character that meets the specified length is generated each time

    for (var i = 0; i < passwordLength; i++){
      password += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));

    }
  
    // Return the generated password and display it 
    return password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
