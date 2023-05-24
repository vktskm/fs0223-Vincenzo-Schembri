abstract class PagamentiTasse {
    tasseInps: number;
    tasseIrpef: number;
    constructor(tasseInps: number, tasseIrpef: number) {
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    
}

class Lavoratore extends PagamentiTasse {
    codiceReddito:number;
    redditoAnnuoLordo:number;
    constructor(tasseInps: number,tasseIrpef: number, codiceReddito:number, redditoAnnuoLordo:any) {
        super(tasseInps, tasseIrpef);
        this.codiceReddito = codiceReddito;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }

    
}

let fatturato = <HTMLInputElement>document.querySelector('#fatturato');
let tipo_lavoro = (<HTMLSelectElement>document.querySelector('#tipo_lavoro'));
//Elementi option
let option_lavoro_default = <HTMLOptionElement>document.querySelector('#option_lavoro_default');
let art = <HTMLOptionElement>document.querySelector('#art');
let mark = <HTMLOptionElement>document.querySelector('#mark');
let inf = <HTMLOptionElement>document.querySelector('#inf');
//Elementi button
let button_resetta_importo = <HTMLButtonElement>document.querySelector('#button_resetta_importo');
let button_calcola = <HTMLButtonElement>document.querySelector('#button_calcola');
//Elementi span
let tasse_inps = <HTMLSpanElement>document.querySelector('#tasse_inps');
let tasse_irpef = <HTMLSpanElement>document.querySelector('#tasse_irpef');
let totale_tasse = <HTMLSpanElement>document.querySelector('#totale_tasse');
let reddito_netto = <HTMLSpanElement>document.querySelector('#reddito_netto');

let Art = new Lavoratore(0.25,0.23,1,fatturato);
let Mark = new Lavoratore(0.25,0.23,2,fatturato);
let Inf = new Lavoratore(0.25,0.23,3,fatturato);

let tassaIrpef;
function variabileIrpef() {
    let result:number = (parseInt(fatturato.value) <= 15000)? tassaIrpef = 0.23 : (parseInt(fatturato.value) >= 15001) && 
                        (parseInt(fatturato.value) <= 28000)? tassaIrpef = 0.25 : (parseInt(fatturato.value) >= 28001) && 
                        (parseInt(fatturato.value) <= 50000)? tassaIrpef = 0.35 : tassaIrpef = 0.43;
    return tassaIrpef = result;
}
//let Negoziante = new Lavoratore(` 0.33,0.25,1,${this.fatturato}` );
//scaglioni irpef:
//1. fatturato <= 15.000 = 23%
//2. 15.001 <= fatturato <= 28.000 = 25%
//3. 28.001 <= fatturato <= 50.000 = 35%
//4. fatturato > 50.000 = 43%  

function resettaImporti() {
    fatturato.value = '';
    tasse_inps.innerHTML = '';
    tasse_irpef.innerHTML = '';
    totale_tasse.innerHTML = '';
    reddito_netto.innerHTML = '';
}
function calcoli() {
    let calcoloTasseInps:any = parseInt(fatturato.value)*(0.25);
    tasse_inps.innerHTML = calcoloTasseInps;

    let calcoloTasseIrpef:any = parseInt(fatturato.value) * variabileIrpef();
    tasse_irpef.innerHTML = calcoloTasseIrpef;

    //let calcoloTasseTotali:any = parseInt(fatturato.value)*(0.48);
    let calcoloTasseTotali:any = parseInt(calcoloTasseInps) + parseInt(calcoloTasseIrpef);
    totale_tasse.innerHTML = calcoloTasseTotali;

    let totaleNetto:any = parseInt(fatturato.value) - parseInt(calcoloTasseTotali);
    reddito_netto.innerHTML = totaleNetto;
}

button_resetta_importo.addEventListener('click', () => {
    resettaImporti();
})

button_calcola.addEventListener('click', () => {
    calcoli();
});




