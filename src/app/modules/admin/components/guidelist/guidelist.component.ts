import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-guidelist',
  templateUrl: './guidelist.component.html',
  styleUrls: ['./guidelist.component.scss']
})
export class GuidelistComponent implements OnInit{
  constructor ( private adminservices:AdminService){}

  ngOnInit(): void {
      this.adminservices.getGuides().subscribe({
        next:(data)=>{
          console.log(data);
          
        },
        error:(error)=>{
          console.log(error);
          
        }
      })
  }

}
