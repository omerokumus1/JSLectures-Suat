{// const review
    const arr = [1, 2, 3]
    arr.push(4) // -> değişkenin gösterdiği obje değişebilir
// arr = [1,2,3,4,5] // ama değişken tekrar assign edilemez yani başka objeyi gösteremez
}

{// Immutability: bir objenin yapısının değiştirilemez olması
// let arr = [1,2,3] -> bu array [1,2,3] olarak kalmalı, yani ilk tanımlandığı haliyle kalmalı
    let arr = [1,2,3];
    let arr2 = [1,2,3];

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
            return { error: "add must take two numbers" };
        }

        return { result: a + b };
    };

    console.log("add")
    console.log(add(3,4))
    console.log(add(3,"4"))

}
