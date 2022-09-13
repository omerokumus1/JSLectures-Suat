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
    function makeCounter() { // le1
        let count = 0;

        return function () { // le2 - Environment -> le1
            let x = 2;
            return count++;
        };
    }

    // let le1 = {
    //
    // };
    // let environment = {
    //     out: le1;
    // }
    // let le2 = {
    //     out: le1;
    // }

    let counter = makeCounter();
    // counter = null;
    console.log(counter());
    console.log(counter());
    console.log(counter());
    // counter = null;
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

    let m1 = 1;
    let myFun = function () {
        console.log(m1);
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

    /*
        Closure: a function that remembers its outer variables and can access them.
     */
}

let lexEnv = {};
    // let phrase; -> lexEnv.envRecord.phrase = undefined;

{ // Garbage Collection
    /**
        - Since Lexical Environment is a JS object, it can be collected by the garbage collector.
        - Garbage collector collects objects if they are not used or there is no reference to it in any other places.
            Ex. 1;
                let o1 = {};
                let o2 = {obj: o1}; -> has a reference to o1 thus o1 is not collected
                o2 = null; -> o2 is no longer, since reference to o1 is removed, o1 is idle, hence, is collected.

            Ex. 2;
                let o1 = {name: "Ömer"};
                ...
                console.log(o1.name); -> Till this line o1 is alive. However, after that line, if o1 is not used or referenced, it will be collected.


             function makeCounter() { // le1
                let count = 0;

                return function () { // le2 - Environment -> le1
                    let x = 2;
                    return count++;
                };
            }

             let le1 = {

            };
             let environment = {
                out: le1;
            }
             let le2 = {
                out: le1;
            }

             let counter = makeCounter();
             // counter = null; -> Environment object of counter function is not reachable, then reference to le1 is removed, le1 is collected
             console.log(counter()); -> Since called, Environemnt object is no longer available but Lexical Env. is created and holds reference to le1.
             console.log(counter());
             console.log(counter());
             // counter = null; -> le2 is not reachable anymore, thus le1 is idle and collected.
     */
}

// if-true-then
let b = false;
console.log(b && "JavaScript");
console.log(!b && "JavaScript");
function addNumbers(n1, n2) {
    console.log(n1+n2);
}
!b && addNumbers(1,2); // if-true-then