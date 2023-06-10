class Pizza{

    protected gusto:string;
    protected prezzo:number;
    private formati:string[] = ['Normale', 'Mini', 'Mezzo metro'];

    constructor(_gusto:string, _prezzo:number){
        this.gusto = _gusto;
        this.prezzo = _prezzo;        
    }

    public informazioni():string{
        return `Gusto:${this.gusto}, Prezzo: ${this.prezzo} €`;
    }

}

let margherita:Pizza = new Pizza('Margherita',5);

//console.log(margherita.prezzo); //errore


console.log(margherita.informazioni());


class PizzaSpeciale extends Pizza{

    protected altezzaCornicione:number;

    constructor(_gusto:string, _prezzo:number, _altezzaCornicione:number){
        super(_gusto, _prezzo);
        this.altezzaCornicione = _altezzaCornicione;
    }

    mostraFormati(){
        //console.log(this.formati)//errore poiché la prop formati è private ed appartiene alla superclasse
    }

    public informazioni(): string {
        let datoSuperClasse = super.informazioni();
        return `${datoSuperClasse}, Altezza Cornicione: ${this.altezzaCornicione} `;
    }

}

let diavola = new PizzaSpeciale('Diavola',1,5);

console.log(diavola);
console.log(diavola.informazioni());

diavola.mostraFormati();
