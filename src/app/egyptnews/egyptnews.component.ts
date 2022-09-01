import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-egyptnews',
  templateUrl: './egyptnews.component.html',
  styleUrls: ['./egyptnews.component.css']
})
export class EgyptnewsComponent implements OnInit {
  text = ""
   allnews:any = {};
  constructor(public _egynews:HeroService) {
    this._egynews.GetEgyptNews().subscribe((news)=>{
      this.allnews = news.articles;

    });
   }

  ngOnInit(): void {
  }

}
