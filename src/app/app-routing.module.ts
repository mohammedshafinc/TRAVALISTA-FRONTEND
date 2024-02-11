import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './modules/user/user.component';
import { UserhomeComponent } from './modules/user/components/userhome/userhome.component';

const routes: Routes = [
  {
    path: 'userregistration',
    component: SignupComponent,
  },
  {
    path: 'guideregistration',
    component: GuidesignupComponent,
  },
  {
    path: 'userlogin',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'user',loadChildren:()=> import('./modules/user/user.module').then(m =>m.UserModule)

  },
  { path: '**', component:NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
