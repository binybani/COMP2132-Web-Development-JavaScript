/*
these data points represent different 
aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN = 30;
const minimumAgeToAttend = 21;
const taxRate = 0.1;

/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 
- change these values as you test your script!
*/
const userName = "Beanie Kim";
const age = "4";
const cashOnHandDollarsCDN = "32";
const quantityOfTickets = "4";
const userSay = `${userName} says: "Let\'s buy some tickets to the big virtual concert!"`;

// Intro
document.getElementById("userName").innerHTML = userName;
document.getElementById("userSay").innerHTML = userSay;

// User Data
document.getElementsByClassName("userName")[0].innerHTML = userName;
document.getElementById("userAge").innerHTML = age;
document.getElementById("ticketQty").innerHTML = quantityOfTickets;
document.getElementById("cash").innerHTML = cashOnHandDollarsCDN;

// Concert Data
document.getElementById("minAge").innerHTML = minimumAgeToAttend;
document.getElementById("ticketCost").innerHTML = ticketCostDollarsCDN;
let taxRatePercent = taxRate * 100;
document.getElementById("taxRate").innerHTML = taxRatePercent;

// Processing Purchase
let beforeTaxTotalCost = ticketCostDollarsCDN * quantityOfTickets;
let afterTaxTotalCost = (
  beforeTaxTotalCost +
  taxRate * beforeTaxTotalCost
).toFixed(2);
let totalCostText = `Purchasing ${quantityOfTickets} ticket(s) at &#36;${ticketCostDollarsCDN}: &#36;${beforeTaxTotalCost}`;
let taxTotalCostText = `After tax total cost: &#36;${afterTaxTotalCost}`;
let canAffordText = "The user can afford this.";
let oldEnoughText = `User is old enough to attend the show by ${
  age - minimumAgeToAttend
} year(s).`;
let sameAgeText =
  "User will be exactly old enough to attend the show! Proceeding with ticket sales...";

document.getElementById("totalCost").innerHTML = totalCostText;
document.getElementById("taxTotalCost").innerHTML = taxTotalCostText;

// If Condition Statements
if (age > minimumAgeToAttend) {
  document.getElementById("ageCondition").innerHTML = oldEnoughText;
} else if (age == minimumAgeToAttend) {
  document.getElementById("ageCondition").innerHTML = sameAgeText;
}

// Results
let needAge = minimumAgeToAttend - age;
let needCost = afterTaxTotalCost - cashOnHandDollarsCDN;

let ageWarningText = `Sorry. You are ${age} and that's not old enough to attend this show.
You would need to be ${needAge} years older than you actually are. Too bad, kiddo!`;
let costWarningText = `Sorry, ${userName}, you cannot afford this! You need &#36;${needCost} more.`;
let noErrorText = `&#x1F44D; There are no error messages to report. Enjoy the show!`;

let ageWarning = document.getElementsByClassName("massage")[1];
let costWarning = document.getElementsByClassName("massage")[2];

// If Condition Statements
if (needAge > 0 && needCost <= 0) {
  ageWarning.className = "warning";
  ageWarning.innerHTML = ageWarningText;
  document.getElementById("afford").innerHTML = canAffordText;
} else if (needAge <= 0 && needCost > 0) {
  costWarning.className = "warning";
  costWarning.innerHTML = costWarningText;
} else if (needAge > 0 && needCost > 0) {
  ageWarning.className = "warning";
  ageWarning.innerHTML = ageWarningText;
  costWarning.className = "warning";
  costWarning.innerHTML = costWarningText;
  document.getElementById("afford").innerHTML = canAffordText;
} else {
  document.getElementsByClassName("massage")[0].innerHTML = noErrorText;
  document.getElementById("afford").innerHTML = canAffordText;
}
