import { Component, OnInit } from '@angular/core';
import { BookingDetails } from 'src/app/model/bookingdetails';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-booked-packages',
  templateUrl: './booked-packages.component.html',
  styleUrls: ['./booked-packages.component.scss'],
})
export class BookedPackagesComponent implements OnInit {
  constructor(private paymentservice: PaymentService) {}
  packages: any[] = [];
  msg!:String

  ngOnInit(): void {
    this.paymentservice.bookedPackages().subscribe({
      next: (data) => {
        console.log(data);
        data.userBooked.forEach((booking: any) => {
          console.log(booking.packageid);
          this.packages.push(booking.packageid);
        });
        if(this.packages.length == 0) {
       
         this.msg = ' No Blocked Guides available here'
          
        }
        console.log(this.packages);
      },
    });
  }
}
