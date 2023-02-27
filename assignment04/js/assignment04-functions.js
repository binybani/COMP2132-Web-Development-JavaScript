/* This page writes each function. */
/* Part one function */
function makeListOfImages(anyArray) {
  if (Array.isArray(anyArray)) {
    let html = `<ul>`;
    anyArray.forEach(function (item) {
      if (typeof item != "string") {
        console.log("Image array include other type of data");
        return;
      }
      html += `<li><img src="${pathToImages}${item}" alt="${item}"></li>`;
    });
    html += `</ul>`;
    return html;
  } else if (typeof anyArray == "string") {
    html = ``;
    html += `<p>&#x1F44E; Error: you must provide an array. '${anyArray}' is not an array.</p>`;
    return html;
  } else if (typeof anyArray == "number") {
    html = ``;
    html += `<p>&#x1F44E; Error: you must provide an array. '${anyArray}' is not an array.</p>`;
    return html;
  }
}

/* Part two function */
function makeListOfLinks(anyArray, listype = "ul") {
  if (Array.isArray(anyArray) && listype == "ul") {
    let html = `<${listype}>`;
    anyArray.forEach(function (item) {
      if (typeof item != "string") {
        console.log("Links array include other type of data");
        return;
      }
      html += `<a href="${item}"><li>${item}</li></a>`;
    });
    html += `</${listype}>`;
    return html;
  } else {
    html = ``;
    html += `<p>&#x1F44E; Error: you must provide an array. '${anyArray}' is not an array.</p>`;
    return html;
  }
}

/* Part three function */
function makeListOfNames(anyArray, listype = "ul") {
  if (
    Array.isArray(anyArray) &&
    (listype == "ul" || listype == "ol") &&
    anyArray.length >= 2
  ) {
    let html = `<${listype}>`;
    anyArray.forEach(function (item) {
      if (typeof item != "string") {
        console.log("Names array include other type of data");
        return;
      }
      html += `<li>${item}</li>`;
    });
    html += `</${listype}>`;
    return html;
  } else if (anyArray.length < 2) {
    html = ``;
    html += `<p>&#x1F44E; Error: Array must contain at least two items or more.</p>`;
    return html;
  } else if (listype != "ul" && listype != "ol") {
    html = ``;
    html += `<p>&#x1F44E; Error: In HTML only UL or OL lists can be made. There is no 'cheeseburger' list element.</p>`;
    return html;
  } else {
    html = ``;
    html += `<p>&#x1F44E; Error: This function requires an array. '${anyArray}' is not an array.</p>`;
    return html;
  }
}
