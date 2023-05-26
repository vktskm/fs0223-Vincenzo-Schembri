console.log('Hello World!');


let nome:string = 'Mario';
let anni:number = 30;
let boolean:boolean = false;

let array:any[] = [20, 'testo',true];
let arrayString:string[] = ['stringa'];
let arrayNumber:number[] = [30,15,24];

nome = 'Marco';

let vuota:undefined|number;

vuota = 0;

/* tipizzazione oggetti */

let user:{nome:string} = {
    nome:'Mario'
}

console.log(user.nome);


//tipizzazione funzioni
let salutoVar:Function = ():void => {
    console.log('Ciao!');
}

function saluto():void{
    console.log('Ciao!');
}

saluto();

function restituisciSaluto():string{
    return 'Ciao!';
}

//tipizzazione di parametri
function somma(a:number,b:number):number{
    return a + b;
}

somma(0,5);
