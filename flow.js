const flow = (...fns) => {
    console.log("...fns: ", fns);
    return fns.reduce((f, g) => {
        console.log("f: ", f);
        console.log("g: ", g);
        return (...args) => {
            console.log("...args: ", args);
            console.log("f(...args): ", f(...args));
            console.log("g(f(...args)): ", g(f(...args)));
            g(f(...args))
        }
    })
}

function findSelector(...args) {
    console.log("inside findSelector: " , args);
    return "findSelectorReturn";
}

function clickOn(arg) {
    console.log(arg + " from clickOn");
    return "clickOnReturn";
}

function typeIn() {
    
}

function selectOption() {

}

flow(findSelector, clickOn)("Health Radio Group");

// findSelector - clickOn - typeIn - selectOption
//
// let f1 = clickOn(findSelector(...args))
// let f2 = typeIn(f1())
// let f3 = selectOption(f2())
//
// selectOption(typeIn(clickOn(findSelector(...args))))(arg)

// (h o g o f )(x) -> h(g(f(x)))

clickOn(findSelector("Health Radio Group"))

const arrow = (a) => findSelector(5);
console.log(arrow(5))

// https://medium.com/@venomnert/pipe-function-in-javascript-8a22097a538e
const pipe = (f, g) => {
    return (arg) => {
        return g(f(arg));
    }
}
console.log("pipe")
pipe(findSelector, clickOn)("Health Radio Group")

const flow2 = (...fns) => {
    return fns.reduce((f, g) => {
        return (...args) => {
            g(f(...args))
        }
    })
}
console.log("flow2")
flow2(findSelector, clickOn)("Health Radio Group")