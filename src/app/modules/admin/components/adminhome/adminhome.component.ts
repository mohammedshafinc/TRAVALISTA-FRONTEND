import { Component } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent {

    isExpand:boolean = false

    toggleSideBar(){
        this.isExpand = !this.isExpand
    }
  
  

}
