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

