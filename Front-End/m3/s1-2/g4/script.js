"use strict";
/* import { myModule } from '../../../myModules/myModules';
console.log("🚀 ~ file: script.ts:2 ~ myModule:", myModule)

let body = Q('body');
console.log("🚀 ~ file: script.ts:4 ~ body:", body) */
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
Object.defineProperty(exports, "__esModule", { value: true });
var CapoAbbigliamento = /** @class */ (function () {
    function CapoAbbigliamento(capo, codprod, collezione, colore, disponibile, id, modello, prezzoivaesclusa, prezzoivainclusa, quantita, saldo) {
        this.capo = capo;
        this.codprod = codprod;
        this.collezione = collezione;
        this.colore = colore;
        this.disponibile = disponibile;
        this.id = id;
        this.modello = modello;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.quantita = quantita;
        this.saldo = saldo;
    }
    return CapoAbbigliamento;
}());
var NewCapo = /** @class */ (function (_super) {
    __extends(NewCapo, _super);
    function NewCapo(capo, codprod, collezione, colore, disponibile, id, modello, prezzoivaesclusa, prezzoivainclusa, quantita, saldo) {
        var _this = _super.call(this, capo, codprod, collezione, colore, disponibile, id, modello, prezzoivaesclusa, prezzoivainclusa, quantita, saldo) || this;
        _this.prezzoScontato = _this.mostraPrezzo;
        return _this;
    }
    Object.defineProperty(NewCapo.prototype, "mostraPrezzo", {
        get: function () {
            var prezzoScontato = (this.prezzoivainclusa / 100) * this.saldo;
            return "Il prezzo scontato del capo \u00E8 ".concat((this.prezzoivainclusa - prezzoScontato).toFixed(2), "\u20AC");
        },
        enumerable: false,
        configurable: true
    });
    return NewCapo;
}(CapoAbbigliamento));
fetch('./Abbigliamento.json')
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Request Error");
    }
})
    .catch(function (error) {
    console.error(error);
})
    .then(function (data) {
    console.log("🚀 ~ file: script.ts:15 ~ data:", data);
    var capiAbbigliamento = [];
    data.forEach(function (capoSingolo) {
        var newCapoSingolo = new NewCapo(capoSingolo.capo, capoSingolo.codprod, capoSingolo.collezione, capoSingolo.colore, capoSingolo.disponibile, capoSingolo.id, capoSingolo.modello, capoSingolo.prezzoivaesclusa, capoSingolo.prezzoivainclusa, capoSingolo.quantita, capoSingolo.saldo);
        capiAbbigliamento.push(newCapoSingolo);
    });
    console.log(capiAbbigliamento);
    var numeriPari = [0, 2, 4];
    numeriPari.forEach(function (num) {
        console.log(capiAbbigliamento[num].mostraPrezzo);
    });
});
var myModules_1 = require("../../../myModules/myModules");
var body = (0, myModules_1.Q)('body');
console.log("🚀 ~ file: script.ts:94 ~ body:", body);
