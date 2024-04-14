import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Socket } from "socket.io-client";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class ChatService implements OnInit {

    public socket!:Socket

    constructor( private http:HttpClient) {}

ngOnInit(): void {
    
}

    sendMessage(message: String, reciever:String, sender:any) {
        if(this.socket) {
            console.log(message ,reciever, sender);

            console.log('messaging sent to server')
            this.socket.emit('sendMessage', {message, reciever, sender})
        }
    }

    recieveMessage():Observable<any> {
        console.log('servive');
        return new Observable<any>((observer)=>{
            this.socket?.on('recieveMessage', (data:any)=>{
                observer.next(data)
                console.log(data);
                console.log('recieve');
                
            })
        })
    }

    getPreviousMessage(userid:any):Observable<any> {
        return this.http.get(`${environment.userapi}/getpreviousmsg/${userid}`)
    }

    // disconnect(){
    //     this.socket?.disconnect()
    // }
}