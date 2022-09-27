/**
 *      - window:
 *          1. global object
 *          2. Provides variables and functions that are available everywhere
 *          3. It is the window that the html document is added into
 *          4. The window global variable represents the window in which the script is running (browser side).
 *          5. All properties of the global object can be accessed directly:
 *              alert("Hello") = window.alert("Hello")
 *
 *          6. Functions and variables that are declared with var keyword or
 *              function declarations are a part of the window object
 *              - Ex 1
 *                  var x = 5;
 *                  console.log(window.x); // print 5
 *
 *              - Ex 2
 *                  function f1(){...}
 *                  f1() = window.f1()
 *
 *              This behavior is not preferable. Instead, use let keyword or
 *              arrow functions.
 *
 *              More examples are below
 *
 *
 */

// Examples for 6.
var wVar = 111;
console.log("window.wVar:",window.wVar);

function windowFunction() {
    console.log("window function is called");
}
window.windowFunction();

var windowArrowfunction = () => {
    console.log("windowArrowfunction is called");
}
window.windowArrowfunction();

var windowFunctionExpression = function () {
    console.log("windowFunctionExpression is called");
}
window.windowFunctionExpression();

let windowFunctionExpression2 = function () {
    console.log("windowFunctionExpression2 is called");
}
window.windowFunctionExpression2(); // type error on browser console
