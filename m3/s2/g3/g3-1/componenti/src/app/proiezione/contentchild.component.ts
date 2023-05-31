import { Component, ContentChild, ElementRef } from "@angular/core";


@Component({
  selector: 'app-local-variable',
  template: `<div>
                <ng-content></ng-content>
          </div>`
})
export class LocalVariable{

  //contentChild andrà a ricercare la local variable #paragrafo, riportando l'elemento a cui è stata assegnata
  @ContentChild('paragrafo') paragrafo!:ElementRef;

  ngAfterContentInit(){
    //la prop native element è un riferimento all'elemento del dom selezionato
    console.log(this.paragrafo.nativeElement.textContent);

  }


}
