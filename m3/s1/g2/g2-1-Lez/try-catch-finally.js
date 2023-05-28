"use strict";
function dividi(a, b) {
    try {
        if (b === 0) {
            throw new Error('Non puoi dividere per zero');
        }
        return a / b; //infinity 
    }
    catch (err) {
        console.error(err); //errore: 'Non puoi dividere per zero'
        return 0;
    }
    finally {
        console.log('divisione effettuata');
    }
}
console.log(dividi(2, 2));
console.log(dividi(2, 0));
//# sourceMappingURL=try-catch-finally.js.map