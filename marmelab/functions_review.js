// default values: parametreleri zorunlu kılmaz

function f1(v1, v2){
    console.log(v1 + "," + v2 )
}

function f2(v1 = 3, v2 = 4){
    console.log(v1 + "," + v2 )

}

f2()
f2(2, 3)
f2(2)

// Function expression
// x = 3 * x + 2 * y - 3, y = Math.max(3,4)

let f3 = function (){
    console.log("f3")
}

f3()

let f4 = function (v1, v2){
    console.log("v1: " + v1 + ", v2:" + v2)
}; // Noktalı virgül kullan

f4("java", "script")

function f5(){
    console.log("function f5")
}

let f5_copy = f5;
f5_copy()
let x
= 5
console.log(x)

// Callback functions (Functions as arguments)
function check(answer, yes, no){
    if (answer === "yes")
        yes()
    else
        no()
}

let y = function (){
    console.log("yes")
}

let y2 = function (){
    console.log("You say 'yes'")
}

let n = function (){
    console.log("no")
}

check("yes", y, n)
check("yes", y2, n)
check("no", y, n)

function f7(v1, f8){
    if (v1)
        f8()
    else
        console.log("v1 if false")
}
f7(true, function (){
    console.log("v1 is true")
})

// let v1 = 2*3+4;
// f7(v1)