import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { io, Socket } from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';
import { GuideService } from 'src/app/services/guide.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  message!: any;
  reciever!: String;
  recievedMsg: any[] = [];
  socket!: Socket;
  recievername: any;
  recieverImg: any;
  id: any;
  recieverGuide!: any;
  guideid:any
  recieverUser:any
  guideId:any

  constructor(
    private chatservice: ChatService,
    private route: ActivatedRoute,
    private signupserv: SignupService,
    private GuideService: GuideService
  ) {}

  ngOnInit() {
    this.id = this.signupserv.tokendecode();
    console.log(this.id);
    this.connectSocket();
    
   
    this.getpreviousmsg()
    console.log(this.route.params);
    if (this.id.type == 'user') {
      this.route.params.subscribe({
        next: (data) => {
          console.log(data);
          if (data !== undefined) {
            this.reciever = data['id'];
            console.log(this.reciever);
            console.log(this.id.type);

          
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
    this.recievedMessage();
    this.getProfile();
   
  }

  getProfile() {
    console.log(this.reciever)
    if (this.id.type == 'user') {
      this.GuideService.SingleGuide(this.reciever).subscribe({
        next: (data) => {
          console.log(data);
          // GET DETAILS OF RECIEVER
          this.guideid = data.guide._id
          console.log(this.guideid);
          
          this.recievername = data.guide.fullname;
          // console.log(this.recievername);
          this.recieverImg = data.guide.files;
          // console.log(this.recieverImg)
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else if(this.id.type == 'guide') {
      
      
      console.log();
      
      console.log(this.recieverUser);
      
      this.GuideService.singleUser(this.recieverUser).subscribe({
        next: (data) => {
          console.log('hiiii');
          console.log(data);
          

          console.log(data);
          // GET DETAILS OF RECIEVER
          this.recievername = data.user.fullname;
          console.log(this.recievername);
          // this.recieverImg = data.guide.files;
          // console.log(this.recieverImg)
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  send() {
    if (this.id.type == 'user') {
      console.log(this.message);
      if (this.message !== '') {
        console.log(this.chatservice.socket);
        this.chatservice.sendMessage(this.message, this.reciever, this.id.id);
        console.log(this.message, this.recievedMsg, this.id.id);
        const time = new Date();
        const myMsg = {
          message: this.message,
          sender: this.id.id,
          reciever: this.reciever,
          timeDisplay: `${time.getHours()}:${time.getMinutes()}`,
        };
        this.recievedMsg.push(myMsg);
        this.message = '';
      }
    } else {
      console.log('this guide chat');
      console.log(this.chatservice.socket);
      console.log(this.recieverUser);
      
      this.chatservice.sendMessage(
        this.message,
        this.recieverUser,
        this.id.id
      );
      console.log(this.message, this.recieverUser, this.id.id);
      const time = new Date();
      const myMsg = {
        message: this.message,
        sender: this.id.id,
        reciever: this.recieverUser,
        timeDisplay: `${time.getHours()}:${time.getMinutes()}`,
      };
      this.recievedMsg.push(myMsg);
      this.message = '';
    }
  }
  connectSocket() {
    this.chatservice.socket = io('http://localhost:3000', {
      auth: {
        userid: `${this.id.id}`,
      },
    });
  }

  recievedMessage() {
    if (this.id.type == 'guide') {

      this.chatservice.recieveMessage().subscribe({
        next: (data) => {
          console.log(data);
          this.recieverUser = data.sender;
          console.log(this.recieverUser);
          this.getProfile()
  
          this.recievedMsg.push(data);
          console.log(this.recievedMsg);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.chatservice.recieveMessage().subscribe({
        next: (data) => {
          console.log(data);
          this.recievedMsg.push(data);
        }
      })
    }
   
  }

  getpreviousmsg(){
    console.log('recieve gui', this.recieverGuide);
    if (this.id.type === 'guide'){
      console.log('rec', this.reciever);

      this.chatservice.getPreviousMessage(this.reciever).subscribe({
        next:(data) =>{
          this.recievedMsg = data
          
          
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
    // } else {
    //   this.chatservice.getPreviousMessage().subscribe({
    //     next:(data) =>{
    //       this.recievedMsg = data
    //       console.log('rec', this.reciever);
          
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     }
    //   })
    // }
  }
}
