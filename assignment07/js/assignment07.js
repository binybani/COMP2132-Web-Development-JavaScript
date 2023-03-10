// set t-shirt price
const $price = $("#price");
let tPrice = 20;
$price.html("&#36;" + `${tPrice}`);

// set t-shirt totol cost
const $totalCost = $("#totalCost");
$totalCost.html("&#36;" + `${tPrice}`);

//  change total cost depend on quantity
$("#quantity").on("input", function () {
  // get t-shirt quantity
  const quantityValue = $("#quantity").val();
  // calculate total price
  let totalCost = tPrice * quantityValue;
  $totalCost.html("&#36;" + totalCost);
});

// T-shirt Gallery
// switching images based on the t-shirt status
const $slide = $("#slide");

//Add click events
const $thumbs = $("#thumbs");
const $thumbnails = $("#thumbs a");
$thumbnails.click(changeSlide);

// Function to change slide
function changeSlide(event) {
  event.preventDefault();
  //get the attribute values of $(this) 'a' tag
  const src = $(this).attr("href");

  $slide.attr({
    src: src,
    alt: src,
  });
}

// switching tabs based on the t-shirt color
// display selected color
const $tColor = $("#tColor");
$tColor.text("Black");
$(".tab-nav").on("input", function () {
  // get color value
  const colorValue = $("input[name=color]:checked").val();
  $tColor.text(colorValue);
});

// Select tab links
const $tabs = $(".tab-nav a");

// Select active tab link
const $tabActive = $(".tab-nav .active");

// Select the tab content boxes
const $tabContent = $(".tab-content");

// Run the display active tab function
displayActiveTabContent($tabActive);

// Run the display active tab function
displayActiveTabContent($tabActive);

// Click event for tab links
$tabs.click(function (e) {
  //dont follow the bookmark ilnks
  e.preventDefault();

  //remove the .active from any/all tab a tags
  $tabs.removeClass("active");
  //add the .active class to $(this) nav a tag
  $(this).addClass("active");

  //display the appropriate content
  displayActiveTabContent($(this));
});

// Function for displaying the active tab
function displayActiveTabContent($activeTab) {
  // activeTab is one of the tab a tags

  //hide all tab content
  $tabContent.hide();
  //determine the id of which content should be shown
  const activeID = $activeTab.attr("href");
  //display the content
  $(activeID).show();
}

// T-shirt Size
// display the chosen size and change submit text value
const $tSize = $("#tSize");
let defaultSubmitText = "Choose A Size";
$tSize.text(defaultSubmitText);
$("#submit").attr("value", defaultSubmitText);
$(".size").on("input", function () {
  const $tSizeValue = $("input[name=size]:checked").val();
  $tSize.text($tSizeValue);
  if ($tSizeValue != defaultSubmitText) {
    $("#submit").attr("value", "Add To Cart");
  }
});

// submit form
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  //a flag for tracking if errors are found
  let errorsDetected = false;

  // if submit value is not the size value, block to submit the form
  const $submitValue = $("input[name=submit]").val();
  if ($submitValue === defaultSubmitText) {
    errorsDetected = true;
  }

  //stop processing if errors are detected
  if (errorsDetected) {
    e.preventDefault();
  }
});
