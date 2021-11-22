import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.css']
})
export class Chat1Component implements OnInit,OnDestroy {
  senderName: string;
  c1toc2:any;
  c1lastseen:any
  c2lastseen:any
  arundp: any;


  constructor(private c1:ChatserviceService) {
    this.senderName="Habib";
    this.c1toc2=c1.c1toc2chat;
    console.log(this.c1toc2);
   }

  ngOnInit(): void {
      this.c1lastseen=this.c1.c2Lastseen;
      this.arundp=this.c1.arundp;
  }
  
  sent(textmsg:any){
    let msgObj = {
      senderName: "Arun",
      msg: textmsg,
      time:new Date()

    }

    this.c1toc2.push(msgObj);
    this.c1.c1toc2chat(this.c1toc2)
    
  }
  ngOnDestroy(){
    this.c2lastseen=new Date;
    this.c1.agelastsee(this.c2lastseen)

  }

}
