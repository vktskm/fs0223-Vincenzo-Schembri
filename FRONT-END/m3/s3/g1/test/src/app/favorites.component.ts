import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-favorites',
  template: ` <h3>Totale Foto favorite = {{ totFavorites }}</h3> `,
  styles: [],
})
export class FavoritesComponent implements OnInit {
  totFavorites: number = 0;
  constructor(private photosSrv: PhotosService) {}

  ngOnInit(): void {
    this.photosSrv.favoritesSub.subscribe((count) => {
      this.totFavorites = count
    });
  }
}
