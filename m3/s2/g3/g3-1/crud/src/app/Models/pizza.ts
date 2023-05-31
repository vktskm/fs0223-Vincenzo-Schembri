export class Pizza {

  id?:number;
  gusto:string;
  prezzo:number;

  constructor(gusto:string, prezzo:number, id?:number){
    this.id = id;
    this.gusto = gusto;
    this.prezzo = prezzo;
  }

}
