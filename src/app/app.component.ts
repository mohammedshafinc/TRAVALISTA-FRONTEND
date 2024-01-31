
import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travalista';

  data:any = ""
  constructor(private commonservice:CommonService){}

  submit(){
    this.commonservice.apiCall().subscribe((data)=>{
      this.data = data
    })


  }
}
