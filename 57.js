//Problem 57
//Square Roots Convergents

let numerator = 2
let denominator = 1
let count = 0
let tempN
let max = 1000

function countDigits(n) {
    let c = 0
    let remainder = n
    while (remainder > 0) {
        remainder = Math.floor(remainder / 10)
        c ++
    }
    return c
}


for (let i = 1; i <= max; i ++) {
    let remainder = denominator + numerator
    if (countDigits(remainder) > countDigits(denominator)) {
        count ++
    }
    tempN = denominator + 2 * numerator
    denominator = numerator
    numerator = tempN
}

console.log(count)
console.log(numerator)
console.log(denominator)