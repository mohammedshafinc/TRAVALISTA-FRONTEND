import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-show-blocked-guides',
  templateUrl: './show-blocked-guides.component.html',
  styleUrls: ['./show-blocked-guides.component.scss']
})
export class ShowBlockedGuidesComponent implements OnInit{
  msg!:String
  blockedguides:any[] = []
  constructor ( private adminService:AdminService) {}

ngOnInit(): void {
    this.adminService.getAllBlockedGuide().subscribe({
      next:(data)=>{
        this.blockedguides = data.blockedguides
        console.log(this.blockedguides);
      if(this.blockedguides.length == 0) {
       
        this.msg = ' No Blocked Guides available here'
        
      }

  
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
}

}
