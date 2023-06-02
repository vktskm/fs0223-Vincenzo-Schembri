"use strict";
//posso usare le interfacce per tipizzare
let user = {
    password: 'password',
    email: 'email@email.it',
};
//posso implementare le interfacce per imporre alle classi metodi e proprietà
class Corsista {
    constructor(nome) {
        this.materie = [];
        this.nome = nome;
    }
    presentazione() {
        return 'prova';
    }
}
class Docente {
    constructor(nome) {
        this.skills = [];
        this.nome = nome;
    }
    presentazione() {
        return 'Prova';
    }
}
class Admin {
    constructor(nome, password, email) {
        this.nome = nome;
        this.password = password;
        this.email = email;
    }
    presentazione() {
        return 'Prova';
    }
}
//# sourceMappingURL=interface.js.map