"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('El nombre es requerido');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Flash', 'Gordon');
    console.log(name);
})();
