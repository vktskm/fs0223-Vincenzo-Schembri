import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/Module/photo';
import { PhotoService } from 'src/app/photo.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  implements OnInit {

  constructor(private photoSvc: PhotoService){}

  photosArr:Photo[] = [];
  likedPhotos:number[] = [];

  ngOnInit(): void {
    this.photoSvc.get().subscribe(res => {
      this.photosArr = res;
      console.log("🚀 ~ file: main.component.ts:19 ~ MainComponent ~ this.photoSvc.get ~ this.photosArr:", this.photosArr)
    })
  }

  deletePhoto(id:number){
    this.photoSvc.delete(id).subscribe(res => {
      this.photoSvc.get().subscribe(res => {
        this.photosArr = res;
        console.log("🚀 ~ file: main.component.ts:19 ~ MainComponent ~ this.photoSvc.get ~ this.photosArr:", this.photosArr)
      })
    });
  }

  countLiked(id:number){
    const currentId: number = id;
    this.likedPhotos.push(currentId)
    console.log("🚀 ~ file: main.component.ts:36 ~ MainComponent ~ countLiked ~ this.likedPhotos:", this.likedPhotos)
    localStorage.setItem('likedPhotos', JSON.stringify(this.likedPhotos))

    let totLikes = this.likedPhotos.length;

    this.photoSvc.mySubject.subscribe((value:number) => {
      console.log('Received value:', value);
    });
    this.photoSvc.mySubject.next(totLikes);
    if (totLikes === 4){
      console.log('Flusso di valori completato');
      this.photoSvc.mySubjectControl.subscribe((value:boolean) => {
        console.log("🚀 ~ file: main.component.ts:50 ~ MainComponent ~ this.photoSvc.mySubjectControl.subscribe ~ value:", value)
      });
      this.photoSvc.mySubject.complete()
      this.photoSvc.mySubjectControl.next(true)
    }
  }
}
