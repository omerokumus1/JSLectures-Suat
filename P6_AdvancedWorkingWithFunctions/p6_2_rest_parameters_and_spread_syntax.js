{ // Rest parameters
    /* 1. Tanım
        - Rest parametresi sayesinde fonksiyona istediğimiz sayıda argüman gönderebiliriz
        - Rest parametresi üç nokta ile tanımlanır. Math.max fonksiyonunun tanımına bakarsak
            parametre ...values: number[] şeklinde gözükür.
     */

    Math.max(1, 2, 3, 4, 5, 6, 7, 8)
    Math.max(1, 2, 3, 4, 5) // yukarda 8 argüman varken burada 5 tane var.

    Object.assign({}, {}, {}, {}, {}, {})
    Object.assign({}, {}, {}, {}, {}, {}, {}) // yukarıda 5 argüman varken burada 6 tane vardır

    /* 2. Rest parametreli fonksiyon oluşturmak
        function funcName(...args){

        }
        - args parametresi otomatik olarak gönderilen argümanları içeren bir array'e dönüşür
     */

    // Örnek 1- Toplama fonksiyonu
    function sumAll(...numbers) { // numbers parametresi gönderilen argümanları tutan bir arraydir
        let sum = 0;
        for (const number of numbers) {
            sum += number;
        }
        return sum;
    }

    /* 3. Ne zaman kullanılabilir?
            - Liste göndermek yerine rest parametresi oluşturabilirsin
            - Fonksiyona değişken sayıda argüman gelebilirse kullanabilirsin
     */


    /**
     *      1. Rest parametresi parametre listesindeki son parametre olmak zorundadır.
     *      2. Sadece 1 tane rest parametresi olabilir.
     * */

    // 1. için örnek - Hatalı kod
    // function f(arg1, ...args, arg2) {
    //
    // }

    // 2. için örnek - Hatalı kod
    // function f(...args1, ...args2) {
    //
    // }


    /* 4. arguments Variable
        - Fonksiyonların özel bir değişkenidir.
        - Her fonksiyona otomatik olarak atanır.
        - Iterable bir objedir, array'e benzer ama array değildir. Bundan sebep temel array fonksiyonları yoktur
        - Arrow function'larda bulunmaz
     */

    // Örnek
    function showParameters() {
        console.log("showParameters")
        console.log(arguments[0])
        console.log(arguments[1])
    }
    showParameters("Ömer", "Faruk")

    function showParameters2() {
        console.log("showParameters2")
        for (const a of arguments) {
            console.log(a)
        }
    }
    showParameters2("Ömer", "Faruk", "Okumuş")

}