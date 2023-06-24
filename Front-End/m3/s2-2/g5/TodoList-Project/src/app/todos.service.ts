import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiLink: string = 'http://localhost:3000/todos';

  constructor() { }

  getTodos():Promise<Todo[]>{
    return fetch(this.apiLink).then(res => res.json());
  }

  addTodo(todo:Todo):Promise<Todo>{
    return fetch(this.apiLink, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    }).then(res => res.json());
  }

  editTodo(todo:Todo){
    return fetch(this.apiLink + '/' + todo.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(res => res.json());
  }

  deleteTodo(id:number = 0){
    return fetch(this.apiLink + '/' + id, {
      method: 'DELETE'
    }).then(res => res.json())
  }

  getSingleTodo(id:number):Promise<Todo>{
    return fetch(this.apiLink + '/' + id,).then(res => res.json());
  }
}
