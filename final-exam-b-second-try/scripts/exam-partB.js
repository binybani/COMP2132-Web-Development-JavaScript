const myName = "Beanie Yubin Kim";
html = "";
const courseTitle = document.querySelector("main");
html += "<h2>COMP2132 Practical Exam</h2>";
html += `<p>The JavaScript used by this HTML pale was authored by ${myName}</p>`;
courseTitle.innerHTML = html;

const $products = $("#products");
const $services = $("#services");
const $nav = $(".sub-nav");
let hover = true;
$nav.hide();
$products.mouseenter(function () {
  $(this).next().slideDown();
});

$services.mouseenter(function () {
  $(this).next().slideDown();
});

($products, $services, $nav).mouseleave(function () {
  $nav.slideUp();
});
