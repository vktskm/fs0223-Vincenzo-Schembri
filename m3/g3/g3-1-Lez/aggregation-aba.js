"use strict";
class Studente1 {
    constructor(name, lastname, materie) {
        this.name = name;
        this.lastname = lastname;
        this.materie = materie;
    }
    get presentazione() {
        return `Sono ${this.name} ${this.lastname}, e studio le seguenti materie: ${this.materie.join(' - ')}`;
    }
}
class Classe1 {
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
class Iscrizione {
    constructor(studente, classe) {
        this.studente = studente;
        this.classe = classe;
    }
    aggiungiCorso() {
        this.classe.aggiungiStudente(this.studente);
    }
}
//# sourceMappingURL=aggregation-aba.js.map