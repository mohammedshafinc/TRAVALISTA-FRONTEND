import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-userblock',
  templateUrl: './userblock.component.html',
  styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit{
  users: any[] = []
  constructor( private adminServie:AdminService) {}


  ngOnInit(): void {

    this.adminServie.getUsers().subscribe({
      next:(data)=>{
        console.log(data);
        this.users = data.users
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
      
  }

  isBlock(id:any) {
    console.log(id);
    this.adminServie.blockUser(id, 'blocked').subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    
  }

  isUnblock(id:any) {
    console.log(id);
    this.adminServie.blockUser(id, 'unblocked').subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    
  }

}
