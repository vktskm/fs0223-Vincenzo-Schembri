/* Scrivere un programma che crei due classi SonAccount e MotherAccount per la gestione di due conto correnti,
che esegua le medesime operazioni di versamento e prelievo, con in aggiunta il calcolo dell'interesse del
conto corrente presente nella classe MotherAccount, stampando il saldo attuale di entrambi i conto correnti.
Dati
Proprietà:
balancelnit:number=0 // saldo attuale 0
Metodi:
oneDeposit:number // versamento
oneWithDraw // prelievo
twoDeposit:number // versamento twoWithDraw
// prelievo addinterest/
// interesse MotherAccount 10%*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserBanca = /** @class */ (function () {
    function UserBanca(_name, _lastname, _balanceInit) {
        this.name = _name;
        this.lastname = _lastname;
        this.balanceInit = _balanceInit;
    }
    UserBanca.prototype.oneDeposit = function (vers) {
        return this.balanceInit += vers;
    };
    UserBanca.prototype.oneWithDraw = function (prel) {
        return this.balanceInit -= prel;
    };
    return UserBanca;
}());
var SonAccount = new UserBanca('Vincenzo', 'Schembri', 10000);
var UserBancaMother = /** @class */ (function (_super) {
    __extends(UserBancaMother, _super);
    function UserBancaMother(_name, _lastname, _balanceInit) {
        return _super.call(this, _name, _lastname, _balanceInit) || this;
    }
    UserBancaMother.prototype.addInterest = function (int) {
        var total = this.balanceInit * int;
        return this.balanceInit = this.balanceInit + total;
    };
    return UserBancaMother;
}(UserBanca));
var MotherAccount = new UserBancaMother('Angela', 'Iannello', 3000);
var dep1 = SonAccount.oneDeposit(100);
console.log("Effettuo il deposito, il saldo è", dep1);
var prel1 = SonAccount.oneWithDraw(80);
console.log("Effettuo il prelievo, il saldo è ", prel1);
console.log(SonAccount);
var dep2 = MotherAccount.oneDeposit(200);
console.log("Effettuo il deposito, il saldo è", dep2);
var prel2 = MotherAccount.oneWithDraw(150);
console.log("Effettuo il prelievo, il saldo è ", prel2);
var int2 = MotherAccount.addInterest(0.2);
console.log("Applico gli interessi, il saldo è ", int2);
console.log(MotherAccount);
// class PizzaSpeciale extends Pizza{
//     protected altezzaCornicione:number;
//     constructor(_gusto:string, _prezzo:number, _altezzaCornicione:number){
//         super('_gusto', _prezzo);
//         this.altezzaCornicione = _altezzaCornicione;
//     }
//     mostraFormati(){
//         console.log(this.formati)//errore poiché la prop formati è private ed appartiene alla superclasse
//     }
//     public informazioni(): string {
//         let datoSuperClasse = super.informazioni();
//         return `${datoSuperClasse}, Altezza Cornicione: ${this.altezzaCornicione} `;
//     }
// }
