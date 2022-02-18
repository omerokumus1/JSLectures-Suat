/**
 * TODOO
 * starting from the largest
 * find the palindrome number
 * add them to an array
 * find the maximum among those number
 * return the maximum number
 */


function findPalindromic() {
    let a = 0
    let lowerLimit = 99, upperLimit = 9999999
    let palindromes = []
    let maxPal = 0

    // i * j
    // 999 * 821,
    // 999 * 820
    // 998 * 821 palindrome değil

    for (let i = upperLimit; i > lowerLimit; i--) {

        for (let j = upperLimit; j > lowerLimit; j--) {
            a = i * j
            if (checkPalindrome(a)) {
                palindromes.push(a)
                lowerLimit = j
                break
            }
        }

    }
    console.log("" + palindromes)
    maxPal = findTheMax(palindromes)
    return maxPal

}

function checkPalindrome(int) {
    let c = String(int)
    let reverse = ''

    for (let i = c.length - 1; i >= 0; i--) {
        reverse += c[i]
    }
    let r = Number(reverse)

    return int === r
}

function findTheMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}


console.log(findPalindromic())









