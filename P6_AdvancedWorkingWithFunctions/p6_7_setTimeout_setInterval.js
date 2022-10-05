/**
 *  setTimeOut:
 *     - allows us to run a function once after the interval of time.
 *     - Syntax;
 *          let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
 *             + Do not use code, instead, pass a function or create an anonymous one.
 */

{ // setTimeout
    const f1 = function () {
        console.log("f1 is called");
    }
    // do not add () for f1
    setTimeout(f1, 2000);

    const f2 = (str) => {
        console.log(str);
    }
    // do not add () for f2
    setTimeout(f2, 3000, "f2 is called");

    // clearTimeout
    const timerId = setTimeout(f2, 4000, "f2 is not called");
    clearTimeout(timerId); // yukarıdaki fonksiyon için kurulan timer silinir. Bu sebeple çağırılmaz
}

/**
 *  setInterval
 *      - allows us to run a function repeatedly, starting after the interval of time,
 *          then repeating continuously at that interval.
 *      - Syntax;
 *          let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
 *              + Do not use code, instead, pass a function or create an anonymous one.
 *
 */

{ // setInterval
    const f1 = () => {
        console.log("tick");
    }
    const timerId = setInterval(f1, 1000);
    setTimeout((id) => {
        clearInterval(id)
    }, 5500, timerId);
}

/**
 *  Background
 *      - Thread -> işçi
 *      - Main thread -> run tuşuna basılınca main thread isimli işçi ana kodu çalıştırmaya başlar
 *      - Helper thread -> main thread haricindeki thread'lere denir.
 *          -> setTimeout/setInterval yapılınca bir helper thread işe koyulur. Bu helper
 *              thread'in işi süreyi kollamak ve zamanı gelince söylenilen
 *              fonksiyonu çalıştırmaktır.
 *              Örn;
 *                  setTimeout(() => {console.log("time's up!")}, 3000)
 *                  - Yukarıdaki kod 3 saniye sonra consola time's up! yazar.
 *                  - Yukarıdaki kodun çalışma sırası:
 *                      1. Main thread kodu çalıştırır.
 *                      2. Bir scheduling olduğundan ötürü main thread bir helper thread'i
 *                          aktif eder ve bu setTimeout'un yapacağı işi bu helper thread'e atar.
 *                      3. Helper thread süreyi gözler ve 3 saniye sonra ilk argümanda gönderilen
 *                          anonim fonksiyonu çalıştırır
 *                      4. Bu süre içerisinde main thread kendi işini yani peşi sıra gelen kodları
 *                          çalıştırmaya devam eder.
 *                      5. Aktif olarak çalışan herhangi bir thread yoksa programın çalışması
 *                          sonlandırılır.
 */