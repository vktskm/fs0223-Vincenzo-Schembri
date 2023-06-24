import { Component } from '@angular/core';

@Component({
  selector: 'app-attr',
  templateUrl: './attr.component.html',
  styleUrls: ['./attr.component.scss']
})
export class AttrComponent {

  images:string[] = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
  ];

  counter:number = 0;
  currentImage:string = this.images[this.counter];

  //uso il costruttore perchè viene avviato quando carica la pagina
  constructor(){

    setInterval(()=>{

      //ogni 3 secondi avvio il metodo change image
      this.changeImage();

    }, 3000)

  }

  changeImage(){

    if(this.counter < this.images.length - 1){
      this.counter++;
    }else{
      this.counter = 0;
    }

    this.currentImage = this.images[this.counter]

  }


}
