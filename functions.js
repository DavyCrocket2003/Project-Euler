
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


//Function that takes in two numbers whos digits are reprsented by arrays and returns the product (as an array)
function arrayMultiply(num1, num2) {
    let digitProduct = [0]
    let carry = 0
    let result = [0]
    let smallProduct
    for (let i = 0; i < num1.length; i ++) {
        digitProduct = Array(i).fill(0)
        carry = 0
        for (let j = 0; j < num2.length; j ++) {
            smallProduct = num1[i] * num2[j] + carry
            digitProduct.push(smallProduct % 10)
            carry = Math.floor(smallProduct / 10)
        }
        if (carry > 0) {
            digitProduct.push(carry)
        }
        result = arrayAdd(result, digitProduct)
    }
    return result

}

//Function that generates a list of primes up to a given number (not optimized aka slow)
function listPrimes(num) {
    let candidates = Array(Math.floor(num / 2)).fill(true)
    let result = [2]
    let mode = 3
    while (mode < num ** 0.5 + 1) {
        for (let j = mode * mode; j <= num; j += mode) {
            candidates[j/2 -1.5] = false
        }
        mode += 2
        while (candidates[mode / 2 - 1.5] === 0) {
            mode += 2
        }
    }
    for (let i = 0; i < candidates.length; i ++) {
        if (candidates[i]) {
            result.push((i + 1.5) * 2)
        }
    }
    return result
    
}

//Function to compute the primes above 100 million
function billionPrimes(n) {
    let primeList = []


    function primeSearch(low, high, givenPrimes) {
        if (low % 2 === 0) {
            low ++
        }
        if (high % 2 === 0) {
            high --
        }
        
        //A eliminate multiples of givens


        //B walk through range collecting primes and eliminating multiples (if needed)

        //C Return list of new primes
    }

}





// console.log(listPrimes(1000))
module.exports = {
    arrayAdd,
    arrayMultiply,
    listPrimes,
    billionPrimes
}