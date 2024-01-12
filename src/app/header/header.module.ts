import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    
    MainComponent,
         HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  MainComponent
  ]
})
export class HeaderModule { }
