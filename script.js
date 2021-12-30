// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Write function to generate password
function generatePassword (){

//Present user series of prompts/confirms
  // if/conditional check if length between 8-128
  // if true continue to confirm, false ask length again

  var lengthChoice = parseInt(prompt("Pick a length between 8-128 characters for your password."));

  if (!lengthChoice) {
    return null;
  };

  if (lengthChoice <=128 || lengthChoice>=8) {
    var confirmLength = confirm ("Is " + lengthChoice + " the length you want for your password?");
    if (!confirmLength) {
      return null;
    };
  };

  console.log("length:", lengthChoice);

  if (lengthChoice <8 || lengthChoice >128) {
    lengthChoice = prompt ("Sorry! This is not an acceptable length.\nPlease choose a correct number - between 8 and 128.");
    if (!lengthChoice) {
      return null;
      }

    else if (lengthChoice <=128 || lengthChoice>=8) {
      var confirmLength = confirm ("Is " + lengthChoice + " the length you want for your password?");
    if (!confirmLength) {
      return null;
      }
    };
    console.log("length revision: ", lengthChoice);
    };
    
// Confirm process for choosing character types ("Press a button!")
  //Confirm choices for lower, upper, nums, special

  alert("Please press button to choose character types for your password.");

  var upperChoice = confirm ("Use upper case?");
  var lowerChoice = confirm ("Use lower case?");
  var numsChoice = confirm ("Use numbers?");
  var symbolChoice = confirm ("Use symbols?");
  
  console.log("upper choice: ", upperChoice); 
  console.log("lower choice: ", lowerChoice); 
  console.log("number choice: ", numsChoice); 
  console.log("symbol choice: ", symbolChoice); 

//Input Validation - at least 1 character type chosen
  // if/conditional check; if no character choices made, ask confirm again

  if (!upperChoice && !lowerChoice && !numsChoice && !symbolChoice) {
    alert ("You did not choose any character types.\nPlease choose again.")
    upperChoice = confirm ("Use upper case?")
    lowerChoice = confirm ("Use lower case?")
    numsChoice = confirm ("Use numbers?")
    symbolChoice = confirm ("Use symbols?")
  };

  console.log("upper choice 2: ", upperChoice); 
  console.log("lower choice 2: ", lowerChoice); 
  console.log("number choice 2: ", numsChoice); 
  console.log("symbol choice 2: ", symbolChoice); 

// Arrays of lower, upper, nums, special
// Array of all chosen characters - concat into var keyChoice

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var nums =  "0123456789";
  var symbol = "@#$%^&*()";
  var keyChoice = ""

  if (upperChoice) {
      keyChoice = keyChoice.concat(upper);
      };
  if (lowerChoice) {
      keyChoice = keyChoice.concat("", lower);
      };
  if (numsChoice) {
      keyChoice = keyChoice.concat("", nums);
      };
  if (symbolChoice) {
      keyChoice = keyChoice.concat("", symbol);
      };
    
  console.log("Selected Keys: ", keyChoice); 
    
// Randomly generate password string from choice of character types
  // For loop, run based on user input to length prompt (var lengthChoice) + chosen character types (var keyChoice)

  var result="";
  
  for (var i = 0; i < lengthChoice; ++i) {
    var rnum = Math.floor(Math.random() * keyChoice.length);
    result += keyChoice.charAt(rnum);
  };

  console.log("Password: ", result);

// Display password in text box - write to page
  return result;

  }; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);