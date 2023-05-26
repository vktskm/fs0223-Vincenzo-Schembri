
class User{

    protected name: string;
    protected lastname:string;

    constructor(name:string, lastname:string){
        this.name = name;
        this.lastname = lastname;
    }

    get getName():string{
        return this.name;
    }

}

class Invoice{

    intestatario:User;
    numeroFattura:string;
    importo:number;

    constructor(intestatario:User, numeroFattura:string, importo:number){
        this.intestatario = intestatario;
        this.numeroFattura = numeroFattura;
        this.importo = importo;
    }

}

let utente = new User('Mario','Rossi');
let fattura = new Invoice(utente, '1/2023', 1000);

console.log(fattura);
console.log(fattura.intestatario.getName);
//fattura.intestatario.getName = 'Mirko'; getName è un metodo getter(get) quindi non posso andare in assegnazione

