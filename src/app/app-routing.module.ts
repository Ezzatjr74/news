import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EgyptnewsComponent} from './egyptnews/egyptnews.component';
import{UsanewsComponent} from './usanews/usanews.component';
import { EgydetComponent } from './egydet/egydet.component';
import { UsadetComponent } from './usadet/usadet.component';


const routes: Routes = [
  {path:'app-egyptnews' ,component:EgyptnewsComponent},
  {path:'app-usanews' ,component:UsanewsComponent},
  {path:'app-egydet/:id' ,component:EgydetComponent},
  {path:'app-usadet/:id' ,component:UsadetComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
