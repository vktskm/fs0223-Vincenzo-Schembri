// classe astratta LiberoProf
abstract class LiberoProf{
 // proprietà di classe
 ReddAnnuo: number
 codRett:number;
 TasseIrpef:number;
 TasseInps:number;
// il costruttore della classe referenzia le proprietà
constructor(ReddAnnuo: number,codRett:number,TasseIrpef:number,TasseInps:number){
    this.ReddAnnuo=ReddAnnuo
    this.codRett=codRett
    this.TasseIrpef=TasseIrpef
    this.TasseInps=TasseInps
}
    // dichiarazione dei metodi astratti
    public abstract getUtileTasse():number
    public abstract getTasseInps():number
    public abstract getTasseIrpef():number
}
   
// classe astratta Artigiano
abstract class Artigiano{
     // proprietà di classe
     ReddAnnuo: number
     codRett:number;
     TasseIrpef:number;
     TasseInps:number;
    // il costruttore della classe referenzia le proprietà
    constructor(ReddAnnuo: number,codRett:number,TasseIrpef:number,TasseInps:number){
        this.ReddAnnuo=ReddAnnuo
        this.codRett=codRett
        this.TasseIrpef=TasseIrpef
        this.TasseInps=TasseInps
    }
    // dichiarazione dei metodi astratti
    public abstract getUtileTasse():number
    public abstract getTasseInps():number
    public abstract getTasseIrpef():number
}

// classe astratta Commerciante
abstract class Commerciante{
        // proprietà di classe
        ReddAnnuo: number
        codRett:number;
        TasseIrpef:number;
        TasseInps:number;
        // il costruttore della classe referenzia le proprietà
        constructor(ReddAnnuo: number,codRett:number,TasseIrpef:number,TasseInps:number){
            this.ReddAnnuo=ReddAnnuo
            this.codRett=codRett
            this.TasseIrpef=TasseIrpef
            this.TasseInps=TasseInps
        }
        // dichiarazione dei metodi astratti
        public abstract getUtileTasse():number
        public abstract getTasseInps():number
        public abstract getTasseIrpef():number
}

// classe AnnuoNettoProf estende LiberoProf
class AnnuoNettoProf extends LiberoProf{
            //passaggio dei parametri al costruttore
            constructor(ReddAnnuo:number,codRett:number,TasseIrpef:number,TasseInps:number){
            // utilizzo del comando super passare come parametro le proprietà della superclasse
            super(ReddAnnuo,codRett,TasseIrpef,TasseInps)
            }

            // implementazione metodo getUtileTasse
            public  getUtileTasse():number{
               return this.ReddAnnuo * this.codRett /100
            }
                  
            // implementazione metodo getTasseInps   
            public  getTasseInps():number{
                return this.getUtileTasse()*this.TasseInps/100           
            }  
            // implementazione metodo getTasseIrpef 
            public  getTasseIrpef():number{
                return this.getUtileTasse()*this.TasseIrpef/100
            }
                    
            // implementazione metodo getRedditoAnnuoNetto
            public getReddAnnuoNetto(): number{
                 return this.ReddAnnuo-(this.getTasseInps()+this.getTasseIrpef())
            }
}

// set proprietà al costruttore
let reddprof = new AnnuoNettoProf(27500,78,5,25.72)
// chiamo il metodo getUtileTasse
let utiltassprof = reddprof.getUtileTasse()
console.log('\n');          
console.log('utile tasse professionista:'+utiltassprof+'€');
// chiamo il metodo getTasseInps
let tassinpsprof= reddprof.getTasseInps()
// chiamo il metodo getTasseIrpef
let tassirpefprof= reddprof.getTasseIrpef()
// chiamo il metodo getRedditoAnnuoNetto
let reddannuoprof= reddprof.getReddAnnuoNetto()
// stampo tutte le istanze
console.log('tasse inps professionista:'+tassinpsprof+'€');
console.log('tasse irpef professionista:'+tassirpefprof+'€');
console.log('reddito annuo netto professionista:'+reddannuoprof+'€');
console.log('-------------------------------------------------');
            
class AnnuoNettoArt extends Artigiano{


    constructor(RedditoAnnuo:number,codRett:number,TasseIrpef:number,TasseInps:number){
            super(RedditoAnnuo,codRett,TasseIrpef,TasseInps)
            }

        public  getUtileTasse():number{
            return this.ReddAnnuo * this.codRett /100
             }
        public  getTasseInps():number{
            return this.TasseInps
        }
        public  getTasseIrpef():number{
            return this.getUtileTasse()*this.TasseIrpef/100
        }
        public getReddAnnuoNetto(): number{
               return this.ReddAnnuo-(this.getTasseInps()+this.getTasseIrpef())
        }
}

let artigiano = new AnnuoNettoArt(67500,67,15,3500)
let utiltassart = artigiano.getUtileTasse()

console.log('utile tasse artigiano:'+utiltassart+'€');
let tassinpsart= artigiano.getTasseInps()
let tassirpefart= artigiano.getTasseIrpef()
let reddannuoart = artigiano.getReddAnnuoNetto()
    
console.log('tasse inps artigiano:'+tassinpsart+'€');
console.log('tasse irpef artigiano:'+tassirpefart+'€');
console.log('reddito annuo netto artigiano:'+reddannuoart+'€');
console.log('-------------------------------------------------');
      
class AnnuoNettoComm extends Commerciante{

      constructor(RedditoAnnuo:number,codRett:number,TasseIrpef:number,TasseInps:number){
               super(RedditoAnnuo,codRett,TasseIrpef,TasseInps)
            }

        public  getUtileTasse():number{    
                return this.ReddAnnuo * this.codRett /100
            }
 
        public  getTasseInps():number{
                return this.TasseInps
            }
        public  getTasseIrpef():number{
                return this.getUtileTasse()*this.TasseIrpef/100
            }
        public getReddAnnuoNetto(): number{
                return this.ReddAnnuo-(this.getTasseInps()+this.getTasseIrpef())
            }
} 

let commerciante = new AnnuoNettoComm(97500,40,15,3500)
let utiltasscomm = commerciante.getUtileTasse()
console.log('utile tasse commerciante:'+utiltasscomm+'€');

let tassinpscomm= commerciante.getTasseInps()
let tassirpefcomm= commerciante.getTasseIrpef()
let reddannuocomm=  commerciante.getReddAnnuoNetto()

console.log('tasse inps commerciante:'+tassinpscomm+'€');
console.log('tasse irpef commerciante:'+tassirpefcomm+'€');
console.log('reddito annuo netto commerciante:'+reddannuocomm+'€');        