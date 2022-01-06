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

function four_operation(n1, n2, operation){
    return operation(n1, n2)
}

let sub = four_operation(3, 2, subtraction)
let add = four_operation(3, 2, addition)
let mul = four_operation(3, 2, multiplication)
console.log("sub: " + sub)
console.log("add: " + add)
console.log("mul: " + mul)

// company error code example



