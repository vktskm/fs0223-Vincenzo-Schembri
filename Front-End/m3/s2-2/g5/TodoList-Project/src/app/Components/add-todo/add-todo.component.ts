import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodoComponent } from 'src/app/Pages/todo/todo.component';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  singleTodo:Todo = new Todo('',false);

  myClasses = {
    'form-container': true,
    'display-n': true,
    'display-b':false
  }

  @Output() todoCreated = new EventEmitter<void>();

  constructor(private todoSvc: TodosService, private todoComp: TodoComponent){}
  createTodo(){
    this.todoComp.isLoading = true;
    this.todoSvc.addTodo(this.singleTodo)
    .then(res =>
      this.todoCreated.emit());
  }
  @HostListener('click') visualizeForm() {
    this.myClasses['display-n'] = false;
    this.myClasses['display-b'] = true;
  }
  @HostListener('document:keydown.escape') closeForm(){
    this.myClasses['display-n'] = true;
    this.myClasses['display-b'] = false;
  }
  @HostListener('click', ['$event']) closeButton(event: MouseEvent) {
    const targetElement = event.target as HTMLButtonElement;
    if (targetElement.classList.contains('create-button')) {
      this.closeForm();
    }
  }
}
