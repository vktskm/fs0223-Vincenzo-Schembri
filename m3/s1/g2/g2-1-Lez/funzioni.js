"use strict";
//funzioni assegnate ad una variabile
var _a;
const prova = function () {
    console.log('test');
};
//funzioni classiche
function funzioneProva() {
    return 'Stringa restituita';
}
funzioneProva();
//funzioni parametriche
function creaHTMLBold(testo) {
    document.write(`<b>${testo}</b>`);
}
function $(selettore) {
    return document.querySelector(selettore);
}
//il punto di domanda interrompe la lettura dell'oggetto qualora fosse null
(_a = $('#test')) === null || _a === void 0 ? void 0 : _a.style.color;
let test = $('#test');
if (test) {
    test.style.color;
}
//funzioni freccia
// function test1(){
//     return 'ciao';
// }
let test1 = () => 'ciao';
//la tipizzazione dei parametri obbliga ad usare le tonde anche quando abbiamo un solo parametro
let moltiplica = (a) => a * 2;
//funzione freccia void
let test2 = () => {
    console.log('prova void');
};
//parametri facoltativi
//b è facoltativo ed ha un valore di default
//c è facoltativo ma non ha un valore di default
function somma(a, b = 0, c) {
    if (!c)
        c = 0; //gestisco la mancanza di c per spegnere l'errore in
    return a + b + c;
}
//# sourceMappingURL=funzioni.js.map