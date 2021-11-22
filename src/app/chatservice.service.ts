import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  c1toc2chat:any
  c2Lastseen:any;
  c1Lastseen:any;
  habibdp="../../assets/c2.jpg"
  arundp="../../assets/c1.jpg"
    constructor() { 
      this.c1toc2chat=[];
    }
  
  
    customer2agent(array:any){
      this.c1toc2chat=array
    }
    cuslstsee(time:any){
      this.c2Lastseen=time;
    }
    agelastsee(time:any){
      this.c1Lastseen=time;
    }
}
