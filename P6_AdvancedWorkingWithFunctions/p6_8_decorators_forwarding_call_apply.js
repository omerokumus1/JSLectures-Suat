let slow = (x) => {
    return 2*x;
};

let slowFuncDecorator = () => {
    let cache = new Map();

    return function (x) {
        console.log()
        console.log("parameter:", x)
        console.log("cache:");
        console.log(cache);
        if (cache.has(x)) {
            console.log(`${x} is in cache. It is returned from cache.`)
            return cache.get(x);
        } else {
            let result = slow(x);
            cache.set(x, result);
            console.log(`${x} is not in cache. The result is calculated, cached and returned.`)
            return result;
        }
    }
}

let slowFuncCached = slowFuncDecorator();
// console.log(slowFuncCached.toString());
// 1, 3, 10, 3, 7, 7, 9, 4, 7
slowFuncCached(1);
slowFuncCached(3);
slowFuncCached(10);
slowFuncCached(3);
slowFuncCached(7);
slowFuncCached(7);
slowFuncCached(9);
slowFuncCached(4);
slowFuncCached(7);


/** func.call
 *      - Fonksiyon içindeki this keyword'ünü bir objeye setlemek için kullanılır
 *      - func.call(context, arg1, arg2, ..., argN)
 *
 * */

let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        // scary CPU-heavy task here
        console.log("Called with " + x);
        console.log("this:", this)
        return x * this.someMethod(); // (*)
    }
};

worker.slow(1)
// let func = worker.slow
// func(1) // hatalı satır çünkü this keyword global objeyi gösterir

let func = worker.slow
func.call(worker, 1) // func içindeki this keyword'ü worker objesine bağlanır, worker objesine referans verir



/** Solution 2 */
// function cachingDecorator(func, obj) {
//     let cache = new Map();
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(obj, x); // (**)
//         cache.set(x, result);
//         return result;
//     };
// }
// console.log( worker.slow(1) ); // the original method works
//
// worker.slow = cachingDecorator(worker.slow, worker); // now make it caching
//
// console.log( worker.slow(2) );

/** Solution 2 */
function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        console.log("**this:", this)
        let result = func.call(this, x); // "this" is passed correctly now
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log( worker.slow(2) ); // works
console.log( worker.slow(2) );