/* import { myModule } from '../../../myModules/myModules';
console.log("🚀 ~ file: script.ts:2 ~ myModule:", myModule)

let body = Q('body');
console.log("🚀 ~ file: script.ts:4 ~ body:", body) */


abstract class CapoAbbigliamento {
    capo: string;
    codprod: number;
    collezione: string;
    colore: string;
    disponibile: string;
    id: number;
    modello: number;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    quantita: number;
    saldo: number;
    constructor(capo: string, codprod: number, collezione: string, colore: string, disponibile: string, id: number, modello: number, prezzoivaesclusa: number, prezzoivainclusa: number, quantita: number, saldo: number){
        this.capo = capo;
        this.codprod =  codprod;
        this.collezione = collezione;
        this.colore = colore;
        this.disponibile = disponibile;
        this.id = id;
        this.modello = modello;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.quantita = quantita;
        this.saldo= saldo;
    }
    abstract get mostraPrezzo():string;
}


class NewCapo extends CapoAbbigliamento {
  protected prezzoScontato: string;
  constructor(capo: string, codprod: number, collezione: string, colore: string, disponibile: string, id: number, modello: number, prezzoivaesclusa: number, prezzoivainclusa: number, quantita: number, saldo: number){
      super(capo, codprod, collezione, colore, disponibile, id, modello, prezzoivaesclusa, prezzoivainclusa, quantita, saldo)
      this.prezzoScontato = this.mostraPrezzo
  }
  get mostraPrezzo():string {
      let prezzoScontato: number = (this.prezzoivainclusa / 100) * this.saldo;
      return `Il prezzo scontato del capo è ${(this.prezzoivainclusa - prezzoScontato).toFixed(2)}€`;
  }
}


fetch('./Abbigliamento.json')
.then((response: Response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Request Error");
  }
})
.catch((error: Error) => {
  console.error(error);
})
.then(data => {
  console.log("🚀 ~ file: script.ts:15 ~ data:", data)
  let capiAbbigliamento:NewCapo[] = [];

  data.forEach((capoSingolo: NewCapo) => {
        let newCapoSingolo = new NewCapo(
            capoSingolo.capo,
            capoSingolo.codprod,
            capoSingolo.collezione,
            capoSingolo.colore,
            capoSingolo.disponibile,
            capoSingolo.id,
            capoSingolo.modello,
            capoSingolo.prezzoivaesclusa,
            capoSingolo.prezzoivainclusa,
            capoSingolo.quantita,
            capoSingolo.saldo
        )
        capiAbbigliamento.push(newCapoSingolo);
    })
    console.log(capiAbbigliamento)
    
    const numeriPari:number[] = [0, 2, 4]
    numeriPari.forEach((num) => {
        console.log(capiAbbigliamento[num].mostraPrezzo)
    })
})



/* import { Q } from '../../../myModules/myModules';


let body:HTMLBodyElement = Q('body');
console.log("🚀 ~ file: script.ts:94 ~ body:", body)

 */