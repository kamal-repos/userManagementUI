import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {DataService} from './services/data.service';
import { UserComponent } from './components/user/user.component';
import { UserSearchComponent } from './components/user-search/user-search.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
