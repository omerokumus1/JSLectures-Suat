// Object.keys(obj), Object.values(obj) ve Object.entries(obj) generic methodlardır. Custom objelerde implement edilebilir. (toString gibi)
// obj.keys, obj.values, obj.entries yapıları (yukardakilerden farklı) map, set ve array'ler için tanımlıdır.

// obj.keys örneği
let arr = [11, 22, 33];
console.log(arr.keys());

// Object.keys(obj) örneği
let o1 = {
    name: "Ömer",
    age: 22,
    sayHi: function () {
        console.log("Hi, my name is " + this.name);
    }
};
console.log(Object.keys(o1));
console.log(Object.values(o1));
console.log(Object.entries(o1));

for (const key of Object.keys(o1)) {
    console.log("key: " + key + ", value: " + o1[key]);
}

// bir üstteki for ile aynı
for (const key in o1) {
    console.log(key);
}

// map from an object
let m1 = new Map(Object.entries(o1));
console.log(m1);


//