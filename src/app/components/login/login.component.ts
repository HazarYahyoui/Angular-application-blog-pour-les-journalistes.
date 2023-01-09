import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup;
  submitted = false;
 constructor( private authentificationservice :AuthentificationService , private router: Router){ }
  ngOnInit(): void {
   this.loginForm = new FormGroup({
    email : new FormControl ('', [Validators.required, Validators.email]),
    password : new FormControl ('', [Validators.required]),
   });
  }

  addlog(){
    this.submitted = true;
    if(this.loginForm?.invalid){
      return;
    }
    this.authentificationservice.login()
    // this.router.navigateByUrl('/add-articles');
  }

}
