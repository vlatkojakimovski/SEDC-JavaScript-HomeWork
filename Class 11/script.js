let coins50 = document.getElementById("coins50");
let coins10 = document.getElementById("coins10");
let coins2 = document.getElementById("coins2");
let coins1 = document.getElementById("coins1");
let btnFillIn = document.getElementById("fillIn");
let amount = document.getElementById("amount");
let calculate = document.getElementById("calculate");
let rezultat = document.getElementById("rezultat");

let coinsArr = [50, 10, 2, 1];
let coinAmountBank = [3, 3, 1, 15];

// Fill the machine with coins
btnFillIn.addEventListener("click", function () {
    if (
        parseInt(coins50.value) >= 0 &&
        parseInt(coins10.value) >= 0 &&
        parseInt(coins2.value) >= 0 &&
        parseInt(coins1.value) >= 0
    ) {
        coinAmountBank[0] += parseInt(coins50.value);
        coinAmountBank[1] += parseInt(coins10.value);
        coinAmountBank[2] += parseInt(coins2.value);
        coinAmountBank[3] += parseInt(coins1.value);
    } else {
        alert(`Please enter the numbers greater then 0`);
    }
    clearFields(coins50, coins10, coins2, coins1);
});

calculate.addEventListener("click", function () {
    if(amount.value > 0){
        calcCoin(amount.value, coinAmountBank);
    } else {
        alert(`Please enter amount number greater then 0`);
    }
});

// let coinsArr = [50,10,2,1];

function calcCoin(amount, coins) {
    let result = "You need: </br> ";
    let pomCoinsArr = [0,0,0,0];
    for (let i = 0; i < coinsArr.length; i++) {
        if (amount >= coinsArr[i]) {
            let pom = parseInt(amount / coinsArr[i]);
            if (pom <= coins[i]) {
                amount -= pom * coinsArr[i];
                result += `${coinsArr[i]}-Cent: ${pom} <br>`;
                pomCoinsArr[i]=pom;
            } else {
                amount -= coins[i] * coinsArr[i];
                result += `${coinsArr[i]}-Cent: ${coins[i]} <br>`;
                pomCoinsArr[i] = coinAmountBank[i];
            }
        }
    }
    // Show coins statement after transaction
    // console.log(coinAmountBank);
    if (amount === 0) {
        for (let i = 0; i < coinAmountBank.length; i++) {
            coinAmountBank[i]-= pomCoinsArr[i];
        }
        rezultat.innerHTML = result;
    } else {
        rezultat.innerHTML = `Sorry we dont have enough coins`;
    }
    // console.log(coinAmountBank);

}

function clearFields(coins50, coins10, coins2, coins1) {
    coins50.value = "";
    coins10.value = "";
    coins2.value = "";
    coins1.value = "";
}

