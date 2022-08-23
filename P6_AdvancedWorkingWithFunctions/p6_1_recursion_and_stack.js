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

    function f1(n) {
        let r = 0;
        for (let i = 0; i < n + 1; i++) {
            r += i;
        }
        return r;
    }
    console.log(f1(n))


    // Örn; 0'dan n'e kadar olan çift sayıların toplamı
    // Function: f(n) = f(n-2) + n
    // Base case: f(2) = 2 (veya f(0) = 0)
    function f2(n) {
        if (n < 0) // input check
            return -Infinity;
        if (n === 2) // base case
            return 2;
        return f2(n-2) + n; // recursive step
    }
    n = 6;
    console.log(f2(n));


    // Örn; n!
    // Fibonacci: f(n) = f(n-1) + f(n-2)

    // Recursive fonksiyonların memory yükü: yukarıda f() -> recursive vs f1() -> iteration
    // 2^4 = 2^3 * 2
    // 2^3 = 2^2 * 2
    // 2^2 = 2^1 * 2
    // 2^1 = 2^0 * 2
    // 2^0 = 1
}

{ // Recursive Traversals
    // Örn; aşağıdaki objede toplam salary'i recursive olarak bul
    let company = { // the same object, compressed for brevity
        sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
        development: {
            sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
            internals: [{name: 'Jack', salary: 1300}]
        }
    };

    // 1. Array görürsen içerisinde gezin ve salary değerlerini topla
    // 2. Obje görürsen içerisinde gezin ve array bulmaya çalış
    // Base case -> array bulmak
    // Recursive step -> array aramak
    function sumSalariesRecursively(obj) {
        if (Array.isArray(obj)) { // base case: array bulundu, salary'leri topla
            let total = 0;
            for (const value of obj) {
                total += value.salary;
            }
            return total;
        } else { // recursive step: array bulunamadı, aramaya devam et
            let totalSalary = 0;
            for (const value of Object.values(obj)) {
                totalSalary += sumSalariesRecursively(value);
            }
            return totalSalary;
        }
    }

    console.log(sumSalariesRecursively(company));

}