import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule  
  ],
  exports:[
    HeaderComponent,
    FooterComponent,

  ]
})
export class SharedBusinessModule { }
