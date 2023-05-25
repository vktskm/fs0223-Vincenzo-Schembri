class Studente1{

    protected name: string;
    protected lastname:string;
    protected materie:string[];

    constructor(name:string, lastname:string, materie:string[]){
        this.name = name;
        this.lastname = lastname;
        this.materie = materie;
    }

    get presentazione():string{
        return `Sono ${this.name} ${this.lastname}, e studio le seguenti materie: ${this.materie.join(' - ')}`;
    }

}

class Classe1{
    protected nome:string;
    protected studenti:Studente1[] = [];

    constructor(nome:string){
        this.nome = nome;
    }

    aggiungiStudente(studente:Studente1):void{
        this.studenti.push(studente);
    }

    get getStudenti():Studente1[]{
        return this.studenti;
    }
}

class Iscrizione{

    protected studente:Studente1;
    protected classe:Classe1;

    constructor(studente:Studente1, classe:Classe1){
        this.studente = studente;
        this.classe = classe;
    }

    aggiungiCorso(){
        this.classe.aggiungiStudente(this.studente)
    }

}



