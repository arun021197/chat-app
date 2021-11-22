import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {

  Arun:boolean=false;
  Habib:boolean=false;
  arundp:any;
  habibdp:any
 
  profiledp:any;
  
  constructor(private chat:ChatserviceService) { }

  ngOnInit(): void {
    this.arundp=this.chat.arundp;
    this.habibdp=this.chat.habibdp;
  }
  arun(){
    this.Habib=false;
    this.Arun=true;
    this.profiledp=this.habibdp
  }
  habib(){
    this.Habib=true;
    this.Arun=false;
    this.profiledp=this.arundp;
  }

}
