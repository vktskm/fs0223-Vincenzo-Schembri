import { Component } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esercizio';

  constructor(private svc:PhotosService){}

  ngOnInit(){

    this.svc.getPhotos().subscribe(res => console.log(res))

  }
}
