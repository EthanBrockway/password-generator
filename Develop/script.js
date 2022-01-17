// Assignment code here

var generatePassword = function () {
  var pwLength = window.prompt(
    "Enter a number between 8 and 128 to choose the length of your password."
  );
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    return "";
  }
  var charSet = "";
  if (
    window.confirm("Would you like to add lowercase letters to your password?")
  ) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (
    window.confirm("Would you like to add uppercase letters to your password?")
  ) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (window.confirm("Would you like to add numbers to your password?")) {
    charSet += "0123456789";
  }
  if (
    window.confirm("Would you like to add special characters to your password?")
  ) {
    charSet += " !#$%&()*+,-./:;<>=?@[]^";
  } else if (!charSet.length) {
    window.alert;
    ("You must select at least 1 type of variable to be included in your password.");
    return "";
  }
  console.log(charSet);
  var password = "";
  for (var i = 0; i < pwLength; i++) {
    var random = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(random);
  }
  return password;
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
