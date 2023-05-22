var numeroCausale: number = (Math.floor(Math.random() * (100 - 1) + 1));
console.log(numeroCausale);

var numero1: number = 40;
console.log(numero1);
var numero2: number = 60;
console.log(numero2);

function confrontaNumeri (): void{

    if( numeroCausale == numero1){
        console.log("Il numero causale  è uguale n1 ");
    } else if ( numeroCausale == numero2){
              console.log("Il numero causale  è uguale n2 ");
        }else {

            if( ((numeroCausale != numero1) && ( numeroCausale != numero2)) &&
                 (Math.abs(numeroCausale - numero1) <  Math.abs( numeroCausale - numero2))
               ){
                 console.log(' Il numero uscito non è quello primo , ma si avvicina di più ')
               } else if ( ((numeroCausale != numero1) && ( numeroCausale != numero2)) &&
                       (Math.abs(numeroCausale - numero1) >  Math.abs( numeroCausale - numero2)) ){
                        console.log(' Il numero uscito non è quello secondo , ma si avvicina di più ')
                       } else {
                                    console.log('Il numero uscito è uguale a n1 o n2');
                              }
              }
}
confrontaNumeri();