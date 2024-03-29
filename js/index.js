const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const match = document.getElementById("match");

function matchPasswords() {
    if(passwordInput.value === passwordConfirm.value) {  
        match.classList.remove("invalid");
        match.classList.add("valid");
        passwordConfirm.setCustomValidity("");
      } else {
        match.classList.remove("valid");
        match.classList.add("invalid");
        passwordConfirm.setCustomValidity("Passwords do not match.")
      }
}

// When the user clicks on the password field, show the message box
passwordInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

passwordConfirm.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
  
// When the user clicks outside of the password field, hide the message box
passwordInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

passwordConfirm.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
function validatePassword() {
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if(passwordInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if(passwordInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    const numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(passwordInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }