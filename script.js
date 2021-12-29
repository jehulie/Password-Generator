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
// if/conditional check if length between 8-128 [look for condition that has between statement]
// if true continue to confirms, false ask length again  

  var lengthChoice = prompt("Please choose a length between 8-128 characters for your password.");

  if (!lengthChoice) {
    return;
  }
  else if (lengthChoice <=128 || lengthChoice>=8) {
  confirm ("Is " + lengthChoice + " the length you want for your password?");
  };

  console.log("length:", lengthChoice);

  if (lengthChoice <8 || lengthChoice >128) {
    lengthChoice = prompt ("This is not the right length.\nPlease choose a correct number - between 8 and 128.");
    if (!lengthChoice) {
      return;
      }
    else if (lengthChoice <=128 || lengthChoice>=8) {
      confirm ("Is " + lengthChoice + " the length you want for your password?");
      };
    console.log("length revision: ", lengthChoice);
    };
    
// confirm("Press a button!")
//confirm for lower, upper, nums, special
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

  // arrays of lower, upper, nums, special
  // array of all chosen characters - concat into keyChoice

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var nums =  "0123456789";
  var symbol = "@#$%^&*()";
  var keyChoice = ""

  if (upperChoice) {
      keyChoice = upper;
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

  // Randomly generate password srtring from choices
    // For loop, run based on length prompt (var lengthChoice) + chosen character types (var keyChoice)




  }

  };  

//Input Validation - correct nums, atleast 1 character chosen
  // if/conditional check using || true continue to generate, false ask confirm again

  // choose from the all options array number of characters required (length prompt)
    // For loop, run based on length prompt
    // Math.random - randomly choose index positions from array [double check]
      //[paste code]
    // grab from our chosen array, add to password array
    // convert array to string
    //return string
    // if you can figure out how to get string returned, put password in alert to screen

// display password in text box - write to page

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
