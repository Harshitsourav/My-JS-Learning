'use strict';

// let hasDriverLic = false
// const passTest = true
// if (passTest) {
//     hasDriverLic = true
// }
// if (hasDriverLic) console.log("I can drive")

// function primeNumber(number) {
//     const primeNum = `Prime Number ${number}`;
//     console.log(primeNum);
// }

// primeNumber(20);

function calcTip(billValue) {
    return billValue > 50 && billValue < 300 ? 0.15 * billValue : 0.20 * billValue
}

console.log(calcTip(240))

const billArray = new Array(125, 555, 44)
const totalArray = new Array()
for (let billNumber = 0; billNumber < billArray.length; billNumber++) {
    totalArray.push(calcTip(billArray[billNumber]) + billArray[billNumber])
}

console.log(totalArray)