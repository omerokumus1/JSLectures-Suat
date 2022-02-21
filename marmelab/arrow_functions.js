function f1(v1, v2) {
    return v1 + v2
}

let f2 = function (v1, v2) {
    return v1 + v2
}

// arrow functions
let f3 = (v1, v2) => v1 + v2;
console.log(f3(1, 2))

let f4 = x => x * x;
console.log(f4(3))

let f5 = () => {
    return "no-arg"
};
console.log(f5())


// Ternary operator (hatırlatma)
let x = 3, y = 5

let z = (x < y) ? x+2 : y+2;
console.log(z)

// if (x < y)
//     z = x
// else
//     z = y

input = 3
let f = (input === 2) ? (x) => x*x : (x) => x*x*x;
let s = (input === 2) ? "square" : "cube";
console.log(f(5))

z = x+2
let f6 = (i) => i*i;


// multiline arrow function
let f7 = (v1, v2) => {
    let mult = v1*v2;
    let sub = v1-v2;
    console.log("mult: " + mult + ", sub: " +  sub)
}
f7(3,4)

// using arrow function as argument
function f8(result, error, success){
    if (result === 1)
        error("error code 404")
    else
        success("success code 201")
}

let error = (message) => console.log(message);
let success = (message) => console.log(message)

let result = 2
f8(result, error, success)

f8(1,
    (message) => console.log(message),
    (message) => console.log(message)
)