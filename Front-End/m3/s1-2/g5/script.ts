

interface ISmartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;

  ricarica(euro: number): void;
  get numero404(): string;
  get getNumeroChiamate(): number;
  chiamata(min: number): void;
  azzeraChiamate(): void;

  mostraRegistroChiamate(): void;
  filtraChiamatePerDataOra(ora: number, minuti: number): void;
}

interface ICall {
  id: number;
  durata: number;
  dataOra: Date;
}

class Smartphone implements ISmartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;
  registroChiamate: ICall[];

  constructor() {
    this.carica = 10; //metto un credito iniziale, potevo anche inserirlo come parametro
    this.numeroChiamate = 0;
    this.costoMinuto = 0.20;
    this.registroChiamate = [];
  }

  ricarica(euro: number): void {
    this.carica += euro;

    //mi serve solo per lo smartphone che costruisco nell'html
    let btnVodafone = <HTMLButtonElement>document.getElementById('btnVodafone');
    btnVodafone.addEventListener('click', () =>{
      let myModal = <HTMLDivElement>document.querySelector('.modal-three');
      let modalTitle = <HTMLHRElement>document.querySelector('.modal-three .modal-header>h5');
      modalTitle.textContent = 'QUANTO VUOI RICARICARE?'
      let modalBody = <HTMLDivElement>document.querySelector('.modal-three .modal-body');
      modalBody.innerHTML= `
        <form>
          <label for="numero">Inserisci l'importo:</label>
          <input type="number" id="inputRicarica" required>
          <button type="submit">Salva</button>
        </form>
    
      `;
      let carica = <HTMLParagraphElement>document.createElement('p');
      carica.classList.add('text-success', 'fw-bold');
      modalBody.appendChild(carica);
      let myform = <HTMLFormElement>document.querySelector('.modal-three .modal-body form');
      let inputDurata = <HTMLInputElement>document.querySelector('#inputRicarica');
      myform.addEventListener('submit', function(event) {
        event.preventDefault();
        const importo = parseInt(inputDurata.value);
        console.log('Ricarica effettuata:', importo);
        firstUser.ricarica(importo);
        console.log("🚀 ~ file: script.ts:125 ~ Smartphone ~ myform.addEventListener ~ firstUser:", firstUser)
        carica.innerText= `Credito Residuo Aggiornato: ${firstUser.numero404}`;
        myform.reset();
      });
    })


  }

  get numero404(): string {
    return `Credito residuo: ${this.carica.toFixed(2)}€`;
  }

  get getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  chiamata(min: number): void {
    const costoChiamata = min * this.costoMinuto;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
      const nuovaChiamata: ICall = {
        id: this.numeroChiamate,
        durata: min,
        dataOra: new Date(),
      }
      this.registroChiamate.push(nuovaChiamata);
      console.log(`Chiamata effettuata: durata ${min} minuti`);
      //mi serve solo per lo smartphone che costruisco nell'html
      localStorage.setItem(`nuovaChiamata: ${nuovaChiamata.id}`, `ID: ${nuovaChiamata.id} || Durata: ${nuovaChiamata.durata} minuti || Data e ora: ${nuovaChiamata.dataOra}`)
      let btnCall = <HTMLButtonElement>document.getElementById('btnCall');
      btnCall.addEventListener('click', () =>{
        let myModal = <HTMLDivElement>document.querySelector('modal');
        let modalTitle = <HTMLHRElement>document.querySelector('.modal-header>h5');
        modalTitle.textContent = 'QUANTI MINUTI DURA LA CHIAMATA?'
      
        let modalBody = <HTMLDivElement>document.querySelector('.modal-body');
        modalBody.innerHTML= `
          <form>
            <label for="numero">Inserisci un numero:</label>
            <input type="number" id="inputDurata" required>
            <button type="submit">Salva</button>
          </form>
      
        `;
        let myform = <HTMLFormElement>document.querySelector('.modal-body form');
        let inputDurata = <HTMLInputElement>document.querySelector('#inputDurata');
        myform.addEventListener('submit', function(event) {
          event.preventDefault();
          const durata = parseInt(inputDurata.value);
          console.log('Durata salvata:', durata);
          firstUser.chiamata(durata)
          myform.reset();
        });
      })
    } else {
      console.log("Credito insufficiente: Impossibile Effettuare la Chiamata");
    }
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    console.log("Eliminato lo storico chiamate");
    localStorage.clear();
  }

  mostraRegistroChiamate(): void {
    this.registroChiamate.forEach((chiamata) => {
      console.log(`ID: ${chiamata.id} || Durata: ${chiamata.durata} minuti || Data e ora: ${chiamata.dataOra}`)
    })

    //mi serve solo per lo smartphone che costruisco nell'html
    let btnRegistry = <HTMLButtonElement>document.getElementById('btnRegistry');
    btnRegistry.addEventListener('click', () =>{
      let arrayChiamate: string[] = [];
      for (let chiave in localStorage) {
        if (localStorage.hasOwnProperty(chiave) && chiave.includes("nuovaChiamata:")) {
          let valore = <string>localStorage.getItem(chiave);
          arrayChiamate.push(valore);
        }
      }
      let myModal2 = <HTMLDivElement>document.querySelector('.modal-two');
      let modalTitle = <HTMLHRElement>document.querySelector('.modal-two .modal-header>h5');
      modalTitle.textContent = `REGISTRO CHIAMATE (Numero chiamate: ${firstUser.numeroChiamate})`;
      let modalBody = <HTMLDivElement>document.querySelector('.modal-two .modal-body');
      console.log("🚀 ~ file: script.ts:184 ~ Smartphone ~ arrayChiamate.forEach ~ arrayChiamate:", arrayChiamate)
      arrayChiamate.forEach((chiamata) => {
        if (modalBody.childElementCount <= arrayChiamate.length){
        let p = document.createElement('p');
        p.textContent = `${chiamata}`;
        modalBody.appendChild(p)
        } else {

        }
      })
      let modalFooter = <HTMLDivElement>document.querySelector('.modal-footer');
      if (!modalFooter.querySelector('button')) {
        let btnAzzera = document.createElement('button');
        btnAzzera.classList.add('btn', 'btn-danger');
        btnAzzera.textContent = 'Cancella Registro Chiamate';
        modalFooter.append(btnAzzera);
        btnAzzera.addEventListener('click', () =>{
          this.azzeraChiamate();
          let myModal2 = document.querySelector('#myModal2');
          let bootstrapModal = bootstrap.Modal.getInstance(myModal2);
          modalBody.innerHTML = '';
          bootstrapModal.hide();
        })
      }
    })
  }

  filtraChiamatePerDataOra(ora: number, minuti: number): void {
    const filtroDataOra = new Date();
    filtroDataOra.setHours(ora);
    filtroDataOra.setMinutes(minuti);
  
    const chiamateFiltrate = this.registroChiamate.filter(chiamata => {
      return (
        chiamata.dataOra.getHours() === filtroDataOra.getHours() &&
        chiamata.dataOra.getMinutes() === filtroDataOra.getMinutes()
      );
    });

    chiamateFiltrate.forEach(chiamata => {
      console.log(`RISULTATO FILTRO -> ID: ${chiamata.id} || Durata: ${chiamata.durata} minuti || Data e ora: ${chiamata.dataOra}`);
    });
  }
}

