{// Functor pattern

    const NumberBox = number => ({
        applyFunction: fn => NumberBox( fn(number) ),
        value: number,
    });

    console.log(NumberBox(5))
    console.log(NumberBox(5).value)
    console.log(NumberBox(5).applyFunction )
    console.log(NumberBox(5).applyFunction(v => v*2) )
    console.log(NumberBox(5).applyFunction(v => v*2).applyFunction(v => v+1).applyFunction(v => v/2) )
    console.log(NumberBox(5).applyFunction(v => v*2).applyFunction(v => v+1).applyFunction(v => v/2).value )
}

