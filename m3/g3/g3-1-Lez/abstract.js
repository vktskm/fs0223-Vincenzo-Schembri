"use strict";
class Veicolo {
    constructor(nRuote = 2, velMax) {
        this.vel = 0;
        this.nRuote = nRuote;
        this.velMax = velMax;
    }
    fermaVeicolo() {
        this.vel = 0;
    }
}
class Bicicletta extends Veicolo {
    constructor() {
        super(2, 50);
    }
    accelera(vel) {
        this.vel++;
    }
    frena(vel) {
        this.vel--;
    }
}
class Automobile extends Veicolo {
    constructor(velMax) {
        super(4, velMax);
    }
    accelera(vel) {
        this.vel += 40;
    }
    frena(vel) {
        this.vel -= 40;
    }
}
let bici = new Bicicletta();
console.log(bici.vel);
bici.accelera();
bici.accelera();
bici.accelera();
console.log(bici.vel);
bici.fermaVeicolo();
console.log(bici.vel);
let auto = new Automobile(150);
console.log(auto.vel);
auto.accelera();
console.log(auto.vel);
auto.fermaVeicolo();
console.log(auto.vel);
//# sourceMappingURL=abstract.js.map