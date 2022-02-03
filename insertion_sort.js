/** TODO:
 *      1. 1. indexteki elemandan başla sona kadar git
 *      2. Her bir elemanı o anki soldaki eleman ile karşılaştır.
 *          2.1. Eğer soldaki eleman daha küçükse ikisinin yerini değiştir. 2.'e git
 *          2.2. Eğer soldaki eleman daha küçük değilse, herhangi bir şey yapma diğer elemana geç
 *      3. Eğer bir eleman soldakinden daha büyükse veya 0. indexte yerleştirilmişse bitir, sonraki elemana geç
 *
 *      7 8 5 2 4 6 3
 *      5 7 8 2 4 6 3
 *      2 5 7 8 4 6 3
 *      2 4 5 7 8 6 3
 */

function insertionSort(arr){
    let temp
    for (let i = 1; i < arr.length; i++) {
        for (let index = i; index > 0; index--) {
            if (arr[index] < arr[index-1]){
                temp = arr[index]
                arr[index] = arr[index-1]
                arr[index-1] = temp
            }
            else break


        }
    }
    return arr
}

let arr = [7 ,8 ,5 ,2 ,4 ,6, 3]
console.log(insertionSort(arr))