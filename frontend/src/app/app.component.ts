import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {TabMenuModule} from 'primeng/tabmenu';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
  
})
export class AppComponent {
  title = 'ALVES, SOUZA E CASTRO';
  activeState: boolean[] = [true, false, false];

  constructor(
    private tabMenuModule: TabMenuModule,
    private messageService: MessageService
    ) {
      
    }

    onTabClose(event: { index: string; }) {
      this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
  }
  
  onTabOpen(event: { index: string; }) {
      this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }

  toggle(index: number) {
      this.activeState[index] = !this.activeState[index];
  }
}
