// optional chaining: bir objeye erişmek için kullanılan güvenli bir yöntem
// ?. ile optional chaining sağlanır. optional chaining'in anlamı: ?. 'dan sonrası mevcut değilse sağ tarafa hiç bakma

// 1- null olan değişkene erişmeye çalışmak
let o1 = null;
// o1.name; // null bir objenin içine erişmeye çalıştığımız için runtime exception verir
console.log("name: " + o1?.name); // ? şu şekilde okunur: o1 nesnesi varsa name property'sini getir, yoksa hiç erişmeye çalışma. Burada exception olmaz.

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


// 5- Function call with optional chaining: ?.()
o1 = {
    name: "Ömer",
    age: 22,
    sayHi: function () {
        console.log("Hi, my name is " + this.name);
    }
};

o1.sayHi();
o1.greetings?.(); // greetings olmadığı için o1.greetings undefined olur yani ?.'den öncesi yoktur. Bundan sebep function call '()' olmaz.


// 6- Object property access with optional chaining: ?.[]
const k1 = "age"
const k2 = "school"
console.log(o1?.[k1]) // o1 mevcut değilse property'e erişmeye çalışmaz.
console.log(o1[k2]?.department);


// 7- Optional chaining with delete
o1 = {
    name: "Ömer",
    age: 22,
    sayHi: function () {
        console.log("Hi, my name is " + this.name);
    }
};
delete o1?.school // school does not exist, so thanks to optional chaining, no crash

//**** optional chaining reading ve deleting için kullanılır fakat writing için kullanılamaz
// o1?.school = "Marmara"; // o1?.school undefined olduğu için direkt hata verir