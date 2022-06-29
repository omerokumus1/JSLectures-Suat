{ // A. Map Basics

// 1- creation of a map
    let m1 = new Map();

// 2- putting values into the map: key value değerleri herhangi tipte bir obje olabilir. <string, string>, <string, array> ...
    m1.set("istanbul", "200")
    m1.set("ankara", "100")
    m1.set("trabzon", "500")


// if an array is used instead of this map
    let a1 = [200, 100, 500];

// 3- value access
    console.log("İstanbul'un yıllık yağış miktarı: " + m1.get("istanbul"));


// 4- key check
    console.log("is istanbul included? " + m1.has("istanbul"));


// 5- deleting a row along with key and value
    m1.delete("trabzon");
    console.log(m1);


// 6- clear map
// m1.clear();


// 7- size of a map
    console.log(m1.size)


// 8- square brackets access: do not use it. use set, get etc.
    m1["xyz"] = "20";
    console.log(m1.has("xyz")); // although m1 has xyz key, has method returns false


// 9- chaining on map (building map)
    m1.set("a", "1")
        .set("b", "2")
        .set("c", "3")
    console.log(m1)
}

{ // B. Iteration over Map

    let m1 = new Map();
    m1.set("istanbul", "200")
        .set("ankara", "100")
        .set("trabzon", "500")
        .set("ığdır", "200")
        .set("rize", "700");

    // anahtarlara göre (key)
    for (const key of m1.keys()) {
        console.log(key + ": " + m1.get(key));
    }

    // değerlere göre (value)
    for (const val of m1.values()) {
        if (val > "300")
            console.log(val);
    }

    // satır satır
    for (const row of m1) { // m1 yerine m1.entries() kullanılabilir
        console.log(row);
    }

    // foreach
    m1.forEach((val, key, map) => {
        console.log(key + ": " + val)
    })

    // m1.forEach( (val, key, map) => {
    //     console.log(map)
    // })

}

{ // C. Map from objects

    // 1- Map from Array
    // arrayler 2 boyutlu olmalı ve her bir arrayde 2 tane değer olmalı. 2 den fazlaysa ilk 2'sini alır,
    // eksikse olmayanlar undefined olur
    // [ [a, b], [c, d], .. ]

    let m1 = new Map([
        [1, 2],
        [3, 4],
        [5, 6]
    ]);
    console.log(m1);

    let a1 = [
        [1, 2],
        [], // eleman eksikse undefined
        [5, 6, 3] // 3 dahil edilmez
    ];
    let m2 = new Map(a1);
    console.log(m2);

    // 2- Map from Object
    function person(name, age) {
        return {
            name, age
        };
    }

    let p1 = person("ömer", 25);
    let p2 = person("faruk", 24);

    // Object.entries: herbir property ve value için array döndürür. Bütün property-value arrayler başka bir array içinde bulunur
    // Örn; [ [name, 'ömer'], [age, 25] ]
    console.log(Object.entries(p1));

    m1 = new Map(Object.entries(p1));
    console.log(m1);

}

{ // D. Object from Map
    // Object.fromEntries: 2 boyutlu 2 şer elemana sahip diziler bulunduran diziyi input olarak alır.
    let a1 = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];
    let o1 = Object.fromEntries(a1);
    console.log(o1);

    let m1 = new Map();
    m1.set("istanbul", "200")
        .set("ankara", "100")
        .set("trabzon", "500")
        .set("igdir", "200")
        .set("rize", "700");

    // m1.entries: satırları eleman olarak tutan 2 boyutlu dizi döndürür
    console.log(m1.entries());

    o1 = Object.fromEntries(m1.entries()); // m1 yazsak da olur
    console.log(o1);
}

{ // A. Set Basics
    // sadece value vardır, key yoktur
    // her bir value 1 kere eklenebilir

    // 1- set construction
    let s1 = new Set();
    s1.add("istanbul")
        .add("trabzon")
        .add("trabzon") // duplication otomatik olarak göz ardı edilir
        .add("rize");
    console.log(s1);

    // 2- has()
    console.log(s1.has("trabzon"));
    console.log(s1.has("kayseri"));

    // 3- set.clear()
    // 4- set.delete
    s1.delete("rize");
    console.log(s1);

    // 5- set.size

    // Ex; duplicated kullanıcı engellemek
    let s2 = new Set()
    s2.add("Ömer")
        .add("Faruk")
        .add("Suat")
        .add("Ahmet");

    let setSize = s2.size;
    s2.add("Ömers");
    if (setSize === s2.size)
        console.log("Hakkınızı zaten kullandınız.")
    else
        console.log("Tebrikler! AirPods kazandınız.")

    // 6- Set from Array
    let a1 = [1, 2, 3, 4, 4, 5, 6, 6, 7];
    s2 = new Set(a1);
    console.log(s2);

    // 7- Iteration over Set
    s2 = new Set([1, 2, 3, 4, 5, 6, 7])
    for (const val of s2) {
        console.log(val);
    }

    s2.forEach((val, val2, set) => {
        console.log(val2);
    })

    // keys, values, entries
    console.log(s2.keys());
    console.log(s2.values());
    console.log(s2.entries());

}