import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatappComponent } from './chatapp/chatapp.component';
import { Chat1Component } from './chat1/chat1.component';
import { Chat2Component } from './chat2/chat2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatappComponent,
    Chat1Component,
    Chat2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
