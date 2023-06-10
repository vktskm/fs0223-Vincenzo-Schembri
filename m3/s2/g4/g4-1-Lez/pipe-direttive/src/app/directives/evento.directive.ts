import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvento]'
})
export class EventoDirective {

  constructor(
    private ref: ElementRef//l'elemento a cui è collegata la direttiva
  ) { }

  //è un decoratore per metodi
  @HostListener('click') onClick(){

    this.ref.nativeElement.textContent = 'Evento scatenato!';

    //Le parti commentate utilizzano metodologie non specifiche di angular, e vanno evitate
    //servonoi semplicemente come esempio del controllo di cui è capace una direttiva
    //let div =  document.createElement('div');
    //div.innerHTML = 'Funziona!';
    //this.ref.nativeElement.after(div);

    setInterval(()=>{
      this.ref.nativeElement.textContent = 'In attesa di un evento';
      //div.remove()
    }, 3000)

  }

  // questa sintassi ci nricorda molto questo
  // elemento.addEventListener('click',()=>{

  // })

}
