interface Smartphone {
    carica: number;
    numeroChiamate: number;
    registroChiamate: Chiamata[];

    getRegistroChiamate(): void;
    filtraChiamatePerDataOra(data:number, ora:number):void;
    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): string;
    getNumeroChiamate():number;
    azzeraChiamate(): void;
    
}

class Chiamata {
    id: number;
    durata: number;
    dataOra: Date;
    constructor( id:number, durata:number , dataOra : Date){
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
}


/*Aggiungi una proprietà registroChiamate che contenga un array di oggetti contenenti i seguenti dati:
id
durata
Data ed ora della chiamata

Aggiorna la classe in modo che il registro funzioni, e crea i seguenti metodi:
mostraRegistroChiamate() => mostra tutte le chiamate effettuate
filtraChiamatePerDataOra() => mostra solo le chiamate effettuate in una determinata data ed ora*/

class User implements Smartphone {
    public nome: string;
    public carica: number;
    public numeroChiamate: number;
    public registroChiamate: Chiamata[] = [];
    constructor(nome: string, carica: number, numeroChiamate: number) {
        this.nome = nome;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    
    getRegistroChiamate(): void{
        console.log(this.registroChiamate);
    };

    filtraChiamatePerDataOra(data:number, ora:number): void {
        let chiamateFiltrate:Chiamata[] = []
        this.registroChiamate.forEach((call:Chiamata) => {
            if (data == call.dataOra.getDate() && ora == call.dataOra.getHours()){
                chiamateFiltrate.push(call);
            }
        })
        if(chiamateFiltrate.length == 0){
            console.log("Risultato della funzione filtro è nullo")
        }else{
            console.log("La funzione filtro ha trovato N chiamate: " + chiamateFiltrate.length)
            console.log(chiamateFiltrate)
        }
    }

    public ricarica(unaRicarica: number): void {                                   
        //ricarica il telefono, l'importo della ricarica è passato tramite parametro
        this.carica = this.carica + unaRicarica;
        console.log("La ricarica è " , unaRicarica);
        console.log(`Il saldo  è ${this.carica}  € `);
    }
    public chiamata(minutiDurata: number): void {
        let costoMinuto: number = 0.2;                                              
        //effettua la chiamata e la durata è passata tramite parametro
        let costoChiamata: number = parseFloat((minutiDurata * costoMinuto).toFixed(2));
        this.numeroChiamate = this.numeroChiamate + 1;
        this.carica = parseFloat((this.carica - costoChiamata).toFixed(2));
    
        let now:Date = new Date();
        this.registroChiamate.push(new Chiamata(this.numeroChiamate, minutiDurata, now))
        
        console.log("Effettuo chiamata di minuti  " , minutiDurata);
        console.log(`Il saldo è ${this.carica} € `);
    }
    public numero404(): string{                                                            
        //restituisce valore carica disponibile
         return "Il credito disponibile" + this.carica + " €"
    }
    public getNumeroChiamate():number {                                                    
        //restituisce il valore della variabile d'istanza "numeroChiamate"
        return  this.numeroChiamate;
    }
    public azzeraChiamate():void {                                                       
        //azzera il valore della variabile d'istanza "numeroChiamate"
        this.numeroChiamate = 0;
    }
}

class FirstUser extends User {
    constructor(nome: string, carica: number, numeroChiamate: number) {
        super(nome, carica, numeroChiamate);
    }
}

console.log("---Andrea ---")
let andrea = new FirstUser('Andrea', 0, 0);
andrea.ricarica(100);//ricarica 100
andrea.chiamata(4);//chiama 4 minuti
andrea.chiamata(2);//chiama 2 munuti
andrea.chiamata(1);//chiama 1 minuto
console.log("---Andrea numero chiamata ---", andrea.getNumeroChiamate() );
//Credito Residuo
console.log( "Credito 404 ", andrea.numero404());

console.log("---Andrea numero chiamata ---", andrea.getNumeroChiamate() );
andrea.getNumeroChiamate();
//Filtra le chiamate perchè sono effettivamente le ore 14 del giorno 26 ed abbiamo 3 chiamate effettuate
//Ma se effettui il filtraggio successivamente non filtra niente o devi aggiornare il giorno e l'ora
andrea.filtraChiamatePerDataOra(26,14);
console.log("Azzerra chiamata")
andrea.azzeraChiamate();
console.log(andrea);


///Ho fatto tutti i test con Andrea ne faccio solo alcuni con enzo e giuseppe
console.log("\n---Vincenzo ---")
let enzo = new FirstUser('Enzo', 0, 0);
enzo.ricarica(20);
enzo.chiamata(24);
enzo.chiamata(4);
enzo.getNumeroChiamate();
console.log(enzo);

console.log("\n---Giuseppe ---")
let giuseppe = new FirstUser('Giuseppe', 0, 0);
giuseppe.ricarica(7);
giuseppe.chiamata(4);
giuseppe.getNumeroChiamate();
console.log(giuseppe);

//Parte Html
let arrayUtenti: any[] = [andrea, enzo, giuseppe];
for (let i = 0; i < arrayUtenti.length; i++) {
    let contenuto: HTMLDivElement = <HTMLDivElement>document.querySelector('.row');
    contenuto.innerHTML += `
        <div class="col-4">
            <div class="card" style="width: 20rem;">
              <div class="card-body">
                <h2 class="card-title text-center">${arrayUtenti[i].nome}</h2>
                <div class="screen">
                <p id="${arrayUtenti[i].nome}-carica-soldi">Il saldo di ${arrayUtenti[i].nome} è di ${arrayUtenti[i].carica} €</p>
                <p id="${arrayUtenti[i].nome}-chiamate-fatte">Il numero di chiamate effettuate da ${arrayUtenti[i].nome} è di ${arrayUtenti[i].numeroChiamate}</p>
                </div>
                <div class="d-flex flex-column align-items-center ">
                    <div class="mb-3 w-100 row justify-content-center">
                        <input type="text" placeholder="Quanto ricarichi?" class="col-7 ricarica-valore" id="${arrayUtenti[i].nome}-ricarica-valore">
                        <button class="col-5 ricarica-bottone" id="${arrayUtenti[i].nome}-ricarica">Effettua Ricarica</button>
                    </div>
                </div>
              </div>
            </div>  `
}

let andreaCaricaSoldi = <HTMLParagraphElement>document.querySelector('#Andrea-carica-soldi');
let valoreRicaricaAndrea = <HTMLInputElement>document.querySelector('#Andrea-ricarica-valore');
let bottoneRicaricaAndrea = <HTMLButtonElement>document.querySelector('#Andrea-ricarica');

let enzoCaricaSoldi = <HTMLParagraphElement>document.querySelector('#Enzo-carica-soldi');
let valoreRicaricaEnzo = <HTMLInputElement>document.querySelector('#Enzo-ricarica-valore');
let bottoneRicaricaEnzo = <HTMLButtonElement>document.querySelector('#Enzo-ricarica');

let giuseppeCaricaSoldi = <HTMLParagraphElement>document.querySelector('#Giuseppe-carica-soldi');
let valoreRicaricaGiuseppe = <HTMLInputElement>document.querySelector('#Giuseppe-ricarica-valore');
let bottoneRicaricaGiuseppe = <HTMLButtonElement>document.querySelector('#Giuseppe-ricarica');

//con eval ho forzato so che non si dovrebbe usare 
bottoneRicaricaAndrea.addEventListener('click', () => {
    andreaCaricaSoldi.textContent = `Il saldo di Andrea è di ${andrea.carica + eval(valoreRicaricaAndrea.value)} €`;
    valoreRicaricaAndrea.value = '';
});

bottoneRicaricaEnzo.addEventListener('click', () => {
    enzoCaricaSoldi.textContent = `Il saldo di Vincenzo è di ${enzo.carica + eval(valoreRicaricaEnzo.value)} €`;
    valoreRicaricaEnzo.value = '';
});

bottoneRicaricaGiuseppe.addEventListener('click', () => {
    giuseppeCaricaSoldi.textContent = `Il saldo di Giuseppe è di ${giuseppe.carica + eval(valoreRicaricaGiuseppe.value)} €`;
    valoreRicaricaGiuseppe.value = '';
});