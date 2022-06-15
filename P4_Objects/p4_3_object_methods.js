// objeler değişkenlere (property) sahip olabilirken aynı zamanda methodlara da sahip olabilir
// objelere method ekleme

// 1. Yöntem
let o1 = {
    name: "Ömer Faruk Okumuş",
    age: 25,
    school: "Marmara University",
    profession: "Software Developer",
    greetings: function () {
        console.log("Hi, I am a friendly neighbor!");
    }
}

o1.greetings()

// 2. Yöntem
o1.sayHello = () => {
    console.log("Hello!");
}
o1.sayHello()


// 3. Yöntem
let m1 = () => {
    console.log("dummy function");
}
o1.dummyFunc = m1;

o1.dummyFunc()

// method shorthand
let o2 = {
    name: "Faruk",
    greetings(n) {
        console.log("Greetings from " + n);
    }
}
o2.greetings("Ömer")


// this keyword: objenin değişkenlerine erişmek için kullanılır
o1 = {
    name: "Ömer Faruk Okumuş",
    age: 25,
    school: "Marmara University",
    profession: "Software Developer",
    introduce() {
        console.log("Name: " + this.name );
        console.log("Age: " + this.age );
        console.log("School: " + this.school );
        console.log("Profession: " + this.profession );
    }
}
o1.introduce();

// "this" is not bound: this kelimesinin bağlı olmaması -> this kelimesi illaki bir objenin içerisinde yazılmak zorunda değil
function f1() {
    console.log(this.name) // bir objenin içerisinde olmamamıza rağmen this kelimesini kullanabiliyoruz.
}

// f1 içindeki this keywordü bir objeye bağlı olmadığından dolayı name değerini getiremez, undefined basar.
// Aslında this keywordu bir objeye bağlıdır o da global object olarak geçer. Fakat çoğunlukla ilgi alanında olan bir obje değildir.
f1();

// ** this kelimesinin referans verdiği obje run-time belli olur

// nerede kullanılır? Oluşturduğumuz bir fonksiyon bir objeye yöntem 2 veya 3 olarak atanacaksa this kelimesi atacanak olan objeye referans verir.
// bu sayede objeye uygun method yazılmış olunur
o1.sayMyName = f1; // f1 içindeki this kelimesi o1'e referans verir
o1.sayMyName();

o1.sayMyAge = function () {
    console.log(this.age); // this kelimesi o1'e referans verir
}
o1.sayMyAge();

// Örn; farklı iki objeye atanan ortak method
o1 = {
    name: "Ömer Faruk Okumuş from o1"
}
o2 = {
    name: "Ömer Okumuş from o2"
}
o1.sayMyName = f1; // f1 içindeki this kelimesi burada o1' referans verir
o2.sayMyName = f1; // f1 içindeki this kelimesi burada o2' referans verir

o1.sayMyName();
o2.sayMyName();


// Arrow functions does not have "this"
// arrow function içinde this kullanırsan beklenmedik sonuçlar oluşabilir
// beklenmedik sonuçlar: eğer arrow functionu kapsayan normal function declaration varsa bu func. decl. this kelimesi arrow funct. içinde
//      kullanılabilir. Yani arrow function içinde kullanılan this kelimesi varsa kapsayan fonksiyonun this kelimesi olur.
//      Yoksa sonuç undefined olur.

o1 = {
    name: "Ömer Faruk Okumuş",
    sayMyName: () => {
        console.log("Name: " + this.name ); // this kelimesi o1'e referans vermez. sonuç undefined olur
    }
}
o1.sayMyName();

o1 = {
    name: "Ömer Faruk Okumuş",
    sayMyName: function () {
        const arrow = () => console.log("Name: " + this.name ); // this kelimesi function kelimesi ile oluşturulan fonksiyona aittir
        arrow();
    }
}
o1.sayMyName();

// Lookup: function declaration vs arrow function, which function type to use in javascript?



