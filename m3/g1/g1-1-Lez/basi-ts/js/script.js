"use strict";
let stringaSporca = ' testo   ';
console.log(stringaSporca); //' testo   '
console.log(stringaSporca.trim()); //'testo' 
console.log(stringaSporca.trim()); //'testo' 
console.log(Math.abs(-45));
let now = new Date();
let mese = now.getMonth() + 1;
console.log(`Siamo nel mese numero ${mese}`);
console.log('Hello World!');
let nome = 'Mario';
let anni = 30;
let boolean = false;
let array = [20, 'testo', true];
let arrayString = ['stringa'];
let arrayNumber = [30, 15, 24];
nome = 'Marco';
let vuota;
vuota = 0;
/* tipizzazione oggetti */
let user = {
    nome: 'Mario'
};
console.log(user.nome);
//tipizzazione funzioni
let salutoVar = () => {
    console.log('Ciao!');
};
function saluto() {
    console.log('Ciao!');
}
saluto();
function restituisciSaluto() {
    return 'Ciao!';
}
//tipizzazione di parametri
function somma(a, b) {
    return a + b;
}
somma(0, 5);
