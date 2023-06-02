import { IPizza } from "./ipizza";

export class Pizza implements IPizza {
  id?: number;
  gusto: string;
  prezzo: number;

  constructor(gusto: string,prezzo:number, id?:number){
    this.gusto = gusto;
    this.prezzo = prezzo;
    this.id = id;
  }
}
