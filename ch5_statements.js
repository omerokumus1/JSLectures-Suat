// compound statement
{
    let x = 3
    let xSquared
// calculation of x square
    { // -> compound statement
        let xSquared2 = x * x
        xSquared = xSquared2
    }

    let piCube
    {
        let pi = Math.PI
        piCube = Math.pow(pi, 3)
    }

// conditional statement: if, else if, else

// loops: while, do-while, for, for-in, for-of

// (Find the smallest n such that n^2 > 12,000) Use a while loop to find the smallest
// integer n such that n^2 is greater than 12,000

    let n = 1
    while (Math.pow(n, 2) < 12000) {
        n++
    }
    console.log(n + ", " + Math.pow(n, 2))
}

{
    let str = "JavaScript Programming is fun!"
    let count = 0
    let uppercaseLetters = []
    let uppercaseLettersStr = ""
    for (let i = 0; i < str.length; i++) {
        if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
            count++
            uppercaseLetters.push(str[i])
            uppercaseLettersStr += str[i] + ", "
        }
    }
    console.log("Uppercase letter count: " + count)
    console.log("Uppercase letters: " + uppercaseLetters)
    console.log("Uppercase letters: " + uppercaseLettersStr)
}

let limit = 8
for (let i = 0; i < limit; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}

for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit - i - 1; j++) {
        process.stdout.write("  ")
    }
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write("* ")
    }
    console.log()
}





