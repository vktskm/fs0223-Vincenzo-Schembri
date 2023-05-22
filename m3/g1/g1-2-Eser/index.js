var numeroCasuale = (Math.floor(Math.random() * (100 - 1) + 1));
console.log(numeroCasuale);
var numero1 = 40;
console.log(numero1);
var numero2 = 60;
console.log(numero2);

function confrontaNumeri() {
    if (numeroCasuale == numero1) {
        console.log('Il numero causale  è uguale n1');
    }
    else if (numeroCasuale == numero2) {
        console.log('Il numero causale  è uguale n2');
    }
    else {
        if (((numeroCasuale != numero1) && (numeroCasuale != numero2)) && 
        (Math.abs(numeroCasuale - numero1) < Math.abs(numeroCasuale - numero2))) {
            console.log('Il numero uscito non è quello primo , ma si avvicina di più');
        }
        else if (((numeroCasuale != numero1) && (numeroCasuale != numero2)) && 
                (Math.abs(numeroCasuale - numero1) > Math.abs(numeroCasuale - numero2))) {
            console.log('Il numero uscito non è quello secondo , ma si avvicina di più');
        }
        else {
            console.log('Il numero uscito è uguale a n1 o n2');
        }
    }
}
confrontaNumeri();
