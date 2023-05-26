"use strict";
class Auto {
    constructor() {
        this.motore = new Motore();
    }
    accendiAuto() {
        this.motore.avvia();
    }
    spegniAuto() {
        this.motore.spegni();
    }
}
class Motore {
    constructor() {
        this.accensione = false;
    }
    avvia() {
        console.log('Motore acceso');
        this.accensione = true;
    }
    spegni() {
        console.log('Motore spento');
        this.accensione = false;
    }
    onOff() {
        this.accensione = !this.accensione;
    }
}
//# sourceMappingURL=composition.js.map