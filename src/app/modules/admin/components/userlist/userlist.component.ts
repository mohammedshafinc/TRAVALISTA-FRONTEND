import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit{
  
  users:any

  constructor( private admiservice:AdminService){}
ngOnInit(): void {
    this.admiservice.getUsers().subscribe({
      next:(data)=>{
        console.log(data);
        this.users = data.users
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
}


}
