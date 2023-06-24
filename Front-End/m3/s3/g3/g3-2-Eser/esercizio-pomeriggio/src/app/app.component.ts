import { Component, TrackByFunction } from '@angular/core';
import { Photo } from './models/photo';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  template: `
  <style>
    .container{
      padding: 16px;
    }
    .scroll{
      height: 100vh;
      width: 100%;
    }
    .card{
      max-width: 400px;
    }
  </style>
  <mat-toolbar color="primary">My photos</mat-toolbar>
    <div class="container">
      <app-favorites></app-favorites>

      <!-- <div *ngIf="photos; else loading" fxLayout="row wrap" fxLayoutAlign="center" fxLayoutGap="20px grid" >
        <div fxFlex="25%" fxFlex.xs="100%" fxFlex.sm="33%"  *ngFor="let photo of photos; let i = index">
          <app-photo-card [photo]="photo" (onDelete)="onDeletePhoto(photo.id,i)" (onFavorite)="onFavorite()"  ></app-photo-card>
        </div>
      </div> -->

      <cdk-virtual-scroll-viewport class="scroll" autosize *ngIf="photos; else loading"  >
        <div  fxLayout="column" fxLayoutAlign="center" fxLayoutGap="20px grid" >
          <div fxFlex fxLayoutAlign="center"   *cdkVirtualFor="let photo of photos; let i = index; trackBy:trackById">
            <app-photo-card class="card" [photo]="photo" (onDelete)="onDeletePhoto(photo.id,i)" (onFavorite)="onFavorite()"  ></app-photo-card>
          </div>
        </div>
      </cdk-virtual-scroll-viewport>
    </div>
    <ng-template #loading>
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </ng-template>

  `,
  styles: [``],
})
export class AppComponent {
  photos: Photo[] | undefined;
  trackById:TrackByFunction<Photo> = (i,p)=>p.id
  constructor(private photoSrv: PhotosService) {}

  ngOnInit(): void {
    this.photoSrv.get().subscribe((photos) => {
      this.photos = photos;
      console.log(photos);
    },(err)=>{
      alert(err)
    });
  }

  onDeletePhoto(id:number,index:number){
    this.photoSrv.delete(id).subscribe((ris)=>{
      console.log(ris)
      this.photos = this.photos?.filter(p=>p.id !== id)
      // this.photos?.splice(index,1)
    },err=>{
      alert(err)
    })

  }

  onFavorite(){
    this.photoSrv.addFavorite()
  }
}
