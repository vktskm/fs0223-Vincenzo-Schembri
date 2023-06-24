import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  singleTodo:Todo = new Todo('',false);
  isLoading: boolean = false;
  dataLoaded:boolean = false;

  constructor(private todoSvc: TodosService, private router: ActivatedRoute, private route: Router){}
  ngOnInit(){
    this.isLoading = true;
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.todoSvc.getSingleTodo(id)
      .then(res => {
        this.singleTodo = res;
        this.isLoading = false;
        this.dataLoaded = true;
        console.log("🚀 ~ file: edit-todo.component.ts:29 ~ EditTodoComponent ~ ngOnInit ~ res:", this.singleTodo)
      })
      console.log('Id:', id);
    });
  }
  editThisTodo(){
    this.isLoading = true;
    this.todoSvc.editTodo(this.singleTodo)
    .then(res => {
      console.log("🚀 ~ file: edit-todo.component.ts:40 ~ EditTodoComponent ~ res:", res)
      this.navigateToHome();
    });
  }
  navigateToHome(){
    this.route.navigate(['/'])
  }
  onShowProgressBarChange(show: boolean) {
    this.isLoading = show;
  }
}
