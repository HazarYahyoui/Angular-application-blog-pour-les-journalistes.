import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm?: FormGroup;
  submitted = false;
 constructor( private authentificationservice :AuthentificationService, private router: Router){ }

  ngOnInit(): void {
   this.registerForm = new FormGroup({
    firstName : new FormControl ('', [Validators.required]),
    lastName : new FormControl ('', [Validators.required]),
    email : new FormControl ('', [Validators.required, Validators.email]),
    password : new FormControl ('', [Validators.required]),
   });
  }

  add(){
    this.submitted = true;
    if(this.registerForm?.invalid){
      return;
    }
    console.log(this.registerForm?.value)
   this.authentificationservice.register(this.registerForm?.value)
    this.router.navigateByUrl('/login');
   
  }
   

}

