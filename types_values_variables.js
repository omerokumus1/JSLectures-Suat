// Numbers
Math.pow(2, 4)
Math.E
Math.PI
Math.floor(3.14) // -> 3
Math.ceil(3.14) // -> 4
Math.round(3.1) // -> 3
Math.round(3.7) // -> 4
Math.max(3, 4, 5) // 5
Math.min(3, 5, 6) // 3
Math.sqrt(4)

// overflow, underflow, division by zero do not exist in JS
// overflow yerine Infinity
// underflow yerine -0
let c = -0
console.log(c)
let d = 1 / 0
console.log(d)

// NaN
let z = 0 / 0
console.log(z)
console.log(Number.isNaN(z))

// Number class
Number.NaN
console.log("0/0 is NaN?: " + Number.isNaN(0 / 0))
let max = Number.MAX_VALUE
let min = Number.MIN_VALUE
console.log("max: " + max)
console.log("min: " + min)
console.log("max*2 = " + (max * 2))

// Date class
let time = Date.now()
let now = new Date()
console.log("Day: " + now.getDate())
console.log("time: " + time)

// Strings
let str = "String sample"
str = 'New string sample'
str = 'Yarın Trabzon\'a uçacağım\n\t'
str = `first line
            second line
            third line` // back quote
console.log(str)

// String concatenation
str = "str1 " + "str2"
console.log(str)
console.log("str1" < "str2")
console.log("motor" < "pervane")

// String length
console.log("length of " + str + ": " + str.length)
console.log("substring from 1 to 5 " + str.substring(1, 5))
console.log("substring from 1 to end " + str.substring(1))
console.log("substring from 1, 5 chars " + str.substr(1, 5))
console.log("str.indexOf('t'): " + str.indexOf("t"))
console.log("str.indexOf('t'): " + str.indexOf("st"))
console.log("str.indexOf('t'): " + str.indexOf("st2"))
console.log("str.lastIndexOf('t'): " + str.lastIndexOf("t"))

str.startsWith("st")
str.endsWith("str2")
console.log(str.replace("tr", "TR"))
console.log(str.replaceAll("tr", "TR"))
console.log(str)
str.toLowerCase()
str.toUpperCase()
console.log(str.charAt(0))
console.log(str[0]) // javada yok

// template literals
let age = 15
str = "I am " + age + " years old."
str = `I am ${age} years old`


// 3.4 Boolean Values
// equality check: === (3 equal signs)
// inequailty check: !==
let a = 4
if (a === 3)
    console.log("a is 3")
else
    console.log("a is not 3")

// double equal signs ==

a = "2"
if (a == 2) // returns true
    console.log("a is 2")
else
    console.log("a is not 2")

console.log("true + 3 = " + (true + 3))
console.log("false + 3 = " + (false + 3))
console.log(typeof "str")

// undefined, null, 0, -0, NaN, "" -> false
let o = null
let a2
if (!o) {
    console.log("o is null")
}
if (!a2) {
    console.log("a2 is undefined")
}

// || && !

// object and array creation
// array
let arr = [1, 2, 3, 4, 5, "6", "7", true]
console.log(arr[0])
arr.push(9)
console.log(arr[arr.length - 1])
arr.pop()
console.log(arr[arr.length - 1])
arr.shift()
console.log(arr[0])
arr.splice(2, 1)
console.log(arr)
arr.unshift(1)
console.log(arr)

// object
person = {
    name: "Ömer",
    surname: "Okumuş",
    age: 25,
    student: true,
    school: {
        name: "Marmara University",
        department: "Engineering",
        major: "Computer Engineering"
    },
    GPAs: [3.43, 3.5]

}
console.log(person.school.major)
console.log(person.GPAs[0])
console.log(person.name)
console.log(typeof person)

a = 5
b = a
b = 4
console.log(a)

arr = [1, 2, 3]
arr2 = arr
arr2.push(4)
console.log(arr)


a = 5
b = 5
console.log("a === b: " + (a === b))

arr = [1, 2, 3] // arr = 102
arr2 = [1, 2, 3] // arr2 = 104
console.log("arr === arr2: " + (arr === arr2))

str = "araba"
let str2 = "bina"

console.log(str.localeCompare(str2))

// 3.9 Type Conversion

a = 789
str = a + ""
a = undefined
if (a) {

} else {

}

a = Number("9") === 9

a = 13.896
console.log(a.toPrecision(1))
console.log(a.toFixed(2))
console.log(parseFloat(a + ""))
Number.parseFloat(a + "")


// const x = 5
// x = 8 , hata verir sonrasında const yerine let yazıp düzeltirsin

// Variable and const scope
// block scope: block that is created by two matching curly braces {}; if, for, for-in, function, anonymous block
if (true) { // block scope
    let x2 = 3
}
// console.log(x2) // hata verir çünkü x2'e erişemez

{ // anonymous block
    let x3 = 6
    console.log(x3)
    // var ile değişkenler globalde tanımlanır yani class içerisindeki bütün scope'lerin en dışındadır
    // tanımlandığı satırdan sonraki her yerden erişilir.
    var x4 = 1
}
console.log(x4)

function f() {
    x4 = 3;
}

// Repeated declarations
let x5 = 5
if (true) {
    let x5 = 7
    if (true) {
        let x5 = 9
        console.log("in nested if, x5 = " + x5)
    }
    console.log("in if, x5 = " + x5)
}
console.log(x5)
// let x5 = 4 // hatalı

