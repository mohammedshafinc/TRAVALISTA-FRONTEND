import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { PendingComponent } from './components/pending/pending.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { PendingrequestsComponent } from './components/pendingrequests/pendingrequests.component';
import { GuidelistComponent } from './components/guidelist/guidelist.component';

const routes: Routes = [
  {
    path: '',
    component: AdminhomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'pending',
        component: PendingComponent,
      },
      {
        path: 'pendingrequest',
        component: PendingrequestsComponent,
      },
      {
        path: 'adminpage',
        component: AdminpageComponent,
      },
      {
        path:'guidelist',
        component:GuidelistComponent
      }
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
