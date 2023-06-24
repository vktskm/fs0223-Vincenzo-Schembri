import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  completedTodos: Todo[] = [];
  isLoading: boolean = false;
  constructor(private todoSvc: TodosService){}

  ngOnInit(){
    this.getTrueTodos();
  }
  getTrueTodos() {
    this.isLoading = true;
    this.todoSvc.getTodos().then(todosResponse => {
      const onlyTrueTodos = todosResponse.filter(todo => todo.completed === true);
      this.completedTodos = onlyTrueTodos;
      console.log("🚀 ~ file: completed.component.ts:22 ~ CompletedComponent ~ this.todoSvc.getTodos ~ this.completedTodos:", this.completedTodos)
      this.isLoading = false;
    })
  }
  markAsNotCompleted(id? : number){
    this.isLoading = true;
    this.todoSvc.getSingleTodo(id!)
      .then(res => {
        console.log(res);
        res.completed = false;
        this.todoSvc.editTodo(res)
        this.getTrueTodos()
      })
  }
  onShowProgressBarChange(show: boolean) {
    this.isLoading = show;
  }
}
