
//Function that takes in two numbers as arrays of digits ordered low to high and returns the result
function arrayAdd(num1, num2) {
    let maxDigit = Math.max(num1.length, num2.length) + 1
    let result = []
    let sum
    let carry = 0
    for (let i = 0; i < maxDigit; i ++) {
        sum = carry + (num1[i] !== undefined ? num1[i] : 0) + (num2[i] !== undefined ? num2[i] : 0)
        result.push(sum % 10)
        carry = Math.floor(sum / 10)
    }
    while (result[result.length - 1] === 0) {
        result.pop()
    }
    if (result.length === 0) {
        result = [0]
    }
    return result
}

function arrayMultiply(num1, num2) {
    
}


console.log(arrayAdd([1, 0, 0], [0, 9, 0]))