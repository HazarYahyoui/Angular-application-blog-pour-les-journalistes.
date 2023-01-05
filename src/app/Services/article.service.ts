import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  Article(data : any){
    let createarticle = JSON.parse(localStorage.getItem('createarticle') ||'[]');
    createarticle.push(data);
    localStorage.setItem('createarticle',JSON.stringify(createarticle));
  }

  getAllArticle(){
    return  JSON.parse(localStorage.getItem('createarticle') ||'[]');
  }
}
