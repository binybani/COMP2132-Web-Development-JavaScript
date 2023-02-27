// Show and hide password
const togglePassword = document.querySelector("#togglePassword");
const password = document.getElementById("password");
togglePassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.innerHTML = `Hide Password`;
  } else {
    password.type = "password";
    togglePassword.innerHTML = `Show Password`;
  }
});

//get the form fields
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const studentId = document.getElementById("studentId");
const course = document.getElementById("course");

//get page elements
const messages = document.getElementById("messages");
const form = document.getElementById("myform");

// messages.style.display = "none";

// prevent form submit
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

// student number regualr expression
const studentNumberRegEx = /^a0[0-9]{7}$/i;

function testRegularExpressions(regex, stringToTest) {
  let regexObject = RegExp(regex);

  if (regexObject.test(stringToTest)) {
    // output.innerHTML += `<p>'${stringToTest}' matches pattern '${regex}'</p>`;
    return true;
  } else {
    // output.innerHTML += `<p>'${stringToTest}' does NOT match pattern '${regex}'</p>`;
    return false;
  }
}

/*
add a submit event to the form
run the validateForm function when submit occurs
*/
form.addEventListener("submit", validateForm);

/*
this function will decide if we should permit
the form data to be sent to the server or not
*/
function validateForm(event) {
  let formDataErrorsDetected = false;

  // output.innerHTML = "";
  messages.innerHTML = "";

  if (firstname.value.trim().length === 0) {
    //if firstname was left empty
    messages.style.display = "block";
    messages.innerHTML += `<li>You cannot leave the firstname field empty</li>`;

    formDataErrorsDetected = true;
  }

  if (lastname.value.trim().length === 0) {
    //if lastname was left empty
    messages.style.display = "block";
    messages.innerHTML += `<li>You cannot leave the lastname field empty</li>`;

    formDataErrorsDetected = true;
  }

  if (studentId.value.trim().length === 0) {
    //if student ID was left empty
    messages.style.display = "block";
    messages.innerHTML += `<li>You cannot leave the studen ID field empty</li>`;

    formDataErrorsDetected = true;
  }

  if (!testRegularExpressions(studentNumberRegEx, studentId.value.trim())) {
    messages.style.display = "block";
    messages.innerHTML += `<li>Please provide a BCIT student number that is valid.
    (AOnnnnnnn)</li>`;
    formDataErrorsDetected = true;
  }

  if (password.value.trim().length === 0) {
    //if password was left empty
    messages.style.display = "block";
    messages.innerHTML += `<li>Password field requires character data</li>`;

    formDataErrorsDetected = true;
  }

  if (course.value.trim() === "chooseYourCourse") {
    //if not choose coures option
    messages.style.display = "block";
    messages.innerHTML += `<li>Please choose a course from the drop down list.</li>`;

    formDataErrorsDetected = true;
  }

  if (formDataErrorsDetected === true) {
    event.preventDefault();
  }
}
