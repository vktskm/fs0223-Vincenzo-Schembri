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
var PagamentiTasse = /** @class */ (function () {
    function PagamentiTasse(tasseInps, tasseIrpef) {
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    return PagamentiTasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(tasseInps, tasseIrpef, codiceReddito, redditoAnnuoLordo) {
        var _this = _super.call(this, tasseInps, tasseIrpef) || this;
        _this.codiceReddito = codiceReddito;
        _this.redditoAnnuoLordo = redditoAnnuoLordo;
        return _this;
    }
    Lavoratore.prototype.getTasseInps = function () {
        return this.tasseInps;
    };
    return Lavoratore;
}(PagamentiTasse));
var fatturato = document.querySelector('#fatturato');
var tipo_lavoro = document.querySelector('#tipo_lavoro');
//Elementi option
var option_lavoro_default = document.querySelector('#option_lavoro_default');
var artigiano = document.querySelector('#artigiano');
var marketing = document.querySelector('#marketing');
var informatico = document.querySelector('#informatico');
//Elementi button
var button_resetta_importo = document.querySelector('#button_resetta_importo');
var button_calcola = document.querySelector('#button_calcola');
//Elementi span
var tasse_inps = document.querySelector('#tasse_inps');
var tasse_irpef = document.querySelector('#tasse_irpef');
var totale_tasse = document.querySelector('#totale_tasse');
var reddito_netto = document.querySelector('#reddito_netto');
var Artigiano = new Lavoratore(0.25, 0.23, 1, fatturato);
var Marketing = new Lavoratore(0.25, 0.23, 2, fatturato);
var Informatico = new Lavoratore(0.25, 0.23, 3, fatturato);
console.log(Artigiano.getTasseInps);
//console.log( Artigiano.getTasselrpef);
var tassaIrpef;
function variabileIrpef() {
    var result = (parseInt(fatturato.value) <= 15000) ? tassaIrpef = 0.23 : (parseInt(fatturato.value) >= 15001) &&
        (parseInt(fatturato.value) <= 28000) ? tassaIrpef = 0.25 : (parseInt(fatturato.value) >= 28001) &&
        (parseInt(fatturato.value) <= 50000) ? tassaIrpef = 0.35 : tassaIrpef = 0.43;
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
    var calcoloTasseInps = parseInt(fatturato.value) * (0.25);
    tasse_inps.innerHTML = calcoloTasseInps;
    var calcoloTasseIrpef = parseInt(fatturato.value) * variabileIrpef();
    tasse_irpef.innerHTML = calcoloTasseIrpef;
    //let calcoloTasseTotali:any = parseInt(fatturato.value)*(0.48);
    var calcoloTasseTotali = parseInt(calcoloTasseInps) + parseInt(calcoloTasseIrpef);
    totale_tasse.innerHTML = calcoloTasseTotali;
    var totaleNetto = parseInt(fatturato.value) - parseInt(calcoloTasseTotali);
    reddito_netto.innerHTML = totaleNetto;
}
button_resetta_importo.addEventListener('click', function () {
    resettaImporti();
});
button_calcola.addEventListener('click', function () {
    calcoli();
});
