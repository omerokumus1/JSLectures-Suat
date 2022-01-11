// 4.3 function definition expression
let ch = 'c'
let x = 2
let f = 3.14
let s = "str"
let a = [1, 2, true]
let o = {
    name: "omer"
}
// literal = bir değişkene atanabilecek şeyler
// <, =, !, vb literal değildir çünkü bir değişkene atanamazlar

// function literal
let multiplication = function (n1, n2) { // function literal
    return n1 * n2
}

function mult(n1, n2) {
    return n1 * n2
}

function myMult(n1, n2, multFunc) {
    return multFunc(n1, n2)
}

let r = myMult(3, 2, multiplication)
console.log(r)

let addition = function (n1, n2) {
    return n1 + n2
}

let subtraction = function (n1, n2) {
    return n1 - n2
}

function four_operation(n1, n2, operation) {
    return operation(n1, n2)
}

let sub = four_operation(3, 2, subtraction)
let add = four_operation(3, 2, addition)
let mul = four_operation(3, 2, multiplication)
console.log("sub: " + sub)
console.log("add: " + add)
console.log("mul: " + mul)

// company error code example
function downloadFileForA(url) {
    // try to download the file
    let success = false
    if (success)
        console.log("Successfully downloaded")
    else
        console.log("The file cannot be downloaded for Company A")
}

function downloadFileForB(url) {
    // try to download the file
    let success = false
    if (success)
        console.log("Successfully downloaded")
    else
        console.log("The file cannot be downloaded for Company B") // burası dinamik olmalı
}

// başarısız dosya indirme işinin dinamik olması gerekiyor.
// iş -> fonksiyon
// dinamik -> parametrelerle sağlanır. Her farklı parametre için farklı şekilde işlem gerçekleşir

function downloadFile(url, errorMessage) {
    // try to download the file
    let success = false
    if (success)
        console.log("Successfully downloaded")
    else
        errorMessage()
}


downloadFileForA("www.fakeurl.com")
downloadFileForB("www.fakeurl.com")

let errorMessage = function () {
    console.log("The file cannot be downloaded for Company A")
}
downloadFile("www.fakeurl.com", errorMessage)
// let x = 3
// let y = 2
// mult(x, y)
// mult(3, 2)
downloadFile("www.fakeurl.com", function () {
    console.log("The file cannot be downloaded for Company B")
})

// ampul örneği
function bright(lightBulb) {
    lightBulb()
}

// sarı ışık
bright(function () {
    console.log("yellow light")
})

// kırmızı ışık
bright(function () {
    console.log("red light")
})

// beyaz ışık
bright(function () {
    console.log("white light")
})


// Conditional Property Access (Safely Property Access)
let o2 = null
console.log(o2?.name)

let o3 = {
    o1: {
        o2: {
            name: "JS"
        },
        o4: null
    }
}
console.log(o3.o1?.o2?.name)
console.log(o3.o1?.o4?.name)




