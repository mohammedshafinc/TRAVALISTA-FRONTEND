import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Guide } from 'src/app/model/guide';

@Component({
  selector: 'app-guidelist',
  templateUrl: './guidelist.component.html',
  styleUrls: ['./guidelist.component.scss']
})
export class GuidelistComponent implements OnInit{
  constructor ( private adminservices:AdminService){}
  guides :Guide[]=[]

  ngOnInit(): void {
      this.adminservices.getGuides().subscribe({
        next:(data)=>{
          console.log(data);
          this.guides = data.guides
          console.log(this.guides);
          
        },
        error:(error)=>{
          console.log(error);
          
        }
      })
  }

}
