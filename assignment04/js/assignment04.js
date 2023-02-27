/* This page incokes functions defined sxternlay
grab HTML elements for output*/
const imagesOutput = document.getElementById("imagesOutput");
const linksOutput = document.getElementById("linksOutput");
const namesOutput = document.getElementById("namesOutput");

/* Part one invocation */
// Prepare some output for the DOM
let html = ``;

// Try functionu using invalid arguments
html += `<h3>Invoke Not using Required Array Argument</h3>`;
html += `<p>Invoking with a string, not an array.</p>`;
html += makeListOfImages(notAnArrayOfImages);
html += makeListOfImages(alsoNotAnArrayOfImages);

// Try with array that contain the wrong type of data
html += `<h3>Invoke With Arrays Containing Wrong Data Type</h3>`;
html += `<p>Invoking with an array of numbers, not string image names</p>`;
html += `<p>(See Console for function error message).</p>`;
html += makeListOfImages(anArrayOfNumbers);
html += `<p>Invoking with an array of booleans, not string image names</p>`;
html += `<p>(See Console for function error message).</p>`;
html += makeListOfImages(anArrayOfBooleans);

// Try with array that contain the correct type of data
html += `<p>Invoking with a valid array of image names.</p>`;
html += makeListOfImages(arrayOfImages);

// Try with array that contain mix with the correct and wrong type of data
html += `<p>Invoking with an array of some image names and some junk</p>`;
html += `<p>(See Console for function error messages).</p>`;
html += makeListOfImages(arrayOfSomeImages);

imagesOutput.innerHTML = html;

/* Part two invocation */
// Prepare some output for the DOM
html = ``;

// Try functionu using invalid arguments
html += `<p>Trying with an array that conanis booleans, and not string urls...</p>`;
html += `<p>(See Console for function error message).</p>`;
html += makeListOfLinks(notAnArrayOfLinks);
html += `<p>Trying with a number, not an array...</p>`;
html += makeListOfLinks(alsoNotAnArrayOfLinks);

// Try with array that contain the correct type of data
html += `<p>Trying with a valid array of link URLS...</p>`;
html += makeListOfLinks(arrayOfLinks);

// Try with array that contain the wrong type of data
html += `<p>Trying with a array of link URLs and also junk...</p>`;
html += makeListOfLinks(anotherArrayOfLinks);

linksOutput.innerHTML = html;

/* Part three invocation */
// Prepare some output for the DOM
html = ``;

// Try functionu using invalid arguments
html += `<p>Providing invalid parameter (not an array)</p>`;
html += makeListOfNames(notAnArrayOfNames);
html += `<p>Providing invalid parameter (array is too small)</p>`;
html += makeListOfNames(arrayOfNamesTooSmall);

// Try functionu using invalid second parameter
html += `<p>Providing invalid second parameter (can only make 'ul' or 'ol' lists)</p>`;
html += makeListOfNames(alsoNotAnArrayOfLinks, "cheeseburger");

// Try with array that contain the correct type of data
html += `<p>Providing valid parameter array, using default second parameter for list type 'ul'</p>`;
html += makeListOfNames(arrayOfNames);

// Try with array that contain the correct type of data and wrong second parameter
html += `<p>Providing valid parameter array with second parameter of 'cheeseburger' instead of 'ul' or 'ol'</p>`;
html += makeListOfNames(arrayOfNames, "cheeseburger");

// Try with array that contain the correct type of data and second parameter 'ol'
html += `<p>Providing valid parameter array with second parameter of 'ol' instead of 'ul'</p>`;
html += makeListOfNames(arrayOfNames, "ol");

namesOutput.innerHTML = html;
