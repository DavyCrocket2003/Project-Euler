//Problem 57
//Square Roots Convergents

const myFunctions = require('./functions')
let top = [2]
let bottom = [1]
let count = 0
let tempN
let max = 1000
let remainder

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
    remainder = myFunctions.arrayAdd(bottom, top)
    if (remainder.length > bottom.length) {
        count ++
    }
    tempN = myFunctions.arrayAdd(bottom, myFunctions.arrayMultiply([2], top))
    bottom = top
    top = tempN
}

console.log(count)
console.log(top)
console.log(bottom)