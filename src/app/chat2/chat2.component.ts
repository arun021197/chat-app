import { Component, OnInit,OnDestroy } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit ,OnDestroy{

  senderName: any;
  c1toc2:any
  c2lastseen:any;
  c1lastseen:any;
  habibdp: any;
  constructor(private c2:ChatserviceService) {
    this.senderName="Arun";
    this.c1toc2=c2.c1toc2chat;
   }

  ngOnInit(): void {
    this.c1lastseen=this.c2.c1Lastseen;
    this.habibdp=this.c2.habibdp;
  }
  
  sent(textmsg:any){
    let msgObj = {
      senderName: "Habib",
      msg: textmsg,
      time:new Date()
     
      
    }
    this.c1toc2.push(msgObj);
    this.c2.c1toc2chat(this.c1toc2)
    
  }
  ngOnDestroy(){
    this.c2lastseen=new Date;
    this.c2.cuslstsee(this.c2lastseen)
  }
}
