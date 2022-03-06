"use strict";
(() => {
    function callBatman() {
        console.log('Batcall!');
        return;
    }
    ;
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
