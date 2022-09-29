import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  imports: [
    CommonModule,
    AccordionModule
  ],
  declarations: []
})
export class MenuModule { }
