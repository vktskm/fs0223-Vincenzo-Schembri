import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/Interface/itodo';
import { Todo } from 'src/app/Model/todo';
import { TodosService } from 'src/app/Service/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  arrayT: Itodo[]=[];
  todo: Todo = new Todo('', false );
  loading: boolean = true;
  innerTest:string = "";
  constructor(private todoSvc:TodosService){}

  ngOnInit(){
    this.getToDos();
  }

  delete(id?:number){
    this.todoSvc.deleteToDo(id).then(res =>{
    this.getToDos();
    })
  }

  getToDos(){
    this.todoSvc.getToDo().then((res)=>{
      this.arrayT = res;
      this.loading = false;
    })
  }

  create(){
     this.todoSvc.addToDo(this.todo).then(res=>this.getToDos());
     this.innerTest="";
  }


}
