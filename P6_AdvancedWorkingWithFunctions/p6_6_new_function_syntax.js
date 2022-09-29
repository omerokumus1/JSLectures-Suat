/**
 *  - new Function syntax
 *      1. Syntax
 *          let func = new Function ([arg1, arg2, ...argN], functionBody);
 *      2. Herhangi bir stringi fonksiyona çevirir
 *          Örn; Sunucudan bir string gönderip bunu fonksiyona çeviririz ve
 *              sunucunun yapacağı işi fron-end'de yaparız. Bu sayede sunucu
 *              yükü azalır.
 *      3. Fonksiyon run-time'de oluşur
 *      4. Başka bir fonksiyon içerisinde new Function ile fonksiyon oluşturursak
 *          bu oluşturulan fonk. local değişkenleri tanımaz ama globalleri tanır.
 */

let sum = new Function('a', 'b', 'return a+b');
console.log(sum(1,2));
/*
let sum = new Function('a', 'b', 'return a+b');
JS arka planda şunu oluşturur.
let sum = function(a, b) {
    return a + b
}

 */

// 4. için örnek
function getFunc() {
    let value = "test";

    // value değişkenine erişemez
    return new Function('console.log(value)');
}

getFunc()(); // ReferenceError: value is not defined
