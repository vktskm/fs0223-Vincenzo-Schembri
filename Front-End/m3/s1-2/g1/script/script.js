var numeroGiocatoreUno = 23;
var numeroGiocatoreDue = 65;
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("🚀 ~ file: script.ts:5 ~ randomNumber:", randomNumber);
if (numeroGiocatoreUno === randomNumber || numeroGiocatoreDue === randomNumber) {
    console.log("Uno dei due ha preso il numero");
    if (numeroGiocatoreUno === randomNumber) {
        console.log("il Giocatore uno ha preso il numero");
    }
    else {
        console.log("il Giocatore due ha preso il numero");
    }
}
else {
    console.log('Nessuno dei due ha preso il numero');
    var difference1 = Math.abs(randomNumber - numeroGiocatoreUno);
    var difference2 = Math.abs(randomNumber - numeroGiocatoreDue);
    if (difference1 < difference2) {
        console.log('Il giocatore uno ci è andato più vicino');
    }
    else {
        console.log('Il giocatore due ci è andato più vicino');
    }
}
