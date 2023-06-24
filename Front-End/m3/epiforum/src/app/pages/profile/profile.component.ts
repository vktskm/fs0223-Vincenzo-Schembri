import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IauthResponse } from 'src/app/interfaces/IauthResponse';
import { AuthService } from 'src/app/service/auth.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(private router: Router, private profileSvc: ProfileService, private svc: AuthService) { }

  user!: IauthResponse

  ngOnInit(): void {
    const userJson = localStorage.getItem("user")
    if (!userJson) {
      this.router.navigate(['/login'])
    } else {
      const userParsed = JSON.parse(userJson)
      this.user = userParsed
      this.user.user.password = ''
    }
  }

  edit(form: NgForm,) {
    this.profileSvc.editProfile(form, this.user.user.id).subscribe((res) => {
      console.log(res),
        this.user.user = res
      const userStg = JSON.stringify(this.user)
      localStorage.setItem("user", userStg)
      this.svc.restoreUser()
      this.router.navigate([""])
    })
  }



}
