// optional chaining: bir objeye erişmek için kullanılan güvenli bir yöntem
// ?. ile optional chaining sağlanır

// 1- null olan değişkene erişmeye çalışmak
let o1 = null;
// o1.name; // null bir objenin içine erişmeye çalıştığımız için runtime exception verir
console.log("name: "+o1?.name); // ? şu şekilde okunur: o1 nesnesi varsa name property'sini getir, yoksa hiç erişmeye çalışma. Burada exception olmaz.

// optional chaining to if-else
// o1?.name; to
if (o1 !== null)
    console.log(o1.name);
else
    console.log(undefined)



// 2- Olmayan bir property'e erişmeye çalışmak
o1 = {name: "Ömer"};
// console.log(o1.school.department); // school property'si o1 içinde yoktur. olmayan bir property obje olarak erişilmeye çalışılınırsa hata verir
let prop = o1.school?.department;
console.log(prop);



// 3- Null property'nin içine erişmeye çalışmak
o1 = {name: "Ömer", age: null};
console.log("age: " + o1.age?.value) // conditional chaining olmasaydı exception fırlatırdı



// 4- Birden çok optional chaining kullanmak
console.log(o1?.school?.department);

/*  Ne zaman optional chaining?:
        - Bir obje runtime'de belli oluyorsa
        - Herhangi bir property değeri null olabilirse
 */