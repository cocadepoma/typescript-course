"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    ;
    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo a salvo';
        }
    }
    ;
    class Villian extends Mutant {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
        ;
    }
    ;
    const wolverine = new Xmen('Logan', 'Wolverine');
    const magneto = new Villian('Magneto', 'Max Eisenhardt');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    const printName = (char) => {
        console.log(char.name);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAgeAvg() {
            return this.name;
        }
        ;
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    // private name: string;
    // public team: string;
    // public realName: string;
    Avenger.ageAvg = 40;
    ;
    // const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    // console.log(antman.bio());
    // console.log(Avenger.getAgeAvg());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('Constructor llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        ;
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            // console.log('Contructor de Xmen llamado');
        }
        getFullNameXmen() {
            const dad = super.getFullName();
            return `${this.name} ${this.realName} ${this.isMutant} ---- ${dad}`;
        }
        ;
        get fullName() {
            return `${this.name} ===> ${this.realName}`;
        }
        set fullName(value) {
            if (value.length < 3) {
                throw new Error('El nombre es muy corto');
            }
            this.name = value;
        }
        ;
    }
    ;
    const wolverine = new Xmen('Logan', 'Wolverine', true);
    // console.log(wolverine);
    // console.log(wolverine.getFullNameXmen());
    // console.log(wolverine.fullName);
    wolverine.fullName = 'Wolverine 2';
    // console.log(wolverine)
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocallipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el único Apocalipsis');
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis = new Apocalipsis('Soy el apocalipsis');
    const ap1 = Apocalipsis.callApocallipsis();
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map