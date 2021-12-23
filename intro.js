// variable oluşturma: let keyword
let x = 3
let y = "str"
let z = 12.2

// var t = 12

// variable oluşturma: const keyword -> bir değişkeni oluşturduktan sonra değiştirmezsen const kullan
const c = 1

// declaration
let n

// single line multiple assignment
let k = 22, m = "str", l = 12.55

// undefined value
let xx // -> xx is undefined
console.log("xx is " + xx) // console.log() fonksiyonu System.out.println() ile aynıdır

// + - * / %, ** -> exponentiation: EX; 2**3 = 8, ++, --
// += -= /= ...
// string concatenation: str1 + str2

// stringe cast etmek
let str = 3 + 5 + ""
console.log(str)

// Reassignment
let t = 3
t = "str"
t = 99.9
t = true
t = 't'

/* Scopes in JS
*   Global scope: En geniş scope'dir, yukarıda tanımlanan değişkenleri kapsar
*   Function Scope: Fonksiyonların tanımlandığı scope'dir
*   Block scope: {} ile oluşturulan scope'dir.
* */

let p = 3
{
    let p = 7
    console.log("p in block scope: " + p)
}
console.log("p out of block scope: " + p)


// if - else
// if (){
//
// } else if (){
//
// } else {
//
// }

// while
// while(){
//
// }

for (let i = 0; i < 10; i++) {
    console.log(i)
}

str = "JavaScript"
for (const strKey in str) { // sınır belirtmeye gerek kalmaz, otomatik olarak bütün indexleri strKey ile teker teker her döngü başında verir
    console.log(str[strKey])
}

let arr = [9, 8, 7, 6, 5]
for (const arrKey in arr) {
    console.log("data: " + arr[arrKey])
}

f1(1, 2)

function f1(n1, n2) {
    console.log("n1:" + n1 + ", n2:" + n2)
}

f1(3, 4)

let sum = 3

function add(n1, n2) {
    let sum = n1 + n2
    return sum
}

sum = add(55, 55)
console.log("sum: " + sum)