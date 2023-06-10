console.error('===========================================')
function numero(n:number):number{
    return n
}

console.log(numero(0));


function sommaConcatena<T>(a:T, b:T):T{
    return (a as any) + (b as any);
}

console.log(sommaConcatena<number>(2,3));
console.log(sommaConcatena<string>('ciao ','come stai?'));

//generics multipli
interface chiaveValore<T,U>{
    prop1:T,
    prop2:U
}

let obj:chiaveValore<string,boolean> = {
    prop1: "",
    prop2: false
}

let obj2:chiaveValore<number,boolean> = {
    prop1: 0,
    prop2: false
}

//generics su classi
class Prova<T>{

    //il punto esclamativo spegne l'errore
    //cominca a ts che sappiamo cosa stiamo facendo
    prop!:T;

}

let prova = new Prova<string[]>()



//array e generics
let pizze = ['Margherita','Diavola','Capricciosa'];
let numeri = [4,6,7];

function filtra<T>(arr:T[], str:T):T[]{
    return arr.filter((el:T) => el == str );
}

console.log(filtra<string>(pizze, 'Capricciosa'));
console.log(filtra<number>(numeri, 6));

