
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
    if (num % 2 === 0) {
        num --
    }
    let candidates = Array((num - 1) / 2).fill(true)
    let result = [2]
    let mode = 3
    while (mode < num ** 0.5 + 1) {
        for (let j = mode * mode; j <= num; j += 2 * mode) {
            candidates[(j - 3) / 2] = false
        }
        mode += 2
        while (candidates[(mode - 3) / 2] === false) {
            mode += 2
        }
    }
    for (let i = 0; i < candidates.length; i ++) {
        if (candidates[i]) {
            result.push(i * 2 + 3)
        }
    }
    return result
    
}


//Internal function to support bigPrimes
function primeSearch(low, high, givenPrimes) {
    if (low % 2 === 0) {
        low ++
    }
    if (high % 2 === 0) {
        high --
    }
    let candidates = Array((high - low) / 2 + 1).fill(true)
    let newPrimes = []

    //A eliminate odd multiples of given primes
    for (let i = 1; i < givenPrimes.length; i ++) {
        let p = givenPrimes[i]              //Grab prime at index i (skips 2 (i=0))
        let r = low % p
        let p1 = low
        if (r !== 0) {
            p1 = p + low - r    //Set p1 to the first multiple of p within given range
        }
            if (p1 % 2 === 0) {
            p1 += p                         //If p1 is even, choose the next multiple of p
        }
        for (let j = p1; j <= high; j += 2 * p) {
            candidates[(j - low) / 2] = false
        }
    }

    //B walk through range collecting primes and eliminating multiples (if needed)
    let index = 0
    while (candidates[index] === false) {
        index ++
    }
    while (index < candidates.length) {
        let p = index * 2 + low
        newPrimes.push(p)
        //Cross out multiples of current prime
        for (let i = 3 * p; i <= high; i += 2 * p) {
            candidates[(i - low) / 2] = false
        }
        index ++
        while (candidates[index] === false) {
            index ++
        }
    }

    //C Return list of new primes
    return newPrimes
}

//Function to compute primes above 100 million
function bigPrimes(n) {
    let hundredMillion = 100000000
    let primeList = []
    if (n <= hundredMillion) {
        return listPrimes(n) 
    }
    primeList = listPrimes(hundredMillion)
    

    let low = hundredMillion
    let high
    while (low <= n) {
        high = Math.min(low + hundredMillion, n)
        primeList.concat(primeSearch(low, high, primeList))
        low += hundredMillion
    }
    return primeList


}





// process.stdout.write(JSON.stringify(bigPrimes(1000000000)) + '\n')
module.exports = {
    arrayAdd,
    arrayMultiply,
    listPrimes,
    bigPrimes
}


// debug stuff
// let list = listPrimes(100)
// console.log(primeSearch(100, 200, list))


// for (let i = 100; i < 1000; i += 100) {
//     list = list.concat(primeSearch(i, i + 100, list))
// }
// process.stdout.write(JSON.stringify(list) + '\n')
// console.log(list.length)