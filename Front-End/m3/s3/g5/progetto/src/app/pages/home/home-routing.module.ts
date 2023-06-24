import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EditpostComponent } from './editpost/editpost.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditpostComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
