import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-user-blocked-list',
  templateUrl: './user-blocked-list.component.html',
  styleUrls: ['./user-blocked-list.component.scss']
})
export class UserBlockedListComponent {
  msg!:String
  blockeduser:any[] = []
  constructor ( private adminService:AdminService) {}

ngOnInit(): void {
    this.adminService.getAllBlockedUser().subscribe({
      next:(data)=>{
        this.blockeduser = data.blockeduser
        console.log(this.blockeduser);
      if(this.blockeduser.length == 0) {
       
        this.msg = ' No Blocked Guides available here'
        
      }

  
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
}

}
