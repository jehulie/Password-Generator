// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){

//Present user series of prompts/confirms
  //length of prompt - var lengthChoice
  //length prompt / number between 8 - 128
// if/conditional check if length between 8-128
// if true continue to confirm, false ask length again

  // ** How do I make this a loop that repeats until the condition is fulfilled? ** 

  var lengthChoice = prompt("Pick a length between 8-128 characters for your password.");

  if (!lengthChoice) {
    return;
  };

//  ** Can't get the return code below for the "cancel" button to work! **

if (lengthChoice <=128 || lengthChoice>=8) {
    confirm ("Is " + lengthChoice + " the length you want for your password?");
    if (!lengthChoice) {
      return;
    };
  };
  

  console.log("length:", lengthChoice);

  if (lengthChoice <8 || lengthChoice >128) {
    lengthChoice = prompt ("Sorry! This is not an acceptable length.\nPlease choose a correct number - between 8 and 128.");
    if (!lengthChoice) {
      return;
      }
  
//  ** Can't get the return code below for the "cancel" button to work! **

    else if (lengthChoice <=128 || lengthChoice>=8) {
      confirm ("Is " + lengthChoice + " the length you want for your password?");
    if (!lengthChoice) {
      return;
      }
    };
    console.log("length revision: ", lengthChoice);
    };
    
// Confirm process for choosing character types ("Press a button!")
  //Confirm choices for lower, upper, nums, special
  //lower confirm - var lowerChoice
  //upper confirm - var upperChoice
  //nums confirm - var numsChoice
  //special confirm - var SpcChoice

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

  // ** How do I make this a loop that repeats until the condition is fulfilled? ** 

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

    // ** Why is the loop not drawing from the entire string of keyChoice to randomize? **
    // ** Why is it not generating the correct length if lengthChoice exceeds keyChoice? **

  var result="";

// This first attempt at the loop didn't generate a result if the lengthChoice is greater than keyChoice...
  // for (var i = 0; i < lengthChoice; i++){ 
  // result += keyChoice[Math.floor(Math.random() * lengthChoice)];
  
  for (var i = 0; i < lengthChoice; ++i) {
    var rnum = Math.floor(Math.random() * lengthChoice);
    result += keyChoice.substring(rnum, rnum+1);
  };

  console.log("Password: ", result);

  // display password in text box - write to page
  return result;

  }; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);