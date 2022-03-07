"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    // let myFunction: (a: number, b: number) => number;
    // let myFunction: (a: string) => string;
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // myFunction = addNumber;
    // console.log(myFunction(1, 2));
    // myFunction = greet;
    // console.log(myFunction('Paco'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
