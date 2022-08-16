{ // Recursion
    /**
     * Recursion çözmek için gerekenler:
     *      1. Recursive function
     *      2. Base case
     */

    // Örn; 1'den n'e kadar olan sayıların toplamını rekürsif olarak bulalım
    // Function: f(n) = f(n-1) + n
    // Base case: f(1) = 1
    function f(n) {
        if (n < 1)
            return -Infinity;
        if (n === 1)
            return 1;
        return f(n - 1) + n;
    }

    let n = 4;
    console.log(f(n)) // 1+2+3+..+n


    // Örn; 0'dan n'e kadar olan çift sayıların toplamı
    // Function: f(n) = f(n-2) + n
    // Base case: f(2) = 2 (veya f(0) = 0)
    function f2(n) {
        if (n < 0)
            return -Infinity;
        if (n === 2)
            return 2;
        return f2(n-2) + n;
    }
    n = 6;
    console.log(f2(n));


    // Örn; n!

    // Recursive fonksiyonların memory yükü
}