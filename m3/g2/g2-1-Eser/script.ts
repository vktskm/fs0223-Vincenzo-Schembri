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

class UserBanca{
        public name:string;
        public lastname:string;
        public balanceInit:number;

        constructor( _name:string, _lastname:string, _balanceInit:number) {
            this.name = _name;
            this.lastname = _lastname;
            this.balanceInit = _balanceInit;
        }

        oneDeposit( vers:number):number {
            return this.balanceInit += vers;
        }
        oneWithDraw( prel:number):number {  
            return this.balanceInit -= prel;
        }
}

const SonAccount = new UserBanca('Vincenzo', 'Schembri', 10000);

class UserBancaMother extends UserBanca {

    constructor(_name:string, _lastname:string, _balanceInit:number  ){
               super(_name, _lastname, _balanceInit);      
            }

    addInterest(int:number):number {
                let total:number = this.balanceInit * int;
                return this.balanceInit = this.balanceInit + total;
    }

}

const MotherAccount = new UserBancaMother('Angela', 'Iannello', 3000);  


let dep1:number = SonAccount.oneDeposit(100);
console.log("Effettuo il deposito, il saldo è" , dep1);
let prel1:number = SonAccount.oneWithDraw(80);
console.log("Effettuo il prelievo, il saldo è " , prel1);
console.log(SonAccount);

let dep2:number = MotherAccount.oneDeposit(200);
console.log("Effettuo il deposito, il saldo è" , dep2);
let prel2:number = MotherAccount.oneWithDraw(150);
console.log("Effettuo il prelievo, il saldo è " , prel2);
let int2:number = MotherAccount.addInterest( 0.2);
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