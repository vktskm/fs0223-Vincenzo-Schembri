import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainComponent } from '../main/main.component';
import { Subject } from 'rxjs';
import { PhotoService } from 'src/app/photo.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor(public photoSvc: PhotoService){}
  numero:number | string = 0;

  ngOnInit(){
    this.pippo();
  }
  pippo(){
    this.photoSvc.mySubject.subscribe((value: number) => {
      console.log(value);
      return this.numero = value;
    })
    this.photoSvc.mySubjectControl.subscribe((value: boolean) => {
      console.log("🚀 ~ file: header.component.ts:28 ~ HeaderComponent ~ this.photoSvc.mySubjectControl.subscribe ~ value:", value)
      if (value === true){
        this.numero = 'dato ricevuto con successo';
      }
    })
  }
}

