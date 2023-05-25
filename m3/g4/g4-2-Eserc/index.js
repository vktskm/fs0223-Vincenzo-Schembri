/*Predisponi una classe che rappresenti un capo d'abbigliamento(le proprietà sono quelle degli oggetti
che trovi in abbigliamento.json)
La classe deve essere munita di un metodo mostraPrezzo():string che mostra il prezzo con tanto di valuta
Esegui una fetch su abbigliamento.json
Una volta ricevuti i dati dalla fetch ciclali ed utilizzali per istanziare i capi d'abbigliamento
Salva ogni istanza dentro un array
Mostra in console il contenuto di questo array
Tra i capi salvati nell'array scegline almeno 3 e mostra il prezzo in console( usando il metodo
mostraPrezzo() )*/
var capoAbbigliamento = /** @class */ (function () {
    function capoAbbigliamento(id, codprod, collezione, capo, modello, quantità, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    capoAbbigliamento.prototype.mostraPrezzo = function () {
        return this.prezzoivainclusa;
    };
    return capoAbbigliamento;
}());
fetch("Abbigliamento.json")
    .then(function (res) {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error("Errore");
    }
})
    .then(function (res) {
    console.log(res);
    var arrayN = [];
    res.forEach(function (el) {
        var nuovoC = new capoAbbigliamento(el.id, el.codprod, el.collezione, el.capo, el.modello, el.quantità, el.colore, el.prezzoivaesclusa, el.prezzoivainclusa, el.disponibile, el.saldo);
        arrayN.push(nuovoC);
    });
    console.log(arrayN);
    var Cardigan = new capoAbbigliamento(res[0].id, res[0].codprod, res[0].collezione, res[0].capo, res[0].modello, res[0].quantità, res[0].colore, res[0].prezzoivaesclusa, res[0].prezzoivainclusa, res[0].disponibile, res[0].saldo);
    console.log(Cardigan);
    console.log(Cardigan.mostraPrezzo());
})
    .catch(function (err) {
    console.log(err);
});
