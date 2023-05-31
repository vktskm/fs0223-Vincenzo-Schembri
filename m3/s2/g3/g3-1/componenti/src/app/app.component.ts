import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componenti';

  //fa come getElementById()
  //cerca un elemento con la local variable #elemento e lo inserisce nella prop elementoCercato
  @ViewChild('elemento') elementoCercato!:ElementRef;

  ngAfterViewInit() {

    console.log(this.elementoCercato.nativeElement.textContent);
    this.pippo()

  }


  pippo(){

  }
}
