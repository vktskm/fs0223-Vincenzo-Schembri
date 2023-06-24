import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PhotoPostService } from 'src/app/Service/photo-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {


   constructor(private postSvc:PhotoPostService){}

    postArr:Post[] = [];
    likeArr:Post[] = [];

    ngOnInit(): void {

    this.getArr()

    }

    getArr(){
      this.postSvc.get().subscribe(res => {//mi iscrivo all'observable
        this.postArr = res;//appena ricevuti i dati vado a popolare l'array userArr per mostrare i dati in arrivo
      })
    }

    deleteArr(id?:number){
      this.postSvc.delete(id).subscribe(res=>{
        this.getArr();
      })
    }

    like( id:any){
      if(this.likeArr.includes(id))//non mi aggiunge niente se
      {
         console.log("La card è gia selezionata")
      }else{
              this.likeArr.push(id);
         }
    }



  }
