import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SociosService {
  private url = 'advogados';

  constructor(private http: HttpClient) {}

  public getSocios(): Observable<Socio[]> {
    return this.http.get<Socio[]>(`${environment.apiUrl}/${this.url}`);
  }

  public async updateSocio(socio: Socio): Promise<void> {
    await this.http.put<Socio>(`${environment.apiUrl}/${this.url}`, socio);
  }

  public async getById(id:number) : Promise<Observable<Socio>> {
    return await this.http.get<Socio>(`${environment.apiUrl}/${this.url}/${id}`);
    
  }
}
