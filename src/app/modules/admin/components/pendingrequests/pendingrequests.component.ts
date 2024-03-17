import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-pendingrequests',
  templateUrl: './pendingrequests.component.html',
  styleUrls: ['./pendingrequests.component.scss'],
})
export class PendingrequestsComponent implements OnInit {
  constructor(private adminservice: AdminService) {}
 pendingGuides:any[] = []
 guidearray :any
  ngOnInit(): void {
    this.adminservice.guidePendingStatus().subscribe({
      next: (data) => {
        console.log(data);
       for (const guides of data.pendingGuides){
        this.pendingGuides.push(guides)
        
        console.log(guides.fullname);
        
       }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  isAccept(id:any){
    console.log(id);
    this.adminservice.adminResponseStatus(id, 'accepted').subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    

  }
  isReject(id:any){
    this.adminservice.adminResponseStatus(id, 'rejected').subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
}
