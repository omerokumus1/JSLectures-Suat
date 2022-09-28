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
