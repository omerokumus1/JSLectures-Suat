{ // associative
    let r1 = (1 + 2) + 3;
    let r2 = 1 + (2 + 3);
    // r1 = r2
    // compose(
    //     compose(
    //         resultIs,
    //         add5
    //     ),
    //     double
    // )(3); // 'result: 11'
    // compose(
    //     resultIs,
    //     compose(
    //         add5,
    //         double
    //     )
    // )(3); // 'result: 11'

    let ar1 = ([1, 2] + [3, 4]) + [5, 6];
    let ar2 = [1, 2] + ([3, 4] + [5, 6]);
    // ar1 = ar2 (içerik olarak)
    console.log(ar1);
    console.log(ar2);

}

{ // neutral element (etkisiz eleman)
    // toplamanın etkisiz elemanı 0'dır
    let t = 5
    let e = 0
    let t2 = t + e; // t2 = t, çünkü 0 etkisiz elemandır

    // çarpma/bölme/üs etkisiz eleman 1'dir
    t = 5;
    e = 1;
    t2 = t * e; // t2 = t
    t2 = t / e; // t2 = t
    t2 = t ** e; // t2 = t

    // String concat. etkisiz elemanı boş string ""
    t = "JS"
    e = "";
    t2 = t + e; // t2 = t = "JS"

    // Array concat etkisiz eleman []
    t = [1, 2, 3]
    e = []
    t2 = t.concat(e) // t2 = t = [1,2,3]
    console.log(t2)

}

{ // function compose is associative
    let r1 = (1 + 2) + 3;
    let r2 = 1 + (2 + 3);
    // r1 = r2
    // compose(
    //     compose(
    //         resultIs,
    //         add5
    //     ),
    //     double
    // )(3); // 'result: 11'
    // compose(
    //     resultIs,
    //     compose(
    //         add5,
    //         double
    //     )

}

{ // Array reduce
    const array1 = [1, 2, 3, 4];

    // Yapı 1: reduce((previousValue, currentValue) => { /* ... */ } )
// 0 + 1 + 2 + 3 + 4
    let initialValue = 0;
    const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => {
            console.log("prev: " + previousValue + ", cur: " + currentValue, ", init: " + initialValue)
            return previousValue + currentValue
        },
        initialValue
    );

    // let sum = 0;
    // for (let i = 0; i < array1.length; i++) {
    //     sum += array1[i];
    // }
    console.log(sumWithInitial);

    initialValue = 1
    const multiply = array1.reduce(
        (prev, current) => {
            console.log("prev: " + prev + ", cur: " + current, ", init: " + initialValue)
            return prev * current
        },
        initialValue
    )
    console.log(multiply)


    // Yapı 2: reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
    let sum = array1.reduce(
        (prev, curEl, curInd) => {
            console.log("prev: " + prev + ", curEl: " + curEl + ", curInd: " + curInd);
            return prev + curEl;
        },
        0
    )
    console.log(sum)

    // Yapı 3: reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
    let sum2 = array1.reduce(
        (prev, curEl, curInd, stack) => {
            console.log("prev: " + prev + ", curEl: " + curEl + ", curInd: " + curInd + ", stack: " + stack);
            stack.push(prev);
            return prev + curEl;
        },
        0
    )
    console.log(sum2)
    console.log(array1)


}

{ // Examples

    // Sum of values in an object array
    let initialValue = 0
    let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
        console.log("prev: " + previousValue + ", current: " + currentValue + ", current.x: " + currentValue.x)
        return previousValue + currentValue.x
    }, initialValue)

    console.log(sum) // logs 6


    // Flatten an array of arrays
    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
        function(previousValue, currentValue) {
            return previousValue.concat(currentValue)
        },
        []
    )
    console.log(flattened)

    // String concat
    let str1 = "JS";
    let str2 = " is ";
    let str3 = "fun.";
    let strConcat = [str1, str2, str3].reduce(
        (prev, current) => prev.concat(current),
        ""
    )
    console.log(strConcat)


    // Counting instances of values in an object
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Alice', 'Alice']
    let occCounter = names.reduce(
        (prev, curEl) => {
            return curEl === "Alice" ? prev+1 : prev;
        },
        0
    )
    console.log(occCounter)


    // find unique names
    names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Alice', 'Alice']
    let uniqueNames = names.reduce(
        (prev, current) => {
            return (prev.includes(current)) ? prev : prev.concat(current);
        },
        []
    )
    console.log(uniqueNames)

    // count occurences of unique names ( üsttekinin devamı)
    uniqueNames = uniqueNames.reduce(
        (prev, current) => {
            prev[current] = 0;
            return prev
        },
        {}
    )
    console.log(uniqueNames)

    let occurences = names.reduce(
        (prev, current) => {
            prev[current]++;
            return prev;
        }, uniqueNames // [0, 0, 0, 0]
    )
    console.log(occurences)



}

{// reducing arguments
    const add = (a, b) => a + b;
    const addArray = arr => {
        return arr.reduce(add, 0)
    };
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    addArray(numbers); // 55

}