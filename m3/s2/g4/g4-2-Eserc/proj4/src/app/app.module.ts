import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './components/post-non-attivi/post-non-attivi.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'postAttivi',
        component: PostAttiviComponent,
    },
    {
        path: 'postNonAttivi',
        component: PostNonAttiviComponent,
    },
    {
        path: '**',
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        NavbarComponent,
        HomeComponent,
        PostAttiviComponent,
        PostNonAttiviComponent,
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
