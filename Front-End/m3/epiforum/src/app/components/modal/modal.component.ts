import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  @Input() title: string = 'Titolo';
  @Input() userName: string = '';
  @Input() content: string = 'Contenuto del modale';
  @Output() onClose = new EventEmitter();

  close() {
    this.onClose.emit();
  }
}
