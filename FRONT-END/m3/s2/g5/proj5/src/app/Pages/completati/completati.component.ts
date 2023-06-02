import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/Interface/itodo';
import { Todo } from 'src/app/Model/todo';
import { TodosService } from 'src/app/Service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  arrayT: Itodo[]=[];
  todo: Todo = new Todo('', false );
  loading: boolean = true;

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
      this.arrayT = res.filter(todo => todo.completed == true);
      this.loading = false;
    })
  }
}


