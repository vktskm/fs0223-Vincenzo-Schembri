import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngNotIf]'
})
export class NgNotIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,//riferimento all'elemento associato alla direttiva
    private containerRef: ViewContainerRef//il contenitore
  ) { }


  @Input() set ngNotIf(variabile:boolean){
    if(!variabile){
      //è come target.append() solo che è come se facesse anche createelement allo stesso tempo
      this.containerRef.createEmbeddedView(this.templateRef);
    }else{
      //è come element.remove
      this.containerRef.clear();
    }
  }


}
