import { Injectable } from '@angular/core';
import { Itodo } from '../Interface/itodo';
import { Todo } from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl:string = 'http://localhost:3000/todos';

  arrayTodos:Todo[] = [];

  constructor() { }

  getToDo():Promise<Todo[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }

  getToDoSingola(id:number):Promise<Todo>{
    return fetch(this.apiUrl+'/'+id).then(response => response.json());
  }

  addToDo(todos:Todo):Promise<Todo>{
    return fetch(this.apiUrl,{
      method:'post',//gli ndico che voglio creare
      headers: {'Content-Type': 'application/json'},//specifico il formato(per la compatibilità)
      body: JSON.stringify(todos)
    }).then(response => response.json());
  }

  updateToDo(todos:Todo){
    return fetch(this.apiUrl+'/'+todos.id,{
      method:'PUT',//gli ndico che voglio aggiornare
      headers: {'Content-Type': 'application/json'},//specifico il formato(per la compatibilità)
      body: JSON.stringify(todos)
    }).then(response => response.json());
  }

  deleteToDo(id:number = 0){
    return fetch(this.apiUrl+'/'+id,{
      method:'DELETE',//indico che voglio eliminare
    }).then(response => response.json());
  }

  toggleStatus(id:number = 0) {
    return fetch(this.apiUrl+'/'+id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed: true })
    }).then((res) => res.json());
  }
}
