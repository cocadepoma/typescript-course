"use strict";
(() => {
    let myCustomVariable = 'Paco';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Paco',
        age: 24,
        powers: ['Speed', 'Intelligence'],
        getName(name) {
            return name;
        }
    };
})();
