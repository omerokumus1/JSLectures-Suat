{
    /**
     *  Variable Scope:
     *      1. Bir değişkenin ne zaman canlı olduğunu bu değişkene hangi kod satırlarında erişebildiğimizi belirtir.
     *      2. Bir değişken declare edildiği kod bloğunda erişebilirdir.
     *      3. Scope'lar sayesinde aynı isimde birden fazla değişken oluşturabiliriz
     *      4. if, for, while gibi yapıların kendi blokları mevcuttur
     *      5. Nested kod bloklarında içerdeki blok dışardaki bloktaki declare edilmiş değişkenleri görür ama
     *          dışardaki blok içeridekileri göremez.
     *
     *  Code block:
     *      - Süslü parantez bloklarıdır. {...}
     */

    /** 2. için Örnek */
    {
        let sc = 3;
    }
    {
        // console.log(sc); // yukarıdaki bloktaki sc değişkenine erişemeyiz bu yüzden hata verir
    }

    /** 3. için Örnek */
    {
        const xx = 23;
        console.log(xx);
    }
    {
        const xx = 24;
        console.log(xx);
    }

    /** 4. için Örnek */
    if (true) {
        const xx = 11;
        console.log(xx);
    }
    // console.log(xx); // yukarıdaki xx değişkeni if bloğunda tanımlı olduğundan dolayı burada erişilemez

    let i = 1;
    while (i < 3) {
        const xx = 22;
        console.log(xx);
        i++;
    }
    // console.log(xx); // yukarıdaki xx değişkeni if bloğunda tanımlı olduğundan dolayı burada erişilemez

    for (let j = 0; j < 5; j++) {
        console.log("j: ", j);
    }
    // console.log(j); // j değişkeni for bloğunda tanımlıdır. bu sebeple dışarıda erişemeyiz

    /** 5. için örnek */
    {
        const x1 = 4;
        {
            const x2 = 5;
            console.log("x1+x2=", (x1+x2)); // içteki blok dışardaki declare edilmiş değişkenlere erişebilir.
        }
        // console.log("x1+x2=", (x1+x2)); // x2 içteki blokta olduğu için erişilemez.
    }

    /**
     *  Nested Functions
     *      1. Bir fonksiyon içerisinde başka bir fonksiyonun tanımlanmasıdır.
     *      2. İçerde tanımlanan fonksiyon arguman listesine ve declare edilmiş değişkenlere erişebilir.
     */

    /** 2. için Örnek */
    function f1(first, last) { // arguman listesi
        const space = " "; // declare edilmiş değişken
        function getFullName() {
            return first + space + last;
        }

        console.log("full name: ", getFullName());
    }
    f1("ömer", "okumuş");

    /** Değişik bir Örnek */
    function makeCounter() {
        let count = 0;

        return function () {
            let x = 2;
            return count++;
        };
    }
    let counter = makeCounter();
    console.log(counter());
    console.log(counter());
    console.log(counter());
    let counter2 = makeCounter();
    console.log(counter2());
    console.log(counter2());

    console.log(counter());
    console.log(counter());

    /**
     *  Lexical Environment
     *      - Environment Record
     *      - Outer Lexical Environment's Reference
     */

}
