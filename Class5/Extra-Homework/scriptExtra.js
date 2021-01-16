///////////////// TASK 0  ///////////////
function createArray(a) {
  let arr = [];
  for (let i = 1; i <= a; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(createArray(parseInt(prompt(`Enter end number of array`))));

/////////////////////////////////////////
///////////////// TASK 1  ///////////////
function getFirstValue(arr) {
  let firstEl = arr.shift();
  return firstEl;
}

let niza = [4, -2, 15, 6, 9, -12];
// console.log(getFirstValue(niza));

/////////////////////////////////////////
///////////////// TASK 2  ///////////////
function reverse(arr) {
  let reverseArr = [];
  for (let i = arr.length; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}

// console.log(reverse(niza));

/////////////////////////////////////////
///////////////// TASK 3  ///////////////
function search(arr, findEl) {
  let index = -1;
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i]===findEl) {
  //         index = i;
  //     }
  // }
  index = arr.indexOf(findEl);
  return index;
}

// console.log(search(niza, 15));
// console.log(search(niza, 9));

/////////////////////////////////////////
///////////////// TASK 4  ///////////////
function check(arr, number) {
  // Ja koristam prethodnata funkcija kade sto go naogjame indeksot na koj sto se naogja elementot ili ako ne go najdeme -1
  return search(arr, number) !== -1;
}

// console.log(check(niza,9));

/////////////////////////////////////////
///////////////// TASK 5  ///////////////
//// let niza = [4,-2,15,6,9,-12];

function negate(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += -2 * arr[i];
  }
  return arr;
}
let nzz = [];
// console.log(negate(nzz));
// console.log(negate(niza));

/////////////////////////////////////////
///////////////// TASK 6  ///////////////
function diffMaxMin(arr) {
  let min = arr[1];
  max = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (min > arr[i]) {
        min = arr[i];
      }
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  }
  return `Max: ${max},  Min: ${min}, Difference between min and max is: ${
    max - min
  }`;
}
let minaMaxArr = [3, 7, -10, Infinity];
let minaMaxArr2 = [3, 7, -10, Infinity, -Infinity];
//   console.log(diffMaxMin(niza));
//   console.log(diffMaxMin(minaMaxArr));
//   console.log(diffMaxMin(minaMaxArr2));

/////////////////////////////////////////
///////////////// TASK 7  ///////////////
function multiplyByLength(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr[i] = arr[i] * arr.length;
  }
  return tempArr;
}
// console.log(niza);
// console.log(multiplyByLength(niza));

/////////////////////////////////////////
///////////////// TASK 8  ///////////////
function hurdleJump(arr, jump) {
  let canJump = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > jump) {
      canJump = false;
    }
  }
  return canJump;
}
// console.log( hurdleJump(niza, 12));

/////////////////////////////////////////
///////////////// TASK 9  ///////////////
function countdown(number) {
  if (number >= 0) {
    let tempArr = [];
    for (let i = number; i >= 0; i--) {
      tempArr.push(i);
    }
    return tempArr;
  } else {
    return `You entered negative number as argument: ${number}`;
  }
}
// console.log(countdown(-12));

/////////////////////////////////////////
///////////////// TASK 10  ///////////////
function transform(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr[i]-=1;
    } else {
        arr[i]+=1;
    }
  }
  return arr;
}

// console.log(transform([1, 2, 3, 4, 5]));
// console.log(transform([2, 2, 0, 8, 10]));