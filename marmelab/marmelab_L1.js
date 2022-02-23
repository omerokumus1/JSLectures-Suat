{// const review
    const arr = [1, 2, 3]
    arr.push(4) // -> değişkenin gösterdiği obje değişebilir
// arr = [1,2,3,4,5] // ama değişken tekrar assign edilemez yani başka objeyi gösteremez
}

{// Immutability: bir objenin yapısının değiştirilemez olması
// let arr = [1,2,3] -> bu array [1,2,3] olarak kalmalı, yani ilk tanımlandığı haliyle kalmalı
    let arr = [1, 2, 3];
    let arr2 = [1, 2, 3];

    arr.push(4);
    console.log("arr after push")
    console.log(arr);

    console.log("concat result")
    console.log(arr2.concat(4));
    console.log("arr2 after concat")
    console.log(arr2)
}

{
    var nbCall = 0;
    const fn = () => {
        nbCall++; // It should not mutate any variable outside of its body
    };

    // pure
    const fn2 = (nbCall) => {
        let nbCall2 = nbCall + 1; // It does not mutate its arguments
        return nbCall2;
    };
    let nbCall2 = 0
    console.log(fn2(nbCall))
    // Post increment/decrement: önce kullan sonra değiştir (değiştirmek: arttırmak ya da azaltmak)
    // Pre increment/decrement: önce değiştir sonra kullan
    // **** Pre/post increment/decrement operasyonlarını daima tek başına kullan. Hiçbir zaman bir toplama işlemi vs içerisinde kullanma
}

{
    // Error handling: return saying that something is wrong
    const add = (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") {
            return {error: "add must take two numbers"};
        }

        return {result: a + b};
    };

    console.log("add")
    console.log(add(3, 4))
    console.log(add(3, "4"))

}


{ // Currying: tek argumanlar fonksiyonlar

    function add(a, b) {
        return a + b;
    }
    console.log("two argument add funct: "+add(3, 5))

    function add2(a){
        return function(b){
            return a + b;
        }
    }
    let f = add2(3) // f fonksiyonu ile diğer tüm sayılara 3 eklenebilir
    console.log(typeof f)
    console.log(f(5))
    console.log("one argument add funct: " + add2(3)(5))

    // [1,2,3].concat(4).toString() -> add2(2)(3)
    // [1,2,3].concat(4) ile add2(2) benzer; .toString() ile (3) benzer yapılardır.
    // .toString() yapısı concat fonksiyonun döndürdüğü arrayin üzerine çağırılırken
    // (3) yapısı add2(2) fonksiyonun döndürdüğü fonksiyon üzerine çağırılır (döndürülen fonksiyona 2 argumanı gönderilir)


    function add3(a){
        return function (b){
            return function (c){
                return a + b + c
            }
        }
    }
    console.log("3 parameters function: "+add3(1)(2)(3))



}

{ // Currying: arrow functions
    let add = (a, b) => a + b;
    console.log("2 argument arrow func: "+ add(2,3))

    let add2 = a => b => a+b;
    console.log("2 argument simplified arrow func: "+ add2(2)(3))

    // a => b => a+b yapısında a parametresi ile bir arrow function geri döndürülür. O arrow function da b => a+b 'dir.
}

{
    let greet = "hello";
    let name = "JS";
    let greetings = `${greet} ${name}`; // greet + " " + name
    console.log(greetings)
}


{ // Flexibility of one argument functions (generic code)
    function f(a){
        return function (b){
            return a + b;
        }
    }

    let increment = f(1);
    let decrement = f(-1);
    console.log("increment: "+increment(4))
    console.log("increment: "+increment(8))
    console.log("decrement: "+decrement(111))
    console.log("decrement: "+decrement(94))


    function f2(a){
        return function (b){
            return a*b;
        }
    }

    let double = f2(2);
    let half = f2(0.5);
    let inverse = f2(-1);

    console.log("double: "+double(11))
    console.log("half: "+half(100))
    console.log("inverse: "+inverse(154))
    console.log("inverse"+inverse(-47))

}









































