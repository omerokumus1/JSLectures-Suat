/** 0- Intro
 * Değişken tanımlayan keyword'ler
 *      - let
 *      - const
 *      - var: let gibi mutable/değiştirilebilir değişkenler tanımlamak için kullanılır
 */


/** 1- "var" has no block scope
 *      - var keyword'ünün bir block scope'si yoktur ama let ve const'un vardır.
 *      - 2 farklı scope içinde tanımlama yapar: Global scope ve function-level scope
 *          1. Global scope'de tanımlanan değişkenler global değişken olduğundan ötürü tanımlandığı bloğa bağlı
 *              kalmaksızın yaşamaya devam ederler.
 *          2. Bir kod bloğu (if, while, for, {}) fonksiyon içindeyse, bu blok içindeki değişken function-level scope'ye sahip olur
 */

// 1. için örnek
if(true) {
    if (true){
        for (let i = 0; i < 1; i++) {
            var x = 333;
        }
    }
}
console.log("x: ", x);

// 2. için örnek
function f1() {
    if (true) {
        var v = 222;
    }
    console.log("v in f1, outside if: ", v); // Hata vermez çünkü v'nin scopesi oluşturulduğu fonksiyonun scopesidir ve o scope içindeyiz
}
// console.log("v outside of f1, before f1 call: ", v); // -> ReferenceError: v is not defined çünkü v'nin scopesi oluşturulduğu fonksiyonun scopesidir

f1()
// console.log("v outside of f1, after f1 call: ", v); // -> ReferenceError: v is not defined çünkü v'nin scopesi oluşturulduğu fonksiyonun scopesidir


/** 2- "var" tolerates redeclarations
 *      - var keyword'ü ile birden fazla aynı isimde değişken tanımlanabilir
 */

var name = "John Doe";
var name = "Jane Doe"; // yeni bir değişken oluşturmaz. Var olan değişkenin değerini değiştirir. name = "Jane Doe" ile aynıdır.
console.log("name: ", name);


/** 3- "var" variables can be declared below their use
 *      1. called hoisting/raising: çünkü değişkenler global tanımlanıyorsa bir nevi ilk satırlara, function-level ise
 *          bir nevi fonksiyonun ilk satırlarına yazılıyormuş gibi davranırlar. Bu yüzden de yükseltme-raising diye isimlendirilir.
 *      2. Declaration'lar raising edilir ama assignmentlar edilmez
 */

name2 = "Ömer";
console.log(name2);
var name2;

name3 = "Faruk";
if (false){
    var name3;
}
console.log("name3: ", name3);

// 2. için örnek
console.log(name4); // undefined çünkü name4 declaration'u raise edilmiştir fakat assignment edilmemiştir. Yani bu satırdan sonra assignment gerçekleşir.
var name4 = "Suat";


request.onStart = () => {drawLoaderOnScreen()}
response.onArrived = () => {removeLoaderFromScreen()}


function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

loadScript("src", drawLoaderOnScreen)
loadScript("src", lockScreen)