//Problem 57
//Square Roots Convergents

const myFunctions = require('./functions')
let top = [2]
let bottom = [1]
let count = 0
let tempN
let max = 1000
let r1
let r2

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

    r1 = myFunctions.arrayAdd(bottom, top)
    r2 = top
    if (r1.length > top.length) {
        count ++
        
    }
    tempN = myFunctions.arrayAdd(bottom, myFunctions.arrayMultiply([2], top))
    bottom = top
    top = tempN

}

console.log(count)
console.log(r1)
console.log(r2)
// console.log(bottom)