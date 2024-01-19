// Prime Pair Sets

// Problem 60
// The primes 3, 7, 109, and 673 are quite remarkable. By taking any two primes and concatenating them in any
// order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum
// of these four primes, 792, represents the lowest sum for a set of four primes with this property.

// Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

const functions = require('./functions')
// let maxSearch = 1000000
// let maxPrime = 1000000
// let primeList = functions.bigPrimes(maxPrime)
// solutionFound = false


// //Checks if 'num' is in the list of primes
// const isPrime = (num) => {
//     while (num>maxPrime) {
//         maxPrime *= 10
//         primeList = functions.bigPrimes(maxPrime)
//     }
//     for (let index=0; primeList[index]<=num; index++) {
//         if (primeList[index] === num) {
//             return true
//         }
//     }
//     return false
// }

// //Checks if a and b cacatenate to primes (is ab prime and ba?)
// const catPrimes = (a, b) => {
//     return (isPrime(Number([a,b].join(''))) && isPrime(Number([b,a].join(''))))
// }


// //Function that iterates through a set of 5 numbers to see if they are all "catPrimes"
// const isASolution = (arr) => {
//     for (let i=0; i<arr.length-1; i++) {
//         for (let j=i+1; j<arr.length; j++) {
//             if (! catPrimes(arr[i],arr[j])) {
//                 return false
//             }
//         }
//     }
//     return true
// }




// //Iterating loops representing the 5 different primes
// let solved = false
// let solution = null
// for (let i=6; i<maxSearch; i++) {
//     console.log(primeList[i])
//     for (let j=5; j<i; j++) {
//         for (let k = 4; k<j; k++) {
//             for (let l=3; l<k; l++) {
//                 for (let m=1; m<k; m++) {
//                     if (m===2) {continue}

//                     if (isASolution([primeList[i],primeList[j],primeList[k],primeList[l],primeList[m]])) {
//                         solution = [primeList[i],primeList[j],primeList[k],primeList[l],primeList[m]]
//                         solved = true
//                         break
//                     }
//                 }
//                 if (solved) break
//             }
//             if (solved) break
//         }
//         if (solved) break
//     }
//     if (solved) break
// }


// console.log(solution)
// console.log(solution.reduce((a, b) => {a + b}, 0))


