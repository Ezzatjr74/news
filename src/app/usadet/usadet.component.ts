import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-usadet',
  templateUrl: './usadet.component.html',
  styleUrls: ['./usadet.component.css']
})
export class UsadetComponent implements OnInit {
  id:any;  
  article:any;
  constructor(public _ActivatedRoute:ActivatedRoute,public _HeroService:HeroService) {
   
    this._HeroService.GetUsaNews().subscribe((news)=>{
  
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id");
     this.article = news.articles[this.id];
    }) }

  ngOnInit(): void {
  }

}
