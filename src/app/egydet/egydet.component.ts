import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-egydet',
  templateUrl: './egydet.component.html',
  styleUrls: ['./egydet.component.css']
})
export class EgydetComponent implements OnInit {
 
id:any;  
article:any;
constructor(public _ActivatedRoute:ActivatedRoute,public _HeroService:HeroService) {
 
  this._HeroService.GetEgyptNews().subscribe((news)=>{

  this.id = this._ActivatedRoute.snapshot.paramMap.get("id");
   this.article = news.articles[this.id];
  })
}
  ngOnInit(): void {
  }
}
