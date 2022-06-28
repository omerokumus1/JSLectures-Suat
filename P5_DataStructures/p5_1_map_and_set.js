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
    for (const row of m1) {
        console.log(row);
    }

    // foreach
    m1.forEach( (val, key, map) => {
        console.log(key + ": " + val)
    })

    // m1.forEach( (val, key, map) => {
    //     console.log(map)
    // })




}