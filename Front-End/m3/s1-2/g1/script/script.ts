let numeroGiocatoreUno:number = 23;
let numeroGiocatoreDue:number = 65;

let randomNumber:number = Math.floor(Math.random() * 100) + 1;
console.log("🚀 ~ file: script.ts:5 ~ randomNumber:", randomNumber)


if (numeroGiocatoreUno === randomNumber || numeroGiocatoreDue === randomNumber){
    console.log("Uno dei due ha preso il numero");
    if (numeroGiocatoreUno === randomNumber){
        console.log("il Giocatore uno ha preso il numero");
    } else {
        console.log("il Giocatore due ha preso il numero");
    }
} else {
    console.log('Nessuno dei due ha preso il numero');
    let difference1:number = Math.abs(randomNumber - numeroGiocatoreUno);
    let difference2:number = Math.abs(randomNumber - numeroGiocatoreDue);
    if (difference1<difference2){
        console.log('Il giocatore uno ci è andato più vicino')
    } else {
        console.log('Il giocatore due ci è andato più vicino')
    }
}