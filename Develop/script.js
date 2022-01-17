// Assignment code here

var generatePassword = function () {
  var pwLength = window.prompt(
    "Enter a number between 8 and 128 to choose the length of your password."
  );
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    return "";
  }
  var symbols = "";
  if (
    window.confirm("Would you like to add lowercase letters to your password?")
  ) {
    symbols += "abcdefghijklmnopqrstuvwxyz";
  }
  if (
    window.confirm("Would you like to add uppercase letters to your password?")
  ) {
    symbols += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (window.confirm("Would you like to add numbers to your password?")) {
    symbols += "0123456789";
  }
  if (
    window.confirm("Would you like to add special characters to your password?")
  ) {
    symbols += " !#$%&()*+,-./:;<>=?@[]^";
  } else if (!symbols.length) {
    window.alert;
    ("You must select at least 1 type of variable to be included in your password.");
    return "";
  }
  console.log(symbols);
};

var randomNumber = function () {
  var value = Math.floor(Math.random() * (1 - 10 + 1) + 1);
  return value;
};
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
