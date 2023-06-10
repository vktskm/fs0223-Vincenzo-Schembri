interface IPersona{
    nome:string;
    presentazione(val:string):string;
}
interface IUtente{
    password:string;
    email:string;
}
//posso usare le interfacce per tipizzare
let user:IUtente = {
    password:'password',
    email:'email@email.it',
}

//posso implementare le interfacce per imporre alle classi metodi e proprietà
class Corsista implements IPersona{
    nome: string;
    materie:string[] = [];
    constructor(nome:string){
        this.nome = nome;
    }

    presentazione(): string {
        return 'prova';
    }
    
}

class Docente implements IPersona{
    nome:string
    skills:string[] = [];
    constructor(nome:string){
        this.nome = nome;
   }

    presentazione(): string {
       return 'Prova'
    }
}

class Admin implements IPersona, IUtente{
    nome:string
    password: string;
    email: string;
    constructor(nome:string, password:string, email:string){
        this.nome = nome;
        this.password = password;
        this.email = email;
    }

    presentazione(): string {
        return 'Prova'
    }
}