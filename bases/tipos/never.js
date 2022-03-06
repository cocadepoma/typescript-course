"use strict";
(() => {
    const error = (message) => {
        if (false) {
            return 0;
        }
        throw new Error(message);
    };
    error("This is never");
})();
