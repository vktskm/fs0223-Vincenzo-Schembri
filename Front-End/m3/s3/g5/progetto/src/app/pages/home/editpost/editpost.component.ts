import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Ipost } from '../ipost';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss']
})
export class EditpostComponent {

  post:Partial<Ipost> = {
    nome:'',
    cognome:'',
    eta:0
  }

  constructor(
    private postSvc:PostService,
    private router:Router,
    private route:ActivatedRoute,
    ){}

  ngOnInit(){

    this.route.params
    .subscribe((params:any)=>{

      this.postSvc.getById(params.id).subscribe((post)=>{
          this.post = post
      })
    })



  }

  edit(){
    this.postSvc.put(this.post)
    .subscribe((post)=>{
      this.router.navigate(['/home'])
    })
  }

}
