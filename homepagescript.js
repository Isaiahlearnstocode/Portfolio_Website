// selecting html elements
// The #email is a css id selector that we are using in javascript
// Word before element is the name of the element in the javascript format

//let emailElement = document.querySelector('#email');
//let messageElement = document.querySelector('#message')
//let submitButton = document.querySelector('#submit-button');

// attaching click listener to a button
// sumbitButton.addEventListener('click', function(event){
    // event.preventDefault();

    // Gets the values of the email and message that the user input
    // let emailValue = emailElement.value;
    // let messageValue = messageElement.value;    
    // This prints the value of the email that the user input, the 'Email: ' before emailValue makes this data show up in the console
    // console.log('Email: ', emailValue)
    // This prints the value of the email thet the user input, the 'Message: ' before messageValue makes this data show up in the console
    // console.log('Message ', messageValue)
// getting user entered values
// javascript validations

// Checks if the email the user input is valid or not
function emailValidate(email) {
    if(email.includes('@')) {
      return true;
    }
    else {
      return false;
    }
  }
  
// When the button is clicked  
function clickListener(event) {
    // Prevent what happens at default
    event.preventDefault();
    // Takes the value input by the user
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');
  
    let emailText = emailInput.value;
    let messageText = messageInput.value;
  
    if(emailValidate(emailText) !== true) {
      console.log('The email address must contain @');
      return false;
    }
    console.log('Thanks for your message');
  }
  
  let submitButton = document.querySelector('#submit-button');
  
  submitButton.addEventListener('click', clickListener);