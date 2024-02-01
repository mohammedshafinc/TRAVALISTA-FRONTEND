import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';

const routes: Routes = [

  {
    path:'userregistration',
    component:SignupComponent
  },
  {
    path:'guideregistration',
    component:GuidesignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
