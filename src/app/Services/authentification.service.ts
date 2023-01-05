import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   email: any; 
  password: any;

  constructor(private router:Router) { }


  register(data:any){
  let users = JSON.parse(localStorage.getItem('users') ||'[]');
  users.push(data);
  localStorage.setItem('users',JSON.stringify(users));
  }

  login(){
    let users = JSON.parse(localStorage.getItem('users') ||'[]');
    let userFound = users.find((users: any) => users[this.email] === this.email && users[this.password] === this.password);
    if(userFound!=undefined){
      console.log(userFound);
    localStorage.setItem('Conect',JSON.stringify(userFound));
    }
  }
}