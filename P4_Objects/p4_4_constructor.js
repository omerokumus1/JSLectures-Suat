/* Introduction
    let o1 = {..} şeklinde oluşturulan objelerin tipi object tipindedir.
    Bu bölümde ise ürettiğimiz objelerin tipini biz belirleyeceğiz. Yani artık ürettiğimiz objelerin tipi object değil de
    Bina, Hayvan, Telefon, Bilgisayar, gibi gibi tipler olacak


 */

/*  Constructor function
    - Özel bir fonksiyondur. Yaptığı iş obje üretmektir.
    - İlk harfi büyük yazılır ve CamelCase kullanılır. (Zorunlu değil)
    - new anahtar kelimesi ile kullanılır.

    - Constructorların ana amacı reusable object creation
    - Arrow function ile constructor function olmaz çünkü this kelimesi arrow functionlar için geçerli değildir.
 */

// constructor function örneği
function User(name, id, status) {
    // this = {}; // new ile çağırıldığında burası kendiliğinden yapılır
    this.name = name;
    this.id = id;
    this.status = status;
    // return this; // new ile çağırıldığında burası kendiliğinden yapılır
}
let o1 = new User("Ömer", "1", "1");

function person(name, age, school, profession) {
    return {
        "name": name,
        "age": age,
        "school": school,
        "profession": profession
    }
}
const omer = person("Ömer Okumuş", "25", "Marmara University", "Software Engineer")

console.log(o1)
console.log(typeof omer)

console.log(User("1", "1", "1")) // new ile çağırılmadığından return otomatik eklenmez bu sebeple void return olur.

// herhangi fonksiyon new ile çağırılabilir ama fonksiyon constructor olarak inşa etmediysen anlamsız olur
console.log(new person(1,1,1,1)) // person fonk. kendi returnu olduğundan dolayı otomatik return this eklenmez.

// Bir fonksiyonu constructor olarak tasarlarsan new ile çağırmak mantıklı, fakat fonksiyonu bir iş yapması için tasarlarsan new ile çağırmak anlamsız

function f() {
    console.log("f funct");
}
let o2 = new f(); // f fonksiyonu constructor olarak tanımlanmadığı için anlamsız
console.log(o2)