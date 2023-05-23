var gamer1 = 10;
var gamer2 = 20;
function confronto(num1, num2) {
    var numero = Math.floor((Math.random() * (100 - 1)) + 1);
    var diff1 = Math.abs(numero - num1), diff2 = Math.abs(numero - num1);
    console.log('Numero casuale generato = ', numero);
    if (numero === num1) {
        console.log('Il giocatore n1 ha indovinato \n');
    }
    else if (numero === num2) {
        console.log('Il giocatore n2 ha indovinato \n');
    }
    else if (diff1 < diff2) {
        console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più!');
    }
    else {
        console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!');
    }
}
confronto(gamer1, gamer2);
