import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Socio } from 'src/app/models/socio';
import { SociosService } from '../../socios.service';

@Component({
  selector: 'app-update-socios',
  templateUrl: './update-socios.component.html',
  styleUrls: ['./update-socios.component.scss']
})
export class UpdateSociosComponent implements OnInit {
  @Input() socio: Socio = new Socio();

  constructor(private sociosService : SociosService) { }

  async ngOnInit(): Promise<void> {
    await this.getById(1);
  }
  
  async updateSocio(socio:Socio){
    await this.sociosService.updateSocio(socio);
      
    };

    async getById(id :number) {
       await (await this.sociosService.getById(id)).subscribe({
        next: async (resp: Socio) => (this.socio = resp),
        error: (error) => console.error(error),
        complete: () => {
          console.log(this.socio); 
        },
       });
    }


    

}
