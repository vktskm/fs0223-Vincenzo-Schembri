"use strict";
console.error('===========================================');
function numero(n) {
    return n;
}
console.log(numero(0));
let obj = {
    prop1: "",
    prop2: false
};
let obj2 = {
    prop1: 0,
    prop2: false
};
//generics su classi
class Prova {
}
let prova = new Prova();
//array e generics
let pizze = ['Margherita', 'Diavola', 'Capricciosa'];
let numeri = [4, 6, 7];
function filtra(arr, str) {
    return arr.filter((el) => el == str);
}
console.log(filtra(pizze, 'Capricciosa'));
console.log(filtra(numeri, 6));
//# sourceMappingURL=generics.js.map