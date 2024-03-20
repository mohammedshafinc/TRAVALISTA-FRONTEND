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
import { PackageslistComponent } from './components/packageslist/packageslist.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { BlockComponent } from './components/block-guide/block.component';
import { ShowBlockedGuidesComponent } from './components/show-blocked-guides/show-blocked-guides.component';
import { UserblockComponent } from './components/block-user/userblock.component';
import { UserBlockedListComponent } from './components/user-blocked-list/user-blocked-list.component';

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
      },
      {
        path:'packagelist',
        component:PackageslistComponent
      },
      {
        path:'userlist',
        component:UserlistComponent
      },
      {
        path:'blockguide',
        component:BlockComponent
      },
      {
        path:'showblockedGuides',
        component:ShowBlockedGuidesComponent
      },
      {
        path:'blockuser',
        component:UserblockComponent
      },
      {
        path:'showblockeduser',
        component:UserBlockedListComponent
      }
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
