// Obje oluşturmak
let o1 = new Object();
let o2 = {};


let o3 = {
    name: "Ömer Faruk Okumuş",
    age: 25,
    school: "Marmara University",
    "profession": "Software Developer",
    "likes sport": true,
    likesSport: true,
    lectures: [1, 2, 3, 4]
}


// property access
console.log("name: " + o3.name) // dot access
console.log("likes sport: " + o3["likes sport"]) // square brackets access


// dynamic property access of square brackets access
console.log("random property: " + o3[getRandomProperty()])

// square brackets yerine dot access kullansaydık;
const prop = getRandomProperty();
if (prop === "name")
    console.log(o3.name);
else if (prop === "age")
    console.log(o3.age);

for (const lecture of o3.lectures) { // foreach in java

}

// olmayan bir property'e erişmeye çalışırsak undefined döner
let p = o1.prop;
console.log(p);
/*
    square brackets access vs. dot access: Eğer key değeri kullanıcıya bağlıysa veya bir fonksiyon tarafından hesaplanacaksa (olasılık varsa)
        square brackets, eğer böyle bir durum yoksa yani statikse dot access kullanabilirsin.
 */


// property change
o3.name = "Ömer Okumuş"
console.log("name: " + o3.name)


// property delete
console.log(o3)
delete o3.profession
console.log(o3)

function getRandomProperty() {
    const arr = ["name", "age", "school", "profession"];
    return arr[Math.floor(Math.random() * 4)];
}


// Computed properties
let fruit = "apple";
let bag = {
    [fruit]: 5
}
console.log(bag.apple)

let xAxis = "Year";
let yAxis = "House Prices";
let title = "Year vs House Price";
let plot = {
    "title": title,
    [xAxis]: [2000, 2001, 2002, 2003],
    [yAxis]: ["10k", "11k", "12k", "13k"]
}
console.log(plot.title)
console.log(plot.Year)
console.log(plot[yAxis])

// constructor benzeri fonksiyon yazmak
// yukarıda yaptığımız objeler bir kez daha üretilmek istenirse copy-paste yapmak zorundayız. Fakat bu yöntemle
// copy paste yapmadan aynı yapıda obje üretebiliriz
// aşağıdaki fonksiyon değişken değerleri parametre olarak alır ve gerekli objeyi üretir
// üretilen objenin tipi Object olur.
function person(name, age, school, profession) {
    return {
        "name": name,
        "age": age,
        "school": school,
        "profession": profession
    }
}


const omer = person("Ömer Okumuş", "25", "Marmara University", "Software Engineer")
const suat = person("Suat Öztürk", "25", "Kennesaw", "Software Development Engineer in Test")

console.log(omer)
console.log(suat)

// kolay yöntem
function person2(name, age, school, profession) {
    return {
        name,
        age,
        school,
        profession
    }
}

const omer2 = person2("Ömer Okumuş", "25", "Marmara University", "Software Engineer")
const suat2 = person2("Suat Öztürk", "25", "Kennesaw", "Software Development Engineer in Test")

console.log(omer2)
console.log(typeof omer2)
console.log(suat2)

// property availability check
console.log("omer contains 'name': " + ("name" in omer))
console.log("omer contains 'surname': " + ("surname" in omer))
// gelen requestte belirli alanların olmasını istiyorsan bu şekilde kontrol yaparsın.
// Eğer yoksa bad request döndürürsün varsa işlemi yaparsın


// for..in loop: her döngü iterasyonunda anahtarı verir. Bu anahtar sayesinde objelere square brackets access ile erişim yapılabilir
for (const key in omer2) {
    console.log(omer2[key])
}

// for-in vs for-of: for-in döngüsü anahtarları verirken for-of döngüsü direkt değerleri verir.
for (const val of [10, 20, 30, 40, 50]) {
    console.log(val)
}
for (const key in [10, 20, 30, 40, 50]) {
    console.log(key)
}



