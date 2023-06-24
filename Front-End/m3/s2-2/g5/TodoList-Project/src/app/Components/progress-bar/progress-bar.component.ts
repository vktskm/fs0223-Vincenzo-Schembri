import { Component, EventEmitter, Output } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  showProgressBar: boolean = false;
  @Output() showProgressBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  loadingMore = {
    'loading-more-bar': false,
    'bar': true
  }

  constructor(private todoSvc: TodosService){}

  showProgress() {
    this.showProgressBarChange.emit(true);
  }

  hideProgress() {
    this.showProgressBarChange.emit(false);
  }
}

