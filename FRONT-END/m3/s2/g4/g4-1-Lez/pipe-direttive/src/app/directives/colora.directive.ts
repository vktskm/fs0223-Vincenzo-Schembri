import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  constructor(
    private ref: ElementRef//l'elemento a cui è collegata la direttiva
  ) { }

  @Input() colore!:string;

  //in fase di inizializzazione questo metodo di lancia da solo
  ngOnInit(){
    console.log(this.ref.nativeElement);
    this.ref.nativeElement.style.color = this.colore || '';
  }

}
