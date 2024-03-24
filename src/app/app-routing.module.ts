import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './modules/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AuthGuard } from './guards/authguard.guard';
import { GuidesignupComponent } from './modules/guide/components/guidesignup/guidesignup.component';
import { GuideloginComponent } from './modules/guide/components/guidelogin/guidelogin.component';
import { ShowpackagedetailsComponent } from './components/show-package-details/showpackagedetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'userregistration',
    component: SignupComponent,
  },
  {
    path: 'userlogin',
    component: LoginComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  
  {
    path: 'guideregister',
    component: GuidesignupComponent,
  },
  {
    path: 'guidelogin',
    component: GuideloginComponent,
  },
  {
    path: 'showpackagedetails/:packageid',
    component: ShowpackagedetailsComponent
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'guide', 
    loadChildren: () =>
      import('./modules/guide/guide.module').then((m) => m.GuideModule),
  },
  {
    path:'admin',
    loadChildren:()=> import('./modules/admin/admin.module').then((m)=> m.AdminModule)
  },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
