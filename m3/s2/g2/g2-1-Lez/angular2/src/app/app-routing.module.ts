import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { ContattiComponent } from './pages/contatti/contatti.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'chi-siamo',
    component: ChiSiamoComponent
  },
  {
    path:'contatti',
    component: ContattiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
