{// load()
// onload() -> load()
//             onload() -> load()
//                          onload()


    // function loadScript(src, callback) {
    //     let script = document.createElement('script');
    //     script.src = src;
    //
    //     script.onload = () => callback(null, script);
    //     script.onerror = () => callback(new Error(`Script load error for ${src}`));
    //
    //     document.head.append(script);
    // }
    //
    // let callback = (obj, script) => {
    //     if (obj === null)
    //         f(script)
    //     else if (obj instanceof Error)
    //         console.log(obj)
    // }
    //
    // loadScript("www", callback)
}
