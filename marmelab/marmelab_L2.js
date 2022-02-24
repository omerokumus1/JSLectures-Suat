
{ // associative
    let r1 = (1 + 2) + 3;
    let r2 = 1 + (2 + 3);
    // r1 = r2

    let ar1 = ([1, 2] + [3, 4]) + [5, 6];
    let ar2 = [1, 2] + ([3, 4] + [5, 6]);
    // ar1 = ar2 (içerik olarak)
    console.log(ar1);
    console.log(ar2);

}

{ // neutral element (etkisiz eleman)
    // toplamanın etkisiz elemanı 0'dır
    let t = 5
    let e = 0
    let t2 = t + e; // t2 = t, çünkü 0 etkisiz elemandır

    // çarpma/bölme/üs etkisiz eleman 1'dir
    t = 5;
    e = 1;
    t2 = t*e; // t2 = t
    t2 = t/e; // t2 = t
    t2 = t ** e; // t2 = t

    // String concat. etkisiz elemanı boş string ""
    t = "JS"
    e = "";
    t2 = t + e; // t2 = t = "JS"

    // Array concat etkisiz eleman []
    t = [1,2,3]
    e = []
    t2 = t.concat(e) // t2 = t = [1,2,3]
    console.log(t2)

}