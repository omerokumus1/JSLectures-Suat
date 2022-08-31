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

{ // Spread syntax
    /** 1. Tanım
     *      - Spread syntax rest parametresi gibi üç nokta ile kullanılır
     *          ...spread
     *      - Spread syntax rest parametresinin tersini yapar.
     *          + Rest parametresi değişken sayıdaki argumanları bir listeye koyar
     *          + Spread syntax bir listenin elemanlarını dışarı çıkartır
     *      - Birden fazla spread syntax kullanılabilir
     *          func(...arr1, ...arr2)
     *      - Tüm iterable objelerde kullanılır: array, string, object vs.
     *
     *
     *
     */

    let a = [1, 2, 3, 4]
    console.log(a) // output: [ 1, 2, 3, 4 ] -> liste
    console.log(...a) // output: 1, 2, 3, 4  -> elemanlar tek tek gönderilmiş gibi


    /** 2. Kullanım alanları
     *      - Rest parametresi isteyen fonksiyonlara arrayleri spread syntax ile gönderebiliriz
     *      - 2 tane arrayi birleştirerek yeni bir array oluşturabiliriz
     *      - Array veya obje kopyalamak için kullanılır
     *      - 2 tane array'in içeriğinin aynı olup olmadığını kontrol edebiliriz
     *      - İç içe obje veya arraylerde içteki obje veya array reference copy olur. Dikkat edilmelidir.
     */

    // Örnek 1: Rest parametresi yerine array göndermek
    console.log(Math.max(a)); // NaN -> çünkü a değişkeni bir listedir
    console.log(Math.max(...a)); // 4 -> çünkü spread sytax sayesinde Math.max(1,2,3,4) şeklinde çağırılmış gibi olur

    let b = [5, 6];
    console.log(Math.max(...a, ...b)) // 6 -> Math.max(1,2,3,4, 5,6)


    // Örnek 2: 2 tane arrayi birleştirmek
    let c = [...a, ...b]; // -> [1,2,3,4,  5,6]
    console.log(c);
    c = [0, ...a, -1, ...b, 7]
    console.log(c);

    // Örnek 3: String parçalamak
    let str = "Java Script";
    let d = [...str]; // = Array.from(str); Array.from > spread syntax
    console.log(d);

    // Örnek 4: Array Kopyalamak
    a = [1, 2, 3, 4];
    let aCpy = [...a];
    console.log(aCpy); // [1, 2, 3, 4]
    a.push(5); // aCpy etkilenmez çünkü spread syntax reference copy yapmaz
    console.log(aCpy); // [1, 2, 3, 4]

    // Örnek 5: Obje kopyalamak
    a = {name: "Ömer", age: 25};
    b = {...a};
    console.log(b);
    a["school"] = "Marmara"; // b'yi etkilemez çünkü spread syntax reference copy yapmaz
    console.log("b: ",b);

    // Örnek 5.1: Nested objeleri kopyalamak: içteki obje reference copy olur.
    let o1 = {
        name: "Ömer Faruk Okumuş",
        age: 25,
        school: {
            name: "Marmara University",
            department: "CSE"
        },
        profession: "Software Developer",
    }
    let o2 = {...o1};
    o1.school.department = "MU";
    console.log("Örnek 5.1: Nested objeleri kopyalamak")
    console.log(o1.school.department);
    console.log(o2.school.department);


    // Örnek 6: İki objeyi birleştirmek
    a = {name: "Ömer", age: 25};
    b = {school: "Marmara"};
    c = {...a, ...b};
    console.log(c);

    c = {...a, school: "Marmara"};
    console.log(c);


    // Örnek 7: 2 arrayin içeriğinin aynı olup olmadığını kontrol etmek
    a = [1, 2, 3, 4];
    b = [1, 2, 3, 4];
    c = [1, 2, 3, 4, 5];

    let isaEqualb = JSON.stringify(a) === JSON.stringify(b);
    console.log(isaEqualb);


    // Örnek 8: 2 objenin içeriğinin aynı olup olmadığını kontrol etmek
    a = {name: "Ömer", age: 25};
    b = {school: "Marmara"};
    c = {name: "Ömer", age: 25};
    isaEqualb = JSON.stringify(a) === JSON.stringify(b);
    console.log(isaEqualb);
    let isaEqualc = JSON.stringify(a) === JSON.stringify(c);
    console.log(isaEqualc);

}