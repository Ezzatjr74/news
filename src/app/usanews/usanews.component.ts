import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-usanews',
  templateUrl: './usanews.component.html',
  styleUrls: ['./usanews.component.css']
})
export class UsanewsComponent implements OnInit {
 
  allnews:any = [];
  a:any
  constructor(public _usanews:HeroService) {
    this._usanews.GetUsaNews().subscribe((news)=>{
      this.allnews =news.articles;
    })
  }
  ngOnInit(): void {
  }

}
