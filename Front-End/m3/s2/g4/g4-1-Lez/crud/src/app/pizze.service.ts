import { Injectable } from '@angular/core';
import { IPizza } from './ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  apiUrl:string = 'http://localhost:3000/pizze';

  allPizze:IPizza[] = [];


  constructor() { }

  getPizze():Promise<IPizza[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }
  //versione con promise
  getPizzePromise(){

    return new Promise<IPizza[]>((resolve) =>{
      setTimeout(() => {
        resolve(this.allPizze);
      },2000)
    })

  }


  getPizzaSingola(id:number):Promise<IPizza>{
    return fetch(this.apiUrl+'/'+id).then(response => response.json());
  }

  addPizza(pizza:IPizza):Promise<IPizza>{
    return fetch(this.apiUrl,{
      method:'post',//gli ndico che voglio creare
      headers: {'Content-Type': 'application/json'},//specifico il formato(per la compatibilità)
      body: JSON.stringify(pizza)
    }).then(response => response.json());
  }

  updatePizza(pizza:IPizza){
    return fetch(this.apiUrl+'/'+pizza.id,{
      method:'PUT',//gli ndico che voglio aggiornare
      headers: {'Content-Type': 'application/json'},//specifico il formato(per la compatibilità)
      body: JSON.stringify(pizza)
    }).then(response => response.json());
  }

  deletePizza(id:number = 0){
    return fetch(this.apiUrl+'/'+id,{
      method:'DELETE',//indico che voglio eliminare
    }).then(response => response.json());
  }

}
