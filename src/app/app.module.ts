import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { EgyptnewsComponent } from './egyptnews/egyptnews.component';
import { UsanewsComponent } from './usanews/usanews.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from"@angular/common/http";
import { CutPipe } from './cut.pipe';
import { UsadetComponent } from './usadet/usadet.component';
import { EgydetComponent } from './egydet/egydet.component';

@NgModule({
  declarations: [
    AppComponent,
    EgyptnewsComponent,
    UsanewsComponent,
    NavbarComponent,
    CutPipe,
    UsadetComponent,
    EgydetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
