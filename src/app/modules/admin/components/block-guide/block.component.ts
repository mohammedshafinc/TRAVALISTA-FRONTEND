import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Guide } from 'src/app/model/guide';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
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

  isBlock(id:any){
    console.log(id);
    this.adminservices.blockGuide(id, 'blocked').subscribe({
      next:(data)=>{
        console.log(data); 
      },
      error:(error)=>{
        console.log(error);  
      }
    })
    
  }
  isUnblock(id:any){
    console.log(id);
    this.adminservices.blockGuide(id, 'unblocked').subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    
  }


}
