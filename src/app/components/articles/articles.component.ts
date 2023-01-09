import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { Router } from '@angular/router';
// import { map, Observable, startWith } from 'rxjs';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  // options = JSON.parse(localStorage.getItem('createarticle') ||'[]');
  articles:any;

  // myControl = new FormControl();
  // filteredOptions!: Observable<string[]>;
  
  constructor(private articleservise:ArticleService, private router: Router){}
  
  ngOnInit(): void {
  this.articles=this.articleservise.getAllArticle()
  
  // this.filteredOptions = this.myControl.valueChanges.pipe(
  //   startWith(''),
  //   map(value => this._filter(value))
  // )

}
// private _filter(value: string): string[]{
//   const filterValue = value.toLowerCase();
//   return this.options.filter((option: string) => 
//     option.toLowerCase().includes(filterValue));
//  }

//  displayFn(subject:any){
//   return subject? subject.name : undefined
// }
  
}



