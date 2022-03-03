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