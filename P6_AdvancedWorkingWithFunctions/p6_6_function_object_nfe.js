/**
 *  - Functions
 *      1. Functions are values. They can be placed on the right side of the assignment
 *      2. They are objects.
 *      3. They are also callable. So, we can treat them as both objects and functions
 *          We can call them, and we can pass-by-reference them to another function.
 *      4. Since it is an object, it has built-in properties such as name, length etc.
 *      5. We can add our own custom properties to functions.
 */


// Ex for 4.
const f1 = function (n1, n2) {
    console.log("f1 is called");
}
console.log(f1.name);
console.log(f1.length);

// Ex for 5.
const f2 = () => {
    console.log("f2 is called");
    f2.counter++;
}
f2.counter = 0;
f2();
f2();
f2();
console.log("f2.counter:", f2.counter);

const f3 = (n1, n2) => {
    console.log("(n1, n2) = ", "(", n1, ",", n2, ")")
    f3.calledParams.push([n1, n2]);
}
f3.calledParams = [];
f3(1,2);
f3(3,4);
f3(5,6);
console.log("f3.calledParams:", f3.calledParams);

// Wrapper function
const f4 = (n1, n2) => {
    console.log("f4 is called");
}

const wrapper = (n1, n2) => {
  f4(n1, n2);
  wrapper.calledParams.push([n1, n2]);
}
wrapper.calledParams = [];
wrapper(11,22);
wrapper(11,22);
console.log(wrapper.calledParams)

/**
 *  - NFE: Named Function Expression
 *      1. Function Expression'lara isim vererek oluşturulur
 *          let myFunc = function func(){...}
 *      2. Bu yapı sayesinde güvenli bir şekilde recursive call yapabiliriz.
 *      3. func ismi ile dışarıdan çağrı yapılamaz çünkü func function-local olarak tanımlanır
 *      4. const ile tanımlarsak yine güvenli bir recursive çağrı yapabiliriz
 *
 */


// 1. için örnek
let myFunc = function func(name) {
    if (name)
        console.log(`Hello ${name}`);
    else
        console.log("Hello Outsider");
}

// 2. için örnek
let myFunc2 = function func(name) {
    if (name)
        console.log(`Hello ${name}`);
    else
        func("Outsider");
}

// Neden güvenli?
let myFunc3 = function(name) {
    if (name)
        console.log(`Hello ${name}`);
    else
        myFunc3("Outsider"); // myFunc3 başka bir şeye assign edilirse burası hatalı çalışır
}

let newFunc = myFunc3;
myFunc3 = null;
// newFunc(); // yukarıdaki fonksiyon şu hatayı verir: TypeError: myFunc3 is not a function

myFunc3 = function (){ // Yukarıdaki myFunc3 tanımında logic error'a sebebiyet verir
    console.log("New function for myFunc3");
}
myFunc3();

// Bu tip durumlar named function'lar ile gerçekleşmez. Çünkü NFE, function expression'un kendisini
// çağırır.


// 3. için örnek
// func("Ömer"); // ReferenceError: func is not defined


// 4. için örnek
const myFunc4 = function (name){
    if (name)
        console.log(`Hello ${name}`);
    else
        myFunc4("Outsider");
}
// Yeniden assign edilemeyeceği için myFunc4 başka bir şeye referans veremez ve recursive çağrı
// daima myFunc4'ü çağırır
// myFunc4 = null;

