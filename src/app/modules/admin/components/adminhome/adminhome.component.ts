import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit{

    isExpand:boolean = false

    toggleSideBar(){
        this.isExpand = !this.isExpand
        localStorage.setItem('isSidebarExpand', this.isExpand.toString())
    }

    ngOnInit(): void {
        const storeExoandState = localStorage.getItem('isSidebarExpand')
        if(storeExoandState){
          this.isExpand = storeExoandState === 'true'
        }
    }
  
  

}
