// a --> find the dividers of the number
// b -->check if they are prime
// c --> find the largest prime divider

function largestPrimeFactor(num) {
    let a = findDividers(num) // array a has the dividers
    console.log("" + a)
    let b = findPrimeNumbers(a) // arra b has the prime dividers
    let c = findTheLargest(b) //array c is finding the largest prime number

    return c

}

function primeCheck(num) {
    let count = 0
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            count++
        }
    }

    return count <= 1;
}



function findDividers(num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    return arr
}

function findTheLargest(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

function findPrimeNumbers(arr) {
    let p = []
    for (let i = 0; i < arr.length; i++) {
        if (primeCheck(arr[i])) {
            p.push(arr[i])
        }
    }
    return p
}

// !out of question content
function largestDivider(num) {
    let a = findDividers(num)
    return findTheLargest(a)
}

function findPrimeDividers(num) {
    let i = 2
    while (i <= num) {
        if (num % i === 0)
            num /= i
        else
            i++
    }
    return i
}

console.log("lpf: " + largestPrimeFactor(600851475143))

//console.log("lpf: " + findPrimeDividers(600851475143))

// while(true){
//     let seats = [1,2,3,4,5]
//     let owners = [0,0,0,0,0]
//     console.log("select a seat" + seats)
//     owners[1] = "Ömer"
//     seats[1] = "owned"
//     console.log("available seats: " + seats)
// }
