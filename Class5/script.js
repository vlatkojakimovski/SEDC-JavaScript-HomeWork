//////////////// HOMEWORK 1 //////////////////////////////
let arrStrings = ["Hello", "there", "students", "of", "SEDC", "!"];

function createBigString(arr) {
  let bigString = "";
  arr.forEach((el) => {
    bigString += `${el} `;
  });
  return bigString;
}
// console.log(createBigString(arrStrings));

//////////////// HOMEWORK 2 //////////////////////////////

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} \n \r`);
//   } else if (i % 2 === 1) {
//     console.log(` ${i} `);
//   }
// }

//////////////// HOMEWORK 3 //////////////////////////////
arr = [3, 5, 6, 8, 11, "2", 7, 'p', 16];
function minMax(arr) {
  let min = arr[1];
  max = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i])==="number") {
      if (min > arr[i]) {
        min = arr[i];
      }
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  }
  return `Max: ${max},  Min: ${min}, Sum: ${max + min}`;
}
// console.log(minMax(arr));

//////////////// SORT FUNCTION //////////////////////////////
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        let pom;
        if (arr[i] > arr[j] ) {
            pom=arr[i];
            arr[i]=arr[j];
            arr[j]=pom;
        }
    }
  }
}

arrToSort = [3, 5, 6, 8, 11, 7, 16,1,13,4,2];
// sortArray(arrToSort);
// console.log(arrToSort);


//////////////// HOMEWORK 4 //////////////////////////////

let first = ["Bob", "Jill", "Vlatko", "Damjan", "Gjorge"];
let last = ["Gregory", "Wurtz", "Jakimovski", "Stojanovski", "Dimitrov"];


function combineTwoArrays(arrOne, arrTwo) {
    let full = [];
    for (let i = 0; i < arrOne.length; i++) {
        let pom = `${i+1}. ${arrOne[i]} ${arrTwo[i]}`; 
        full.push(pom);      
    }
    return full;
}

console.log(combineTwoArrays(first,last));