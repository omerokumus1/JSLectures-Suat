// Random sayılarla oluşturulan rastgele boyuta sahip integer eleman barındıran bir arrayde pozitif negatif ve sıfırları
// say.

{ // block scope
    /** TODO:
     *      1. Rastgele bir sayı üret (size)
     *      2. Rastgele integer sayılarla array'i doldur
     *      3. Array üzerinde gezinerek pozitif, negatif sayıları ve sıfırları say.
     *      4. Sonuçları ekrana bastır
     */

        // 1. Rastgele bir sayı üret (size)
    let size = parseInt((Math.random() * 10 + 5) + "")

    // 2. Rastgele integer sayılarla array'i doldur
    let arr = []
    let r
    for (let i = 0; i < size; i++) {
        r = parseInt((Math.random() * 20 - 10) + "")
        arr.push(r)
    }
    console.log(arr)
    // 3. Array üzerinde gezinerek pozitif, negatif sayıları ve sıfırları say.
    let positives = 0, negatives = 0, zeros = 0
    for (let i = 0; i < size; i++) {
        if (arr[i] < 0)
            negatives++
        else if (arr[i] === 0)
            zeros++
        else
            positives++
    }

    console.log("positives: " + positives)
    console.log("negatives: " + negatives)
    console.log("zeros: " + zeros)
}

{
    // find max of an array
    /** TODO:
     *      2. Iterate over the array and find max
     *          2.1. Start with first element and continuously compare elements
     *          2.2. If you find bigger number, keep the bigger one and keep comparing with it.
     *          2.3. Else, keep the current one, keep comparing with the current one
     *
     */
        // 5, 4, 6, 8, 9, 7, 5, 11
    let arr = [5, 4, 6, 8, 9, 7, 5, 11]
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i]
    }
    console.log("max: " + max)


    max = arr[0]
    for (const item of arr) {
        if (item > max)
            max = item
    }
    console.log("max: " + max)
}

{
    // HW: Find index of max element
}

{ // longest subarray
    const arr = [0, 1, 2, 1, 2, 3];
    let subArr = [];
    let max = 0;
    let maxArr = [];
    for (let startingIndex = 0; startingIndex < arr.length; startingIndex++) {
        subArr = createSubarrayFrom(startingIndex);
        if (subArr.length > max) {
            max = subArr.length;
            maxArr = [subArr];
        }
    }

    console.log("length: " + max);
    console.log(maxArr);

    function createSubarrayFrom(startingIndex) {
        let subArr = [arr[startingIndex]];
        for (let i = startingIndex+1; i < arr.length; i++) {
            if (isValidElement(subArr, arr[i])){
                subArr.push(arr[i]); // 0 1
            } else {
                break;
            }
        }
        return subArr;
    }

    function isValidElement(arr, e) {
        for (let i = 0; i < arr.length; i++) {
            if (Math.abs(arr[i] - e) > 1) {
                return false;
            }
        }
        return true;
    }

}