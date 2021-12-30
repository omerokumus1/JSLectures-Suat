// Numbers
Math.pow(2, 4)
Math.E
Math.PI
Math.floor(3.14) // -> 3
Math.ceil(3.14) // -> 4
Math.round(3.1) // -> 3
Math.round(3.7) // -> 4
Math.max(3,4,5) // 5
Math.min(3,5,6) // 3
Math.sqrt(4)

// overflow, underflow, division by zero do not exist in JS
// overflow yerine Infinity
// underflow yerine -0
let c = -0
console.log(c)
let d = 1/0
console.log(d)

// NaN
let z = 0/0
console.log(z)
console.log(Number.isNaN(z))

// Number class
Number.NaN
console.log("0/0 is NaN?: " + Number.isNaN(0/0))
let max = Number.MAX_VALUE
let min = Number.MIN_VALUE
console.log("max: " + max)
console.log("min: " + min)
console.log("max*2 = " + (max*2))

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

// 3.4 Boolean Values