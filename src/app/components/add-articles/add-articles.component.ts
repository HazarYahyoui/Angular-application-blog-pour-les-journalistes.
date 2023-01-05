import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit{
  AddArticleForm?: FormGroup;
  submitted = false;
 constructor(private articleservice: ArticleService,   private router: Router){ }

  ngOnInit(): void {
    this.AddArticleForm = new FormGroup({
      titre : new FormControl ('', [Validators.required]),
      image : new FormControl ('', [Validators.required]),
      article : new FormControl ('', [Validators.required]),
     });
  }
  addArticle(){
    this.submitted = true;
    if(this.AddArticleForm?.invalid){
      return;
    }
    this.articleservice.Article(this.AddArticleForm?.value)
    this.router.navigateByUrl('/articles');
  }

}
