let arrNumbers = [1, 2, 5, 4, 6, 5, 14, 25, 11, 20, 25];
let body = document.getElementsByTagName("body")[0];
// let body = document.getElementsByTagName('body');

function printListElements(arr) {
  let sum = 0;
  let fullMathematical = "";
  body.innerHTML += `<ul>`;
  for (let i = 0; i < arr.length; i++) {
    body.innerHTML += `<li> ${arr[i]} </li>`;
    sum += parseInt(arr[i]);
    if (i === arr.length-1) {
      fullMathematical += ` ${arr[i]} =`;
    } else {
      fullMathematical += ` ${arr[i]} +`;
    }
  }
  body.innerHTML += `</ul>`;
  body.innerHTML += `<p> Sum of all numbers in this list is: ${sum} </p>`;
  body.innerHTML += `<p> ${fullMathematical} ${sum} </p>`;
}
printListElements(arrNumbers);
