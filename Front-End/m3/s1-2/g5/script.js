var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.carica = 10; //metto un credito iniziale, potevo anche inserirlo come parametro
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
        //mi serve solo per lo smartphone che costruisco nell'html
        var btnVodafone = document.getElementById('btnVodafone');
        btnVodafone.addEventListener('click', function () {
            var myModal = document.querySelector('.modal-three');
            var modalTitle = document.querySelector('.modal-three .modal-header>h5');
            modalTitle.textContent = 'QUANTO VUOI RICARICARE?';
            var modalBody = document.querySelector('.modal-three .modal-body');
            modalBody.innerHTML = "\n        <form>\n          <label for=\"numero\">Inserisci l'importo:</label>\n          <input type=\"number\" id=\"inputRicarica\" required>\n          <button type=\"submit\">Salva</button>\n        </form>\n    \n      ";
            var carica = document.createElement('p');
            carica.classList.add('text-success', 'fw-bold');
            modalBody.appendChild(carica);
            var myform = document.querySelector('.modal-three .modal-body form');
            var inputDurata = document.querySelector('#inputRicarica');
            myform.addEventListener('submit', function (event) {
                event.preventDefault();
                var importo = parseInt(inputDurata.value);
                console.log('Ricarica effettuata:', importo);
                firstUser.ricarica(importo);
                console.log("🚀 ~ file: script.ts:125 ~ Smartphone ~ myform.addEventListener ~ firstUser:", firstUser);
                carica.innerText = "Credito Residuo Aggiornato: ".concat(firstUser.numero404);
                myform.reset();
            });
        });
    };
    Object.defineProperty(Smartphone.prototype, "numero404", {
        get: function () {
            return "Credito residuo: ".concat(this.carica.toFixed(2), "\u20AC");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Smartphone.prototype, "getNumeroChiamate", {
        get: function () {
            return this.numeroChiamate;
        },
        enumerable: false,
        configurable: true
    });
    Smartphone.prototype.chiamata = function (min) {
        var costoChiamata = min * this.costoMinuto;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            var nuovaChiamata = {
                id: this.numeroChiamate,
                durata: min,
                dataOra: new Date(),
            };
            this.registroChiamate.push(nuovaChiamata);
            console.log("Chiamata effettuata: durata ".concat(min, " minuti"));
            //mi serve solo per lo smartphone che costruisco nell'html
            localStorage.setItem("nuovaChiamata: ".concat(nuovaChiamata.id), "ID: ".concat(nuovaChiamata.id, " || Durata: ").concat(nuovaChiamata.durata, " minuti || Data e ora: ").concat(nuovaChiamata.dataOra));
            var btnCall = document.getElementById('btnCall');
            btnCall.addEventListener('click', function () {
                var myModal = document.querySelector('modal');
                var modalTitle = document.querySelector('.modal-header>h5');
                modalTitle.textContent = 'QUANTI MINUTI DURA LA CHIAMATA?';
                var modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = "\n          <form>\n            <label for=\"numero\">Inserisci un numero:</label>\n            <input type=\"number\" id=\"inputDurata\" required>\n            <button type=\"submit\">Salva</button>\n          </form>\n      \n        ";
                var myform = document.querySelector('.modal-body form');
                var inputDurata = document.querySelector('#inputDurata');
                myform.addEventListener('submit', function (event) {
                    event.preventDefault();
                    var durata = parseInt(inputDurata.value);
                    console.log('Durata salvata:', durata);
                    firstUser.chiamata(durata);
                    myform.reset();
                });
            });
        }
        else {
            console.log("Credito insufficiente: Impossibile Effettuare la Chiamata");
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("Eliminato lo storico chiamate");
        localStorage.clear();
    };
    Smartphone.prototype.mostraRegistroChiamate = function () {
        var _this = this;
        this.registroChiamate.forEach(function (chiamata) {
            console.log("ID: ".concat(chiamata.id, " || Durata: ").concat(chiamata.durata, " minuti || Data e ora: ").concat(chiamata.dataOra));
        });
        //mi serve solo per lo smartphone che costruisco nell'html
        var btnRegistry = document.getElementById('btnRegistry');
        btnRegistry.addEventListener('click', function () {
            var arrayChiamate = [];
            for (var chiave in localStorage) {
                if (localStorage.hasOwnProperty(chiave) && chiave.includes("nuovaChiamata:")) {
                    var valore = localStorage.getItem(chiave);
                    arrayChiamate.push(valore);
                }
            }
            var myModal2 = document.querySelector('.modal-two');
            var modalTitle = document.querySelector('.modal-two .modal-header>h5');
            modalTitle.textContent = "REGISTRO CHIAMATE (Numero chiamate: ".concat(firstUser.numeroChiamate, ")");
            var modalBody = document.querySelector('.modal-two .modal-body');
            console.log("🚀 ~ file: script.ts:184 ~ Smartphone ~ arrayChiamate.forEach ~ arrayChiamate:", arrayChiamate);
            arrayChiamate.forEach(function (chiamata) {
                if (modalBody.childElementCount <= arrayChiamate.length) {
                    var p = document.createElement('p');
                    p.textContent = "".concat(chiamata);
                    modalBody.appendChild(p);
                }
                else {
                }
            });
            var modalFooter = document.querySelector('.modal-footer');
            if (!modalFooter.querySelector('button')) {
                var btnAzzera = document.createElement('button');
                btnAzzera.classList.add('btn', 'btn-danger');
                btnAzzera.textContent = 'Cancella Registro Chiamate';
                modalFooter.append(btnAzzera);
                btnAzzera.addEventListener('click', function () {
                    _this.azzeraChiamate();
                    var myModal2 = document.querySelector('#myModal2');
                    var bootstrapModal = bootstrap.Modal.getInstance(myModal2);
                    modalBody.innerHTML = '';
                    bootstrapModal.hide();
                });
            }
        });
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function (ora, minuti) {
        var filtroDataOra = new Date();
        filtroDataOra.setHours(ora);
        filtroDataOra.setMinutes(minuti);
        var chiamateFiltrate = this.registroChiamate.filter(function (chiamata) {
            return (chiamata.dataOra.getHours() === filtroDataOra.getHours() &&
                chiamata.dataOra.getMinutes() === filtroDataOra.getMinutes());
        });
        chiamateFiltrate.forEach(function (chiamata) {
            console.log("RISULTATO FILTRO -> ID: ".concat(chiamata.id, " || Durata: ").concat(chiamata.durata, " minuti || Data e ora: ").concat(chiamata.dataOra));
        });
    };
    return Smartphone;
}());
// Test del funzionamento
var firstUser = new Smartphone();
var secondUser = new Smartphone();
var thirdUser = new Smartphone();
//controllo gli oggetti
console.log("firstUser", firstUser);
console.log("secondUser", secondUser);
console.log("thirdUser", thirdUser);
//gli ricarico il conto
firstUser.ricarica(30);
secondUser.ricarica(15);
thirdUser.ricarica(15);
//controllo che la ricarica sia andata a buon fine
firstUser.numero404;
secondUser.numero404;
thirdUser.numero404;
console.log("firstUser ->", firstUser.numero404);
console.log("secondUser ->", secondUser.numero404);
console.log("thirdUser ->", thirdUser.numero404);
//effettuo delle chiamate
firstUser.chiamata(15);
secondUser.chiamata(2);
thirdUser.chiamata(30);
thirdUser.chiamata(50);
thirdUser.chiamata(45);
thirdUser.chiamata(5); //qua farà il console.log dell'errore chiamata
//serve per l'html
localStorage.clear();
//controllo il credito dopo le chiamate
firstUser.numero404;
secondUser.numero404;
thirdUser.numero404;
console.log("firstUser ->", firstUser.numero404);
console.log("secondUser ->", secondUser.numero404);
console.log("thirdUser ->", thirdUser.numero404);
//controllo quante chiamate hanno fatto
firstUser.getNumeroChiamate;
secondUser.getNumeroChiamate;
thirdUser.getNumeroChiamate;
console.log("🚀 ~ file: script.ts:149 ~ firstUser.getNumeroChiamate:", firstUser.getNumeroChiamate);
console.log("🚀 ~ file: script.ts:151 ~ secondUser.getNumeroChiamate:", secondUser.getNumeroChiamate);
console.log("🚀 ~ file: script.ts:153 ~ thirdUser.getNumeroChiamate:", thirdUser.getNumeroChiamate);
//azzero il registro delle chiamate (è commentato per l'interafaccia html)
/* firstUser.azzeraChiamate();
secondUser.azzeraChiamate();
thirdUser.azzeraChiamate(); */
//controllo che sia azzerato il registro
firstUser.getNumeroChiamate;
secondUser.getNumeroChiamate;
thirdUser.getNumeroChiamate;
console.log("🚀 ~ file: script.ts:149 ~ firstUser.getNumeroChiamate:", firstUser.getNumeroChiamate);
console.log("🚀 ~ file: script.ts:151 ~ secondUser.getNumeroChiamate:", secondUser.getNumeroChiamate);
console.log("🚀 ~ file: script.ts:153 ~ thirdUser.getNumeroChiamate:", thirdUser.getNumeroChiamate);
//EXTRA
thirdUser.mostraRegistroChiamate();
thirdUser.filtraChiamatePerDataOra(14, 28);
