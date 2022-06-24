// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("generate");

// Get the submit button within the form that opened
var submitBtn = document.getElementById("passwordForm");
// submitBtn.style.display = "none";

// Disable the submit form button until at least 1 option is checked
submitBtn.disabled = true;

// Store other form values
var passLowercase = document.getElementById("passwordLowercase");
var passUppercase = document.getElementById("passwordUppercase");
var passNumerical = document.getElementById("passwordNumerical");
var passSpecial = document.getElementById("passwordSpecial");

// When the user clicks anywhere in the modal check if checkboxes are checked
modal.onclick = function () {


  if (passLowercase.checked || passUppercase.checked || passNumerical.checked || passSpecial.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Generate the password after submit is clicked
submitBtn.onclick = function () {

  // Get password DOM area so we can clear it if user provides bad input in character number selection
  var passwordText = document.querySelector("#password");

  // Remove the modal so user can see new password
  modal.style.display = "none";

  // Reset input background in case it was turned red by previous bad user input
  document.getElementById("passwordCharacters").style.backgroundColor = "white";

  // Store user chosen password length VALUE from form
  var passLength = document.getElementById("passwordCharacters").value;

  //Validate password length is between 8 - 128 characters
  // If not, alert the user, change number input background to red, clear the password section of the DOM, and keep MODAL up
  if (passLength > 128 || passLength < 8) {
  // alert("Use a number between 8 and 128.");
  modal.style.display = "block";
  document.getElementById("passwordCharacters").style.boxShadow = "0 0 40px 20px red";
  passwordText.value = '';
  return;
   } else {
    document.getElementById("passwordCharacters").style.boxShadow = "";
   }

  // Possible password characters as arrays
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericalArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];

  // The array that will store the full scope of user chosen characters for the password
  var super_array = [];

  // If the form option is checked, push the corresponding character array to the SUPER ARRAY
  if (passLowercase.checked) {
    for (i = 0; i < lowercaseArray.length; i++) {
      super_array.push(lowercaseArray[i].concat());
    }
  }

  if (passUppercase.checked) {
    for (i = 0; i < uppercaseArray.length; i++) {
      super_array.push(uppercaseArray[i].concat());
    }
  }

  if (passNumerical.checked) {
    for (i = 0; i < numericalArray.length; i++) {
      super_array.push(numericalArray[i].concat());
    }
  }

  if (passSpecial.checked) {
    for (i = 0; i < specialArray.length; i++) {
      super_array.push(specialArray[i].concat());
    }
  }

  console.log(super_array);

  // The array where the new password will be stored
  var newPassword = [];

  // Creates the new password by looping through the SUPER ARRAY randomly
  for (let i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * super_array.length);
    console.log(random);
    newPassword.push(super_array[random]);
  }
  console.log(newPassword);
  

  // Writes the new password to the DOM
  passwordText.value = newPassword.join('');
}


// ------------------------ All MODAL stuff below here ---------------------------
// ------------------------------Modal from w3 schools website------------------------

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}