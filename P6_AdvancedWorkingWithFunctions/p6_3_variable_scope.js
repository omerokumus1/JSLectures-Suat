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
     *      - Değişkenlerin hangi bloğa ait olduğunun takibinin yapılması için gereklidir.
     *      - Environment Record: an object that stores all local variables as its properties
     *      - Outer (Lexical Environment's) Reference: A reference to the outer lexical environment,
     *          the one associated with the outer code
     *
     *      - A “variable” is just a property of the special internal object, Environment Record.
     *          “To get or change a variable” means “to get or change a property of that object”.
     *
     *      - A variable is a property of a special internal object, associated with the currently executing
     *          block/function/script.
     *      - Working with variables is actually working with the properties of that Environment Record object.
     *
     *      - “Lexical Environment” is a specification object: it only exists “theoretically” in the language
     *          specification to describe how things work. We can’t get this object in our code and manipulate it directly.
     */

    let myFun = function () {

    }
    function myfun2(n1, n2) {
        let x1 = 2;
    }

    let le1 = {
        x1: 1,
        x2: 2,
        out: null
    }

    let le2 = {
        y1: 1,
        out: le1
    }

    let le3 = {
        z1: 1,
        z2: 2,
        z3: 3,
        out: le2
    }

    let le4 = {
        a1: 1,
        a2: 2,
        out: le3
    }
    {
        // le1
        {
            // le2
            {
                // le3
                {
                    // le4
                    // search for x2
                    // b1
                }
            }
        }
    }
    // How JS find a variable
    let le = le4;
    let finder = (varName) => {
        while (le !== null) {
            let keys = Object.keys(le);
            for (const key of keys) {
                if (key === varName) {
                    return le[key];
                } else if (key === "out") {
                    le = le[key];
                    break;
                }
            }
        }
    }
    console.log("x2: ", finder("x2"));
    console.log("b1 ", finder("b1"));

}

let lexEnv = {};
    // let phrase; -> lexEnv.envRecord.phrase = undefined;

