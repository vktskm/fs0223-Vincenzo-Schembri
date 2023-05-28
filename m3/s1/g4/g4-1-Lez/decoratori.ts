function Logger(constructor: Function):void{
    //constructor.prototype.prop = 'logger';
    //da qui pèosso aggiungere modifiche per la classe/metodo a cui aggancio il decorator
    console.log('Logging...');
    console.log(constructor);    
}

function LogMetodo(target:any, nomeMetodo:string, descriptor: PropertyDescriptor):void{
    //console.log('Metodo chiamato:', nomeMetodo);
    console.log(target);
    console.log(descriptor);
}


@Logger
class MiaClasse{

    prop!:string;

    constructor(){
        console.log('ok');
    }

    @LogMetodo
    mioMetodo(){
        //eseguo qualcosa
    }

}

console.log(new MiaClasse());
