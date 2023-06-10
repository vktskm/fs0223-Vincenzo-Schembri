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
// classe astratta LiberoProf
var LiberoProf = /** @class */ (function () {
    // il costruttore della classe referenzia le proprietà
    function LiberoProf(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
    return LiberoProf;
}());
// classe astratta Artigiano
var Artigiano = /** @class */ (function () {
    // il costruttore della classe referenzia le proprietà
    function Artigiano(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
    return Artigiano;
}());
// classe astratta Commerciante
var Commerciante = /** @class */ (function () {
    // il costruttore della classe referenzia le proprietà
    function Commerciante(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
    return Commerciante;
}());
// classe AnnuoNettoProf estende LiberoProf
var AnnuoNettoProf = /** @class */ (function (_super) {
    __extends(AnnuoNettoProf, _super);
    //passaggio dei parametri al costruttore
    function AnnuoNettoProf(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        // utilizzo del comando super passare come parametro le proprietà della superclasse
        return _super.call(this, ReddAnnuo, codRett, TasseIrpef, TasseInps) || this;
    }
    // implementazione metodo getUtileTasse
    AnnuoNettoProf.prototype.getUtileTasse = function () {
        return this.ReddAnnuo * this.codRett / 100;
    };
    // implementazione metodo getTasseInps   
    AnnuoNettoProf.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.TasseInps / 100;
    };
    // implementazione metodo getTasseIrpef 
    AnnuoNettoProf.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.TasseIrpef / 100;
    };
    // implementazione metodo getRedditoAnnuoNetto
    AnnuoNettoProf.prototype.getReddAnnuoNetto = function () {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return AnnuoNettoProf;
}(LiberoProf));
// set proprietà al costruttore
var reddprof = new AnnuoNettoProf(27500, 78, 5, 25.72);
// chiamo il metodo getUtileTasse
var utiltassprof = reddprof.getUtileTasse();
console.log('\n');
console.log('utile tasse professionista:' + utiltassprof + '€');
// chiamo il metodo getTasseInps
var tassinpsprof = reddprof.getTasseInps();
// chiamo il metodo getTasseIrpef
var tassirpefprof = reddprof.getTasseIrpef();
// chiamo il metodo getRedditoAnnuoNetto
var reddannuoprof = reddprof.getReddAnnuoNetto();
// stampo tutte le istanze
console.log('tasse inps professionista:' + tassinpsprof + '€');
console.log('tasse irpef professionista:' + tassirpefprof + '€');
console.log('reddito annuo netto professionista:' + reddannuoprof + '€');
console.log('-------------------------------------------------');
var AnnuoNettoArt = /** @class */ (function (_super) {
    __extends(AnnuoNettoArt, _super);
    function AnnuoNettoArt(RedditoAnnuo, codRett, TasseIrpef, TasseInps) {
        return _super.call(this, RedditoAnnuo, codRett, TasseIrpef, TasseInps) || this;
    }
    AnnuoNettoArt.prototype.getUtileTasse = function () {
        return this.ReddAnnuo * this.codRett / 100;
    };
    AnnuoNettoArt.prototype.getTasseInps = function () {
        return this.TasseInps;
    };
    AnnuoNettoArt.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.TasseIrpef / 100;
    };
    AnnuoNettoArt.prototype.getReddAnnuoNetto = function () {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return AnnuoNettoArt;
}(Artigiano));
var artigiano = new AnnuoNettoArt(67500, 67, 15, 3500);
var utiltassart = artigiano.getUtileTasse();
console.log('utile tasse artigiano:' + utiltassart + '€');
var tassinpsart = artigiano.getTasseInps();
var tassirpefart = artigiano.getTasseIrpef();
var reddannuoart = artigiano.getReddAnnuoNetto();
console.log('tasse inps artigiano:' + tassinpsart + '€');
console.log('tasse irpef artigiano:' + tassirpefart + '€');
console.log('reddito annuo netto artigiano:' + reddannuoart + '€');
console.log('-------------------------------------------------');
var AnnuoNettoComm = /** @class */ (function (_super) {
    __extends(AnnuoNettoComm, _super);
    function AnnuoNettoComm(RedditoAnnuo, codRett, TasseIrpef, TasseInps) {
        return _super.call(this, RedditoAnnuo, codRett, TasseIrpef, TasseInps) || this;
    }
    AnnuoNettoComm.prototype.getUtileTasse = function () {
        return this.ReddAnnuo * this.codRett / 100;
    };
    AnnuoNettoComm.prototype.getTasseInps = function () {
        return this.TasseInps;
    };
    AnnuoNettoComm.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.TasseIrpef / 100;
    };
    AnnuoNettoComm.prototype.getReddAnnuoNetto = function () {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return AnnuoNettoComm;
}(Commerciante));
var commerciante = new AnnuoNettoComm(97500, 40, 15, 3500);
var utiltasscomm = commerciante.getUtileTasse();
console.log('utile tasse commerciante:' + utiltasscomm + '€');
var tassinpscomm = commerciante.getTasseInps();
var tassirpefcomm = commerciante.getTasseIrpef();
var reddannuocomm = commerciante.getReddAnnuoNetto();
console.log('tasse inps commerciante:' + tassinpscomm + '€');
console.log('tasse irpef commerciante:' + tassirpefcomm + '€');
console.log('reddito annuo netto commerciante:' + reddannuocomm + '€');
