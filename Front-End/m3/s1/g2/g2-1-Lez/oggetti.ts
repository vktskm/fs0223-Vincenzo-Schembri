{
    //Modalità js
    let user = {
        nome:'mario',
        cognome:'rossi'
    }
    
    console.log(user.nome);
    
    //Modalità ts
    //anni è una prop facoltativa
    let userTipizzato:{nome:string, cognome:string, anni?:number} = {
        nome:'mario',
        cognome:'rossi'        
    };

    //quando si lavora con gli oggetti ts vuole avere certezza della forma di ogni oggetto
}

{

    class User {

        nome:string;
        cognome:string;
        anni?:number;

        constructor(_nome:string, _cognome:string, _anni?:number){
            this.nome = _nome;
            this.cognome = _cognome;
            this.anni = _anni;
        }
    }

    //posso creare un oggetto a mano
    let userTipizzato:User = {
        nome:'mario',
        cognome:'rossi'        
    };
    
    //posso istanziare una classe
    let userTipizzato2:User = new User('Maria','Bianchi');

}