// let strArr=[];
// strArr [0] = prompt("Add your name");
// strArr [1] = prompt("Add your mood");
// strArr [2] = prompt("Add your activity");

// function tellStory(arr) {
//     return console.log(`This is ${arr[0]}. ${arr[0]} is nice person. Today he is ${arr[1]}. He is ${arr[2]} all day.`);
// }
// tellStory(strArr);

let arrNumbers = [];
for (let i = 0; i < 5; i++) {
//   arrNumbers[i] = parseFloat(prompt(`Please insert number on position ${i} in array of numbers: `));
  arrNumbers[i] = prompt(`Please insert number on position ${i} in array of numbers: `);
}

console.log(arrNumbers);

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (validateNumber(arr[i])) {
        sum = `Not a valid number`;
      break;
    } else {
        arr[i] = parseFloat(arr[i]);
      sum += arr[i];
    }
  }
  return alert(`Sum of numbers in array is: ${sum}`);
}

function validateNumber(numb) {
  if (isNaN(numb)) {
    alert(`Can't be calculated because this is not number: ${numb}`);
    return true;
  }
}

arrSum(arrNumbers);

