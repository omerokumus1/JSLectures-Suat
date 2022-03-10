{

    function newPromise(f) {
        let resolve = (r) => console.log("resolved: " + r);
        let error = (e) => console.log("error: " + e)
        let r = f(resolve, error)
        if (r === null)
            error("null")
        else
            resolve(r)

    }

    let f1 = (r, e) => null;
    let f2 = (r, e) => "successfully";

    newPromise(f1)
    newPromise(f2)
}


{
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("success value"), 5000)
    });



    promise.then(
        () => console.log("success"),
        () => console.log("error")
    )


     promise = new Promise(function (resolve, reject) {
        setTimeout(() => reject("reject value"), 3000)
    });

    promise.then(
        // resolve ve reject fonk. içine verilen argumanlar error ve result olarak buraya gönderilir
        (result) => console.log(result),
        (error) => console.log(error)
    )

    promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(201), 1000)
    });

    promise.then(result => senkron(result)) // 2. dalda senkron yapı oluşturur

    function printMessage(result){
        if (result === 201)
            console.log("201 success")
        else if (result === 200)
            console.log("200 success")
        else
            console.log("printMessage: success")
    }

    function senkron(){
    //     f1();
    //     f2();
    //     f3();
    //     f4();
    }
    let x = {}
    // console.log(x.school.name)

    try {
        console.log(x.school.name)
    } catch (e) {
        console.log("hata")
    }

    let githubUser = {
        name: "Ömer",
        age: 25
    }

    console.log(githubUser.name)

}