// Test del funzionamento
const firstUser: ISmartphone = new Smartphone();
const secondUser: ISmartphone = new Smartphone();
const thirdUser: ISmartphone = new Smartphone();
//controllo gli oggetti
console.log("firstUser", firstUser)
console.log("secondUser", secondUser)
console.log("thirdUser", thirdUser)

//gli ricarico il conto
firstUser.ricarica(30);
secondUser.ricarica(15);
thirdUser.ricarica(15);

//controllo che la ricarica sia andata a buon fine
firstUser.numero404;
secondUser.numero404;
thirdUser.numero404;
console.log("firstUser ->", firstUser.numero404)
console.log("secondUser ->", secondUser.numero404)
console.log("thirdUser ->", thirdUser.numero404)

//effettuo delle chiamate
firstUser.chiamata(15);
secondUser.chiamata(2);
thirdUser.chiamata(30);
thirdUser.chiamata(50);
thirdUser.chiamata(45);
thirdUser.chiamata(5);  //qua farà il console.log dell'errore chiamata
//serve per l'html
localStorage.clear();


//controllo il credito dopo le chiamate
firstUser.numero404;
secondUser.numero404;
thirdUser.numero404;
console.log("firstUser ->", firstUser.numero404)
console.log("secondUser ->", secondUser.numero404)
console.log("thirdUser ->", thirdUser.numero404)

//controllo quante chiamate hanno fatto
firstUser.getNumeroChiamate;
secondUser.getNumeroChiamate;
thirdUser.getNumeroChiamate;
console.log("🚀 ~ file: script.ts:149 ~ firstUser.getNumeroChiamate:", firstUser.getNumeroChiamate)
console.log("🚀 ~ file: script.ts:151 ~ secondUser.getNumeroChiamate:", secondUser.getNumeroChiamate)
console.log("🚀 ~ file: script.ts:153 ~ thirdUser.getNumeroChiamate:", thirdUser.getNumeroChiamate)

//azzero il registro delle chiamate (è commentato per l'interafaccia html)
/* firstUser.azzeraChiamate();
secondUser.azzeraChiamate();
thirdUser.azzeraChiamate(); */

//controllo che sia azzerato il registro
firstUser.getNumeroChiamate;
secondUser.getNumeroChiamate;
thirdUser.getNumeroChiamate;
console.log("🚀 ~ file: script.ts:149 ~ firstUser.getNumeroChiamate:", firstUser.getNumeroChiamate)
console.log("🚀 ~ file: script.ts:151 ~ secondUser.getNumeroChiamate:", secondUser.getNumeroChiamate)
console.log("🚀 ~ file: script.ts:153 ~ thirdUser.getNumeroChiamate:", thirdUser.getNumeroChiamate)

//EXTRA
thirdUser.mostraRegistroChiamate();
thirdUser.filtraChiamatePerDataOra(14,28);