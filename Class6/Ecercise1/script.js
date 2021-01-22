let firstDiv = document.getElementById("first");
let allParagraphs = document.getElementsByTagName("p");
let lastDiv = firstDiv.nextElementSibling.nextElementSibling;
let header3LastDiv = lastDiv.lastElementChild;
let header1LastDiv = header3LastDiv.previousElementSibling;
let firstPinSecondDiv = firstDiv.nextElementSibling.firstElementChild.innerHTML;
header3LastDiv.innerText = "Text added from JS";
header1LastDiv.innerText = "Text added from JS also";

// console.log(firstDiv);
// console.log("PRINT");
// console.log(allParagraphs);
// console.log(lastDiv);
// console.log(header3LastDiv);
// console.log(header1LastDiv);
// console.log(firstPinSecondDiv);
