import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})

export class ActivePostsComponent implements OnInit{

  @Output() onChangeStatus = new EventEmitter();
  constructor( private posts: PostService) {}

  postAttivi: Post[] = [];
  postInattivi: Post[] = [];
  arrayTot: Post[]= this.posts.getPost();


  ngOnInit(): void {
    //console.log(this.arrayTot);
    this.arrayTot.forEach((element)=>{
      if(element.active == true){
         this.postAttivi.push(element);
      }else{
             this.postInattivi.push(element);
            }
    });
  }

  changeStatus(idSelezionato: number) {
    console.log(idSelezionato);
    this.arrayTot.forEach((element, index) => {
      if (element.id == idSelezionato) {
        if (element.active == true) {
          element.active = false;
          this.postInattivi.push(element);
        } else {
          element.active = true;
          this.postAttivi.push(element);
          this.postInattivi.splice(index);
        }
      }
    });
    console.log(this.postAttivi);
    console.log(this.postInattivi);
  }

}
