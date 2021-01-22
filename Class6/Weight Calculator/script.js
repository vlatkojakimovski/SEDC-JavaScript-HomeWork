
function weightChicken (kg) {
    return kg*2;
}

let result = document.getElementById("result");
let yourWeight = prompt("Enter your weight in KG");
console.log(yourWeight);

if(!isNaN(yourWeight)){
    result.innerHTML += weightChicken(yourWeight);
} else {
    alert(`Please enter valid number`);
}
