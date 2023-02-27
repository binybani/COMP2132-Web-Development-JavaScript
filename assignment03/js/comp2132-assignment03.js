// for part one
const students = ["Jane", "Joe", "Jack", "Jill", "Jerome", "Beanie", "Jenny"];
const targetName = "bEAniE";

// for parts two and three
const arrayOfNumbers = [4, 0, -4, 13, -2];

// PART  ONE
// get array length
let totalStudent = students.length;

document.getElementById("targetName").innerHTML = targetName;
document.getElementById("totalStudent").innerHTML = totalStudent;

const nameOut = document.getElementById("nameOutput");
const nameOutEnd = document.getElementById("nameOutputEnd");

// Set Boolean Flag
let targetNameMatch = false;

// Display each student name
nameOut.innerHTML += "<ul>";
for (let index = 0; index <= totalStudent - 1; index++) {
  let studentName = students[index];
  if (targetName.toLowerCase() == studentName.toLowerCase()) {
    nameOut.innerHTML += `<li><span class="targetNameFound">&#x1F44D; ${studentName} <-- target name found!</span></li>`;
    targetNameMatch = true;
  } else {
    nameOut.innerHTML += `<li>${studentName}</li>`;
  }
}
nameOut.innerHTML += "</ul>";

// Show the message depends on having the target name or not
if (targetNameMatch) {
  nameOutEnd.innerHTML += `<p class="targetNameFound">&#x1F44D; YES! Target name was found in the list</p>`;
} else {
  nameOutEnd.innerHTML += `<p class="targetNameFound">&#x1F44E; NO, Target name was NOT found in the list</p>`;
}

// Part Two
const numberOut = document.getElementById("numberOutput");
const evenNumber = document.getElementById("even");
const oddNumber = document.getElementById("odd");
const sumNumbers = document.getElementById("sum");

// Set empty array for even/odd numbers
const even = [];
const odd = [];

// Initail sum number
let totalNumberOfSum = 0;

// Display each number
numberOut.innerHTML += "<ul>";
arrayOfNumbers.forEach(function (number, index) {
  totalNumberOfSum += number;
  number = arrayOfNumbers[index];
  numberOut.innerHTML += `<li>${number}</li>`;
  if (number % 2 == 0 && number != 0) {
    even.push(number);
  } else if (number % 2 > 0 && number != 0) {
    odd.push(number);
  }
});
numberOut.innerHTML += "</ul>";

// Even number array length
evenNumber.innerHTML = even.length;

// Odd number array length
oddNumber.innerHTML = odd.length;

// Dispaly total sum of numbers
sumNumbers.innerHTML = totalNumberOfSum;

// Part three
const countNumber = document.getElementById("countUpDown");
let arrayOfNumbersLength = arrayOfNumbers.length;

countNumber.innerHTML += "<ul>";
arrayOfNumbers.forEach(function (number, index) {
  number = arrayOfNumbers[index];
  countNumber.innerHTML += `<h2 class="countUpDown">Number: ${number}</h2>`;
  if (number == 0) {
    countNumber.innerHTML += `<p>There is no counting to be done.</p>`;
  } else if (number > 0) {
    for (let downNumber = number; downNumber >= 0; downNumber--) {
      countNumber.innerHTML += `<li>${downNumber}</li>`;
    }
  } else {
    for (let upNumber = number; upNumber <= 0; upNumber++) {
      countNumber.innerHTML += `<li>${upNumber}</li>`;
    }
  }
});
countNumber.innerHTML += "</ul>";
