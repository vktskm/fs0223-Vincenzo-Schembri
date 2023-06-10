import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/Interface/itodo';
import { TodosService } from 'src/app/Service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit{

    arrayTodos:Itodo[] = [];
    //loading:boolean = true;

    constructor(private todoSvc: TodosService){}

    ngOnInit(){
      this.getToDo();
    }

    deleteToDo(id?:number){
      this.todoSvc.deleteToDo(id)
      .then(res => {
        this.getToDo()
      })
    }

    getToDo(){
    this.todoSvc.getToDo().then((res)=>{
       this.arrayTodos =res;
     })
    };

    complete(id?:number){
      this.todoSvc.toggleStatus(id).then(res=> this.getToDo());
    }
}
