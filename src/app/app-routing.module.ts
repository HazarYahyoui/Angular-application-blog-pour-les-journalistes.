import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticlesComponent } from './components/add-articles/add-articles.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
    
  },
  {
    path:'articles',
    component: ArticlesComponent
  },
  {
    path:'add-articles',
    component: AddArticlesComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'**',
    component: Page404Component
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
