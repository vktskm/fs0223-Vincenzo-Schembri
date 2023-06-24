abstract class Veicolo{

    nRuote:number;
    vel:number = 0;
    velMax:number;

    constructor(nRuote:number = 2,velMax:number){
        this.nRuote = nRuote;
        this.velMax = velMax;
    }

    fermaVeicolo():void{
        this.vel = 0;
    }

    abstract accelera(vel?:number):void
    abstract frena(vel?:number):void

}

class Bicicletta extends Veicolo{
    
    constructor(){
        super(2,50);
    }

    accelera(vel?: number): void {
        this.vel++   
    }
    
    frena(vel?: number): void {
        this.vel--   
    }
    
}

class Automobile extends Veicolo{

    constructor(velMax:number){
        super(4,velMax);
    }

    accelera(vel?: number): void {
        this.vel += 40  
    }
    
    frena(vel?: number): void {
        this.vel -= 40   
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

