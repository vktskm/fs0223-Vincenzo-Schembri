class User{

    public nome:string;
    public cognome:string;
    //public è implicito
    anni:number;

    //protected => accessibile solo all'interno della classe, o all'interno delle sottoclassi
    protected password?:string;//così la proprietà è facoltativa

    constructor(_nome:string, _cognome:string, _anni:number, _password?:string){
        this.nome = _nome;
        this.cognome = _cognome;
        this.anni = _anni;
        this.password = _password;
    }

    public presentazione(){
        console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni}anni`);
        
    }

    public logIn(){
        // fetch('INDIRIZZO_DELLA_CHIAMATA',{
        //     method:'post',
        //     data:{
        //         password:this.password
        //     }
        // })
    }

}

let user1 = new User('Mario','Rossi',30);

let user2 = new User('Maria','Bianchi',35,'kjhgfscad');

console.log(user2);
console.log(user2.nome);
//console.log(user2.password);//errore




