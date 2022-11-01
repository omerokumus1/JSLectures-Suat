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
