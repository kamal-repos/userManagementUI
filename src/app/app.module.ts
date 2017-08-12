import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'user', component:UserComponent},
  {path:'contact-us', component:ContactUsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
