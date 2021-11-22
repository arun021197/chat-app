import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatappComponent } from './chatapp/chatapp.component';

const routes: Routes = [

  
    {
      path:"",
      component:ChatappComponent
    },
    
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
