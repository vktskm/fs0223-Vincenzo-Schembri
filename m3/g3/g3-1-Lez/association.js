"use strict";
class User {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    get getName() {
        return this.name;
    }
}
class Invoice {
    constructor(intestatario, numeroFattura, importo) {
        this.intestatario = intestatario;
        this.numeroFattura = numeroFattura;
        this.importo = importo;
    }
}
let utente = new User('Mario', 'Rossi');
let fattura = new Invoice(utente, '1/2023', 1000);
console.log(fattura);
console.log(fattura.intestatario.getName);
//fattura.intestatario.getName = 'Mirko'; getName è un metodo getter(get) quindi non posso andare in assegnazione
//# sourceMappingURL=association.js.map