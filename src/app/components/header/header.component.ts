import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Observable<boolean>;

  constructor(private authentificationservice:AuthentificationService) {
    this.isLoggedIn = authentificationservice.isLoggedIn();
   }

  ngOnInit(): void {
  }
  Logout(){
    this.authentificationservice.LogoutUser();
  }

}
