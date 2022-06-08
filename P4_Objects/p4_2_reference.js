// reference copy
let o1 = {name: "Ömer"};

let o2 = o1; // aynı objeyi temsil ediyorlar -> reference copy

o2.name = "Faruk";

console.log(o1.name);

// object comparison

o1 = {name: "Ömer"};
o2 = {name: "Ömer"};
o3 = o1;

// 1. aynı obje olup olmadıklarını kontrol etmek
console.log("o1 is the same object with o2? = " + (o1 === o2))
console.log("o1 is the same object with o3? = " + (o1 === o3))

// 2. aynı içeriğe sahip olup olmadıklarını kontrol etmek
let haveSameContent = true;
for (const key in o1) { // eksik bir kod. anahtarların değerlerinin array veya obje olduğu durumları kapsamaz
    if (key in o2) {
        if (o1[key] !== o2[key]) {
            haveSameContent = false;
            break;
        }
    } else {
        haveSameContent = false;
        break;
    }
}
if (haveSameContent) {
    console.log("objects have the same content");
} else {
    console.log("objects do not have the same content");
}


// Object cloning
// 1. yöntem
o1 = {
    name: "Ömer Faruk Okumuş",
    age: 25,
    school: "Marmara University",
    profession: "Software Developer",
}

o2 = {name: "faruk"};
for (const key in o1) {
    o2[key] = o1[key]; // key varsa değerini günceller, yoksa key ekleyip değer atar
}
console.log(o2)

// 2. yöntem
o1 = {
    name: "Ömer Faruk Okumuş",
    age: 25,
    school: "Marmara University",
    profession: "Software Developer",
}
o2 = {country: "Turkey"};

o3 = {x: "y"};
Object.assign(o3, o1, o2); // o3'e önce o1'in içeriğini sonra o2'nin içeriğini ekler
console.log(o3);

o3 = Object.assign({}, o1);
console.log(o3);


// clone yaparken dikkat edilmesi gereken önemli bir nokta: nested objelerde copy yaparken dikkat edilmelidir.
o1 = {
    name: "Ömer Faruk Okumuş",
    age: 25,
    school: {
        name: "Marmara University",
        department: "CSE"
    },
    profession: "Software Developer",
}
o2 = Object.assign({}, o1);
o1.school.department = "Computer Science and Engineering";
console.log("shallow copy");
console.log(o1.school.department);
console.log(o2.school.department);

// HW: nested objeler için object copy yapan (reference copy içermeyen) fonksiyon yaz
o1 = {
    name: "Ömer Faruk Okumuş",
    age: 25,
    school: {
        name: "Marmara University",
        department: {
            name: "Computer Science & Engineering",
            numberOfStudent: 300,
            professors: [
                {name: "Ömer", field: "Data Science"},
                {name: "Faruk", field: "Cyber Security"},
                {name: "Suat", field: "Algorihms"}
            ]
        }
    },
    profession: "Software Developer",
}

// deep clone
o1 = {
    name: "Ömer Faruk Okumuş",
    age: 25,
    school: {
        name: "Marmara University",
        department: "CSE"
    },
    profession: "Software Developer",
}
const _ = require('lodash');
o2 = _.cloneDeep(o1);
o1.school.department = "Computer Science and Engineering";
console.log("\ndeep copy");
console.log(o1.school.department);
console.log(o2.school.department);


// bir objenin bütün anahtar değerleri primitive elemanlar ise OBject.assign, değilse _.cloneDeep kullan