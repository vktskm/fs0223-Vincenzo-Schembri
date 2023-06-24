/* 
da 0 a 15.000 euro: aliquota del 23%
da 15.001 a 28.000 euro: aliquota del 25%
da 28.001 a 50.000 euro: aliquota del 35%
oltre 50.001 euro: aliquota del 43%
sui primi 15.000 euro (corrispondenti al primo scaglione di reddito) applicherò l’aliquota del 23%. Otterrò quindi 3.450 euro;
sui restanti 10.000 euro (25.000 euro – 15.000 euro) applicherò l’aliquota del 25%, cioè quella relativa al secondo scaglione. Otterrò 2.500 euro;
l’IRPEF lorda ammonterà a 5.950 euro (3.450 euro + 2.500 euro).
*/


abstract class LavoratoreTasseApplicate{
    redditoannuolordo: number;
    codredd: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(redditoannuolordo: number, codredd: number, tasseinps: number, tasseirpef: number) {
        this.redditoannuolordo = redditoannuolordo;
        this.codredd = this.getUtileTasse();
        this.tasseinps = this.getTasselnps();
        this.tasseirpef = this.getTasselrpef();
    }

    abstract getUtileTasse():number

    abstract getTasselnps():number

    abstract getTasselrpef():number

    abstract getRedditoAnnuoNetto():number

}

class Lavoratore extends LavoratoreTasseApplicate {
    redditoNetto: string;

    constructor(redditoannuolordo: number, codredd: number = 0, tasseinps: number = 0, tasseirpef: number = 0, redditoNetto: string = ''){
        super(redditoannuolordo, codredd, tasseinps, tasseirpef);
        this.redditoNetto = `Il reddito netto del lavoratore è ${this.getRedditoAnnuoNetto()}€`;
    }

    getUtileTasse(): number {
        const coefficienteRedditivita: number[] = [40, 54, 62, 67, 78, 86]
        const randomPick: number = Math.floor(Math.random() * coefficienteRedditivita.length);
        return (this.redditoannuolordo/100) * coefficienteRedditivita[randomPick];
    }

    getTasselnps(): number {
        const aliquotaINPS = 0.09;

        const tassazioneINPS = this.codredd * aliquotaINPS;

        console.log("🚀 ~ file: script.ts:54 ~ Lavoratore ~ getTasselnps ~ tassazioneINPS:", tassazioneINPS)
        return tassazioneINPS;
    }

    getTasselrpef(): number {
        const aliquoteIRPEF:number[] = [0.23, 0.25, 0.35];
        const soglieReddito:number[] = [15000, 28000, 50000];
      
        let tassazioneIRPEF:number = 0;
      
        for (let i = 0; i < aliquoteIRPEF.length; i++) {
          if (this.codredd <= soglieReddito[i]) {
            tassazioneIRPEF += this.codredd * aliquoteIRPEF[i];
            break;
          } else {
            const redditoTranche = soglieReddito[i + 1] - soglieReddito[i];
            tassazioneIRPEF += redditoTranche * aliquoteIRPEF[i];
          }
        }
        console.log("🚀 ~ file: script.ts:71 ~ Lavoratore ~ getTasselrpef ~ tassazioneIRPEF:", tassazioneIRPEF)
        return tassazioneIRPEF;
    }
    getRedditoAnnuoNetto(): number {
        let utile: number = this.redditoannuolordo - this.tasseinps - this.tasseirpef;
        console.log("🚀 ~ file: script.ts:73 ~ Lavoratore ~ getRedditoAnnuoNetto ~ utile:", utile)
        return utile;
    }
}

let marioRossi = new Lavoratore(10000)
console.log("🚀 ~ file: script.ts:78 ~ marioRossi:", marioRossi)



class Madre {
    nome: string;
    cognome: string;
    constructor(nome: string, cognome:string){
        this.nome = nome;
        this.cognome = cognome;
    }
}

class Figlio extends Madre {
    dentiDaLatte: string;
    constructor(nome: string, cognome:string, dentiDaLatte:string){
        super(nome, cognome);
        this.dentiDaLatte = dentiDaLatte;
    }
}

abstract class Veicolo{
    protected velocità: number;
    constructor(velocità:number){
        this.velocità = velocità;
    }
    abstract accelera():void;
    get frena():number{
       return this.velocità = 0;
    }
}

class Auto extends Veicolo {
    brand: string;
    constructor(brand: string, velocità:number){
        super(velocità);
        /* super.frena; */
        this.brand = brand;
    }
    set frena(diquanto:number) {
        this.velocità = diquanto;
    }
    accelera(): number {
        return this.velocità = 300;
    }
}

class Camion extends Auto {
    ruote: number;
    constructor(ruote: number, brand: string, velocità:number){
        super(brand, velocità);
        this.ruote = ruote;
    }
};

let audi = new Auto('audi', 100)
console.log("🚀 ~ file: script.ts:129 ~ audi:", audi)
console.log("🚀 ~ file: script.ts:129 ~ audi:", audi.frena = 50)
console.log("🚀 ~ file: script.ts:129 ~ audi:", audi)


interface Animale{
    razza: string;
    zampe: number;
    verso:() => void;
}

let cane: Animale = {
    razza: 'cane',
    zampe: 4,
    verso:() => {
        console.log('bau');
    }
}

class Gatto implements Animale{
    razza: string;
    zampe: number;
    constructor(razza: string, zampe: number){
        this.razza = razza;
        this.zampe = zampe;
    }
    verso():string {
        let prova1 = 'bau';
        return prova1;
    }
}

let gatto = new Gatto('si', 3);
console.log("🚀 ~ file: script.ts:173 ~ gatto:", gatto)
console.log("🚀 ~ file: script.ts:172 ~ gatto:", gatto.verso())
