import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path:'userhome',
        component:UserhomeComponent

    }
];

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class UserRoutingModule {}
