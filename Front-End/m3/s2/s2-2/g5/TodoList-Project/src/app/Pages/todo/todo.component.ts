import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  singleTodo:Todo = new Todo('',false);
  isLoading: boolean = false;

  constructor(private todoSvc: TodosService){}

  ngOnInit(){
    this.getTodos();
  }
  getTodos() {
    this.isLoading = true;
    this.todoSvc.getTodos().then(todosResponse => {
      const onlyFalseTodos = todosResponse.filter(todo => todo.completed === false);
      this.todos = onlyFalseTodos;
      console.log("🚀 ~ file: todo.component.ts:26 ~ this.todoSvc.getTodos ~ this.todos:", this.todos)
      this.isLoading = false;
    })
  }
  deleteTodo(id? :number){
    this.isLoading = true;
    this.todoSvc.deleteTodo(id)
    .then(res => {
      this.getTodos();
    })
  }
  createTodo(){
    this.todoSvc.addTodo(this.singleTodo)
    .then(res => console.log(res));
  }
  handleTodoCreated() {
    this.getTodos();
  }
  markAsCompleted(id? : number){
    this.isLoading = true;
    this.todoSvc.getSingleTodo(id!)
      .then(res => {
        console.log(res);
        res.completed = true;
        this.todoSvc.editTodo(res)
        this.getTodos()
      })
  }
  onShowProgressBarChange(show: boolean) {
    this.isLoading = show;
  }
}
