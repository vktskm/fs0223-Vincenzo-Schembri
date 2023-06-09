import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../post.service';
import { Photo } from '../interface/photo';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

    constructor(private photoSvc: PhotoService){}

    photosArr:Photo[] = [];


    ngOnInit(): void {
      this.photoSvc.get().subscribe(res => {
        this.photosArr = res;
      })
    }

    deletePhoto(id:number){
      this.photoSvc.delete(id).subscribe(res => {
        this.photoSvc.get().subscribe(res => {
          this.photosArr = res;
        })
      });
    }

}
