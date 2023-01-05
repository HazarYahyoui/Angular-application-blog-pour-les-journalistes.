import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  articles:any;
  constructor(private articleservise:ArticleService, private router: Router){}
  ngOnInit(): void {
  this.articles=this.articleservise.getAllArticle()
  }

}


