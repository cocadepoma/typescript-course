"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return text.length > 3;
    };
    Validation.validateDate = (myDate) => {
        return myDate instanceof Date;
    };
})(Validation || (Validation = {}));
console.log(Validation.validateText('tes'));
//# sourceMappingURL=main.js.map