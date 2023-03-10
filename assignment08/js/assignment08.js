//3000 millseconds == 3 seconds
const delay = 3000;

//get page elements
const popup = document.getElementById("hello");
const closePopup = document.getElementById("close-pop-up");
const buttonField = document.getElementById("btn_fieldset");

//create a boolean flag to track if the animation is underway or not
let animationIsUnderway = false;

// bike Animation
const btnStartBike = document.getElementById("btn-start-animation");
const btnStopBike = document.getElementById("btn-stop-animation");
const bikeImageInHTML = document.getElementById("bike");

//use these paths to update image src
const bikeStaticSrc = "product-images/bike-1.jpg";
const bikeMoveSrc = "product-images/bike-";

// an animation handler variable
let bikeAnimation;

//track the status of the animation
let moveNext = true;

// bike product img number variable
let startNum = 1;
let endNum = 34;

// animate timer variable
let moveTimeout;

//hide the popup initially
popup.style.display = "none";

// popip timer
let popupTimer = setTimeout(function () {
  // wait 3 seconds before showing
  popup.style.display = "block";

  // disabled button when a popup appears
  btnStartBike.disabled = true;
  btnStopBike.disabled = true;
}, delay);

//add a click event listener to the closePopup
closePopup.addEventListener("click", function () {
  // when clicking "x" close popup fade out in 3 seconds
  popup.style.animation = "fadeout ease 3s";

  // abled buttons
  btnStartBike.disabled = false;
  btnStopBike.disabled = false;

  // set popup display none after fade out
  setTimeout(function () {
    popup.style.display = "none";
  }, delay);
});

//user clicks the start button...
btnStartBike.addEventListener("click", function () {
  // when clicking the start button, change popup style display to none
  clearTimeout(popupTimer);
  popup.style.display = "none";

  if (!animationIsUnderway) {
    animationIsUnderway = true;
    bikeAnimation = requestAnimationFrame(() => {
      move();
    });
  }
});

//user clicks the stop button...
btnStopBike.addEventListener("click", function () {
  animationIsUnderway = false;
  clearTimeout(moveTimeout);

  //stop an aniamtion using the animation handler
  cancelAnimationFrame(bikeAnimation);

  //update the HTML image to be not animated
  bikeImageInHTML.src = bikeMoveSrc + `${startNum}.jpg`;
});

//the function that is called with
//each new images of the animation
function move() {
  if (moveNext === true) {
    startNum++;
    if (startNum === endNum) {
      moveNext = false;
    }
  } else {
    startNum = 1;
    moveNext = true;
  }

  // change to src
  bikeImageInHTML.src = bikeMoveSrc + `${startNum}.jpg`;

  // set timer for slow animate
  moveTimeout = setTimeout(function () {
    bikeAnimation = requestAnimationFrame(() => {
      move();
    });
  }, 100);
}
