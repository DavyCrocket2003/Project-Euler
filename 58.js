//Spiral Primes

const myFunctions = require('./functions')          //Access my functions

let maxWidth = 7                                //Stop searching after this width of square
let primeSearch = 100000000                         //Prime search threshold. When exceeded, multiply by 2
let primes = myFunctions.bigPrimes(primeSearch)     //Working list of primes
function isPrime(num) {                             //Function to determine if a number is prime
    while (num > primeSearch) {
        primeSearch *= 2
        primes = myFunctions.bigPrimes(primeSearch)
    }
    return primes.includes(num)
}


let edgeLength = 3
let primeCount = 3
let diagonalCount = 5
while (primeCount / diagonalCount >= 0.1 && edgeLength < maxWidth) {
    for (let i = edgeLength * edgeLength + edgeLength + 1; i < (edgeLength + 2) * (edgeLength + 2); i += edgeLength + 1) {
        if (isPrime(i)) {
            primeCount ++
        }
    }
    diagonalCount += 4
    edgeLength += 2
    console.log(edgeLength, primeCount/diagonalCount)
}

console.log(edgeLength)
console.log(primeCount, diagonalCount)