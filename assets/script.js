

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("generate");

var submitBtn = document.getElementById("passwordForm");

submitBtn.onclick = function () {

  var passLength = document.getElementById("passwordCharacters").value;

  // if (passLength > 128 || passLength < 8) {
  //   alert("Use a number between 8 and 128.");
  // }

  var passLowercase = document.getElementById("passwordLowercase");
  var passUppercase = document.getElementById("passwordUppercase");
  var passNumerical = document.getElementById("passwordNumerical");
  var passSpecial = document.getElementById("passwordSpecial");

  // if (passLength > 128 || passLength < 8) {
  //   alert("Use a number between 8 and 128.");
  // }
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericalArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];


  var super_array = [];

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

  var newPassword = [];

  for (let i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * super_array.length);
    console.log(random);
    newPassword.push(super_array[random]);
  }
  console.log(newPassword);
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword.join('');
}

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

// Assignment code here
function generatePassword() {
  alert(passLength);

}