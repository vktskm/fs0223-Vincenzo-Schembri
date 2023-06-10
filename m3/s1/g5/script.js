var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Chiamata = /** @class */ (function () {
    function Chiamata(id, durata, dataOra) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
    return Chiamata;
}());
/*Aggiungi una proprietà registroChiamate che contenga un array di oggetti contenenti i seguenti dati:
id
durata
Data ed ora della chiamata

Aggiorna la classe in modo che il registro funzioni, e crea i seguenti metodi:
mostraRegistroChiamate() => mostra tutte le chiamate effettuate
filtraChiamatePerDataOra() => mostra solo le chiamate effettuate in una determinata data ed ora*/
var User = /** @class */ (function () {
    function User(nome, carica, numeroChiamate) {
        this.registroChiamate = [];
        this.nome = nome;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.getRegistroChiamate = function () {
        console.log(this.registroChiamate);
    };
    ;
    User.prototype.filtraChiamatePerDataOra = function (data, ora) {
        var chiamateFiltrate = [];
        this.registroChiamate.forEach(function (call) {
            if (data == call.dataOra.getDate() && ora == call.dataOra.getHours()) {
                chiamateFiltrate.push(call);
            }
        });
        if (chiamateFiltrate.length == 0) {
            console.log("Risultato della funzione filtro è nullo");
        }
        else {
            console.log("La funzione filtro ha trovato N chiamate: " + chiamateFiltrate.length);
            console.log(chiamateFiltrate);
        }
    };
    User.prototype.ricarica = function (unaRicarica) {
        //ricarica il telefono, l'importo della ricarica è passato tramite parametro
        this.carica = this.carica + unaRicarica;
        console.log("La ricarica è ", unaRicarica);
        console.log("Il saldo  \u00E8 ".concat(this.carica, "  \u20AC "));
    };
    User.prototype.chiamata = function (minutiDurata) {
        var costoMinuto = 0.2;
        //effettua la chiamata e la durata è passata tramite parametro
        var costoChiamata = parseFloat((minutiDurata * costoMinuto).toFixed(2));
        this.numeroChiamate = this.numeroChiamate + 1;
        this.carica = parseFloat((this.carica - costoChiamata).toFixed(2));
        var now = new Date();
        this.registroChiamate.push(new Chiamata(this.numeroChiamate, minutiDurata, now));
        console.log("Effettuo chiamata di minuti  ", minutiDurata);
        console.log("Il saldo \u00E8 ".concat(this.carica, " \u20AC "));
    };
    User.prototype.numero404 = function () {
        //restituisce valore carica disponibile
        return "Il credito disponibile" + this.carica + " €";
    };
    User.prototype.getNumeroChiamate = function () {
        //restituisce il valore della variabile d'istanza "numeroChiamate"
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        //azzera il valore della variabile d'istanza "numeroChiamate"
        this.numeroChiamate = 0;
    };
    return User;
}());
var FirstUser = /** @class */ (function (_super) {
    __extends(FirstUser, _super);
    function FirstUser(nome, carica, numeroChiamate) {
        return _super.call(this, nome, carica, numeroChiamate) || this;
    }
    return FirstUser;
}(User));
console.log("---Andrea ---");
var andrea = new FirstUser('Andrea', 0, 0);
andrea.ricarica(100); //ricarica 100
andrea.chiamata(4); //chiama 4 minuti
andrea.chiamata(2); //chiama 2 munuti
andrea.chiamata(1); //chiama 1 minuto
console.log("---Andrea numero chiamata ---", andrea.getNumeroChiamate());
//Credito Residuo
console.log("Credito 404 ", andrea.numero404());
console.log("---Andrea numero chiamata ---", andrea.getNumeroChiamate());
andrea.getNumeroChiamate();
//Filtra le chiamate perchè sono effettivamente le ore 14 del giorno 26 ed abbiamo 3 chiamate effettuate
//Ma se effettui il filtraggio successivamente non filtra niente o devi aggiornare il giorno e l'ora
andrea.filtraChiamatePerDataOra(26, 14);
console.log("Azzerra chiamata");
andrea.azzeraChiamate();
console.log(andrea);
///Ho fatto tutti i test con Andrea ne faccio solo alcuni con enzo e giuseppe
console.log("\n---Vincenzo ---");
var enzo = new FirstUser('Enzo', 0, 0);
enzo.ricarica(20);
enzo.chiamata(24);
enzo.chiamata(4);
enzo.getNumeroChiamate();
console.log(enzo);
console.log("\n---Giuseppe ---");
var giuseppe = new FirstUser('Giuseppe', 0, 0);
giuseppe.ricarica(7);
giuseppe.chiamata(4);
giuseppe.getNumeroChiamate();
console.log(giuseppe);
//Parte Html
var arrayUtenti = [andrea, enzo, giuseppe];
for (var i = 0; i < arrayUtenti.length; i++) {
    var contenuto = document.querySelector('.row');
    contenuto.innerHTML += "\n        <div class=\"col-4\">\n            <div class=\"card\" style=\"width: 20rem;\">\n              <div class=\"card-body\">\n                <h2 class=\"card-title text-center\">".concat(arrayUtenti[i].nome, "</h2>\n                <div class=\"screen\">\n                <p id=\"").concat(arrayUtenti[i].nome, "-carica-soldi\">Il saldo di ").concat(arrayUtenti[i].nome, " \u00E8 di ").concat(arrayUtenti[i].carica, " \u20AC</p>\n                <p id=\"").concat(arrayUtenti[i].nome, "-chiamate-fatte\">Il numero di chiamate effettuate da ").concat(arrayUtenti[i].nome, " \u00E8 di ").concat(arrayUtenti[i].numeroChiamate, "</p>\n                </div>\n                <div class=\"d-flex flex-column align-items-center \">\n                    <div class=\"mb-3 w-100 row justify-content-center\">\n                        <input type=\"text\" placeholder=\"Quanto ricarichi?\" class=\"col-7 ricarica-valore\" id=\"").concat(arrayUtenti[i].nome, "-ricarica-valore\">\n                        <button class=\"col-5 ricarica-bottone\" id=\"").concat(arrayUtenti[i].nome, "-ricarica\">Effettua Ricarica</button>\n                    </div>\n                </div>\n              </div>\n            </div>  ");
}
var andreaCaricaSoldi = document.querySelector('#Andrea-carica-soldi');
var valoreRicaricaAndrea = document.querySelector('#Andrea-ricarica-valore');
var bottoneRicaricaAndrea = document.querySelector('#Andrea-ricarica');
var enzoCaricaSoldi = document.querySelector('#Enzo-carica-soldi');
var valoreRicaricaEnzo = document.querySelector('#Enzo-ricarica-valore');
var bottoneRicaricaEnzo = document.querySelector('#Enzo-ricarica');
var giuseppeCaricaSoldi = document.querySelector('#Giuseppe-carica-soldi');
var valoreRicaricaGiuseppe = document.querySelector('#Giuseppe-ricarica-valore');
var bottoneRicaricaGiuseppe = document.querySelector('#Giuseppe-ricarica');
//con eval ho forzato so che non si dovrebbe usare 
bottoneRicaricaAndrea.addEventListener('click', function () {
    andreaCaricaSoldi.textContent = "Il saldo di Andrea \u00E8 di ".concat(andrea.carica + eval(valoreRicaricaAndrea.value), " \u20AC");
    valoreRicaricaAndrea.value = '';
});
bottoneRicaricaEnzo.addEventListener('click', function () {
    enzoCaricaSoldi.textContent = "Il saldo di Vincenzo \u00E8 di ".concat(enzo.carica + eval(valoreRicaricaEnzo.value), " \u20AC");
    valoreRicaricaEnzo.value = '';
});
bottoneRicaricaGiuseppe.addEventListener('click', function () {
    giuseppeCaricaSoldi.textContent = "Il saldo di Giuseppe \u00E8 di ".concat(giuseppe.carica + eval(valoreRicaricaGiuseppe.value), " \u20AC");
    valoreRicaricaGiuseppe.value = '';
});
