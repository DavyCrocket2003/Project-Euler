// encrypted = 65 ^ 42
// unencrypted = encrypted ^ 42

// console.log(encrypted)
// console.log(unencrypted)

// const encoder = new TextEncoder()

// const bytes = encoder.encode('a')
// console.log(Number(bytes))

const fs = require('fs')
let encrypted
fs.readFile('./0059_cipher.txt', 'utf8', (err, data) => {
    if (err) throw err
    encrypted = data.split(',')
    encrypted.forEach((item, idx) => {
        encrypted[idx] = Number(item)
    })
    // console.log(encrypted)
    


    // console.log(String.fromCharCode(Array(100).fill(1).map((item, idx) => idx + 42)))
    // console.log(String.fromCharCode(...Array(100).fill(1).map((item, idx) => idx + 42)))


    function isEnglish(trialString) {
        // My code here
        let wordArray = trialString.split(' ')
        if (wordArray.length > 1000 || wordArray.length < 100) {
            return false
        } else if (wordArray.includes('the')) {
            return true 
        } else {
            return false
        }
        
    }


    //Iterate through possible passwords
    //Codes 97-122
    let decrypted = false
    let trialText = ''
    let password = ''
    for (let i = 97; i < 123; i++) {
        for (let j = 97; j < 123; j++) {
            for (let k = 97; k < 123; k++) {
                trialText = encrypted.map((num, idx) => String.fromCharCode([i,j,k][idx%3] ^ num)).join('')
                if (isEnglish(trialText)) {
                    decrypted = true
                    password = [i,j,k].map((code) => String.fromCharCode(code)).join('')
                    break
                }
            }
            if (decrypted) break
        }
        if (decrypted) break
    }

    let stringSum = 0
    for (let i=0; i<trialText.length; i++) {
        stringSum += trialText.charCodeAt(i)
    }

    console.log(trialText)
    console.log(password)
    console.log(stringSum)















})
