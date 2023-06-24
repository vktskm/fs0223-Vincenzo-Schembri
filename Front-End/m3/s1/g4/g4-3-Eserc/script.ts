class CapoAbbigliamento {
    id?: number;
    codprod?: number;
    collezione?: string;
    capo?: string;
    modello?: number;
    quantita?: number;
    colore?: string;
    prezzoIvaEsclusa?: number;
    prezzoIvaInclusa?: number;
    disponibile?: string;
    saldo?: number;

    constructor(obj: any) {

        this.id = obj.id;
        this.codprod = obj.codprod;
        this.collezione = obj.collezione;
        this.capo = obj.capo;
        this.modello = obj.modello;
        this.quantita = obj.quantita;
        this.colore = obj.colore;
        this.disponibile = obj.disponibile;
        this.saldo = obj.saldo;

    }

    mostraPrezzo(): string {
        return this.saldo + '€';
    }

}

// fetch('Abbigliamento.json')
// .then((res:Response) => res.json())
// .then((res:CapoAbbigliamento[]) =>{

//     let arr:CapoAbbigliamento[] = [];

//     res.forEach((c:CapoAbbigliamento) => {
//         arr.push(new CapoAbbigliamento(c));
//     });


//     console.log(arr, arr[0].mostraPrezzo());

// })

async function call() {

    let chiamata = await fetch('Abbigliamento.json');

    let dati:CapoAbbigliamento[] = await chiamata.json();
    let arr: CapoAbbigliamento[] = [];

    dati.forEach((c: CapoAbbigliamento) => {
        arr.push(new CapoAbbigliamento(c));
    });


    console.log(arr, arr[0].mostraPrezzo());

}