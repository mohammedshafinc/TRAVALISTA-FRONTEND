import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { PendingComponent } from './components/pending/pending.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';

const routes: Routes = [
  {
    path: '',
    component:AdminhomeComponent,
    children:[

      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'pendingrequests',
        component:PendingComponent
      },
      {
        path:'adminpage',
        component:AdminpageComponent
      }
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
