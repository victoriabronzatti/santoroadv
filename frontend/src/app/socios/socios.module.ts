import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SociosComponent } from './socios.component';
import {AccordionModule} from 'primeng/accordion';
@NgModule({
  imports: [
    CommonModule,
    AccordionModule
  ],
  declarations: [SociosComponent]
})
export class SociosModule { }
