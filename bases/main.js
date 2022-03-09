"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel Jackson',
        ironman: 'Tony Stark',
        hulk: 'Bruce Banner',
        spiderman: 'Peter Parker',
        captainAmerica: 'Steve Rogers',
        thor: 'Thor Odinson',
        blackWidow: 'Natasha Romanoff',
        doctorStrange: 'Stephen Strange',
        vision: 'Vision',
        blackPanther: 'T\'Challa',
        falcon: 'Sam Wilson',
        hawkeye: 'Clint Barton',
        daredevil: 'Scott Lang',
        quicksilver: 'Pietro Maximoff',
        silverSurfer: 'Norrin Radd',
        starLord: 'Peter Quill',
        wolverine: 'Logan',
    };
    const { nick, ironman, hulk } = avengers;
    console.log(nick, ironman, hulk.toUpperCase());
    const printAvenger = (_a) => {
        var { blackPanther, captainAmerica } = _a, rest = __rest(_a, ["blackPanther", "captainAmerica"]);
        console.log(blackPanther, captainAmerica);
        console.log('\n', rest);
    };
    printAvenger(avengers);
    const [capi, ironmanArr, , spidey] = ['Cap. América', 'Ironman', 'Hulk', 'Spiderman', 'Thor', 'Black Widow', 'Doctor Strange', 'Vision', 'Falcon', 'Hawkeye', 'Daredevil', 'Quicksilver', 'Silver Surfer', 'Star Lord', 'Wolverine'];
    // const ironmanArr = avengersArr[1];
    console.log(capi, ironmanArr, spidey);
})();
(() => {
    const nombre = 'Paco';
    const getName = () => {
        console.log(nombre);
        return nombre;
    };
    // function getPepe() {
    //   const nombre = 'Pepe';
    //   console.log('VIEJO PEPE')
    //   return nombre;
    // }
    // getPepe = () => {
    //   console.log('NUEVO PEPE')
    // }
    // getPepe()
})();
//# sourceMappingURL=main.js.map