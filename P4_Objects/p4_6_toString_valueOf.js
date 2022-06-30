let o1 = {
    name: "Ömer",
    age: 22,
    sayHi: function () {
        console.log("Hi, my name is " + this.name);
    }
};

console.log("o1.toString: " + o1.toString()); // toString methodu tüm objeler için [object Object] basar
console.log(o1.valueOf()); // valueOf methodu tüm objeler için objenin kendisini döndürür.
console.log(o1);

o1 = {
    name: "Ömer",
    age: 22,
    sayHi: function () {
        console.log("Hi, my name is " + this.name);
    },
    toString: function () {
        return "Name: " + this.name + "\nAge: " + this.age;
    }
};

console.log(o1.toString()); // toString'i manuel olarak implement etmek gerekiyor. Objeleri konsolda takip etmek için kullanılır