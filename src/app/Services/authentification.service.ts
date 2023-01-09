import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   email: any; 
  password: any;
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  constructor(private route:Router) { }


  register(data:any){
  let users = JSON.parse(localStorage.getItem('users') ||'[]');
  users.push(data);
  localStorage.setItem('users',JSON.stringify(users));
  }

  login(){
    let users = JSON.parse(localStorage.getItem('users') ||'[]');
    let user = users.find((users: any) => users[this.email] === this.email && users[this.password] === this.password);
    if(user!=undefined){
      console.log(user);
    localStorage.setItem('Conect',JSON.stringify(user));
    localStorage.setItem('token','JWT');
    this.route.navigateByUrl('/add-articles')
    this.isLoginSubject.next(true);
   }
  }

  LogoutUser(){
    localStorage.removeItem("Conect");
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.route.navigate(['/login'])
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}