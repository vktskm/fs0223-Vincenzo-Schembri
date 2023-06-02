import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CreaPizzaComponent } from './pages/crea-pizza/crea-pizza.component';
import { ModificaPizzaComponent } from './pages/modifica-pizza/modifica-pizza.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
{
  path:'home',
  component: HomeComponent
},
{
  path:'menu',
  component: MenuComponent
},
{
  path:'menu/aggiungi',
  component: CreaPizzaComponent
},
{
  path: 'menu/aggiorna/:id',
  component: ModificaPizzaComponent
},
{
  path:'**',//va messa per ultima
  component: NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
