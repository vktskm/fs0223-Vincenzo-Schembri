import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Ipost } from './ipost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  postAr:Ipost[]=[];

  newPost:Partial<Ipost> = {
    nome:'',
    cognome:'',
    eta:0
  }

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.postSvc.getAll().subscribe((post)=>{
      this.postAr = post;
    })
  }

  create(){
  this.postSvc.post(this.newPost)
    .subscribe(data=>{
       this.postAr.push(data)
    })
  }

  delete(id:number){
    this.postSvc.delete(id)
    .subscribe(data=>{
      let index = this.postAr.findIndex(p => p.id == id)
      this.postAr.splice(index,1)
    })
  }

}
