"use strict";
class Studente {
    constructor(name, lastname, materie) {
        this.name = name;
        this.lastname = lastname;
        this.materie = materie;
    }
    get presentazione() {
        return `Sono ${this.name} ${this.lastname}, e studio le seguenti materie: ${this.materie.join(' - ')}`;
    }
}
class Classe {
    constructor(nome) {
        this.studenti = [];
        this.nome = nome;
    }
    aggiungiStudente(studente) {
        this.studenti.push(studente);
    }
    get getStudenti() {
        return this.studenti;
    }
}
let materie = ['js', 'ts'];
let studente1 = new Studente('Mario', 'Rossi', materie);
let studente2 = new Studente('Maria', 'Rossini', materie);
let studente3 = new Studente('Marco', 'Rosa', materie);
let studente4 = new Studente('Marica', 'Bianchi', materie);
let studente5 = new Studente('Marino', 'Verdi', materie);
let fs0223 = new Classe('fs0223');
fs0223.aggiungiStudente(studente1);
fs0223.aggiungiStudente(studente2);
fs0223.aggiungiStudente(studente3);
fs0223.aggiungiStudente(studente4);
fs0223.aggiungiStudente(studente5);
console.log(fs0223.getStudenti);
console.log(fs0223.getStudenti[0].presentazione);
//# sourceMappingURL=aggregation-ab.js.map