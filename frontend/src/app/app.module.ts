import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { MenuComponent } from './menu/menu.component';

import { AtuacaoComponent } from '../app/atuacao/atuacao.component';
import { HomeComponent } from '../app/home/home.component';
import { SobreComponent } from '../app/sobre/sobre.component';
import { SociosComponent } from '../app/socios/socios.component';
import { ContatoComponent } from './contato/contato.component';

import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
    MenuComponent,
    AtuacaoComponent,
    HomeComponent,
    SobreComponent,
    SociosComponent,
    ContatoComponent
   ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    TabMenuModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    RouterModule.forRoot([
				{path:'',component: AppComponent},
    ])
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
