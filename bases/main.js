"use strict";
// Crear interfaces
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
;
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
;
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona {
    constructor(nombre, sexo, estadoCivil, edad) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
        this.edad = edad;
    }
    imprimirBio() {
        console.log(`${this.nombre} es una persona`);
    }
}
const person = new Persona('Juan', 'Masculino', 'Soltero', 25);
person.imprimirBio();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        muntantPower(id) {
            return `${this.name} has power ${id}`;
        }
    }
    const wolverine = new Mutant('Wolverine', 'Logan', 35);
    console.log(wolverine.muntantPower(500), wolverine);
})();
(() => {
    ;
    const client = {
        name: 'Fernando',
        age: 45,
        address: {
            id: 125,
            zip: 'KYD SUD',
            city: 'Ottawa',
        },
        getFullAddress: (id) => {
            return `${client.address.zip} ${client.address.city}`;
        }
    };
    console.log(client.getFullAddress('id'));
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => a + b;
})();
//# sourceMappingURL=main.js.map