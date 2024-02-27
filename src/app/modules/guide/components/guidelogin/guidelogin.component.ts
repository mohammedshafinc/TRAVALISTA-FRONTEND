import { Component } from '@angular/core';

@Component({
  selector: 'app-guidelogin',
  templateUrl: './guidelogin.component.html',
  styleUrls: ['./guidelogin.component.scss']
})
export class GuideloginComponent {
  visible: boolean = true;
  changetype: boolean = true;
  
  viewPass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


}
