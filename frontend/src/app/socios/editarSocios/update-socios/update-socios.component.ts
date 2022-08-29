import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }
  
  async updateSocio(socio:Socio){
    await this.sociosService.updateSocio(socio);
      
    };


}
