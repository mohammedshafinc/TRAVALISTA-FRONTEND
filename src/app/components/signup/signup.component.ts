import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  selectedImg: any = null;

  onFileSelected(event: any) {
    this.selectedImg = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (readerEvent: any) => {
      this.selectedImg = readerEvent.target.result;
    };

    reader.readAsDataURL(this.selectedImg);
  }
}
