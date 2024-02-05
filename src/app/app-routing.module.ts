import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
    path:'userregistration',
    component:SignupComponent
  },
  {
    path:'guideregistration',
    component:GuidesignupComponent
  },
  {
    path:'userlogin',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
