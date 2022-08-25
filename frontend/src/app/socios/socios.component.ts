import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Socio } from '../models/socio';
import { SociosService } from './socios.service';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.scss'],
})
export class SociosComponent implements OnInit {
  socios: Socio[] = [];
  socioToEdit?: Socio;
  sociosOrdem : Socio[] = [];

  constructor(private socioService: SociosService) {
  }

  async ngOnInit() {
    await this.socioService.getSocios().subscribe({
      next: async (resp: Socio[]) => (this.socios = resp),
      error: (error) => console.error(error),
      complete: () => {
        this.sociosOrdem.push(this.socios.filter((adv) => adv.nome == 'Luiz Felipe Guimarães Santoro' )[0]); 
        this.sociosOrdem.push(this.socios.filter((adv) => adv.nome == 'Larissa Caropreso Herrera' )[0]);
        this.sociosOrdem.push(this.socios.filter((adv) => adv.nome == 'Andreza Andries' )[0]);
        this.sociosOrdem.push(this.socios.filter((adv) => adv.nome == 'Ricardo Issao Kaneshiro' )[0]);          
      },
    });
  }
}
