import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SociosService {
  private url = "advogados";

  constructor(private http : HttpClient) { }

  public getSocios() : Observable<Socio[]>{
  return this.http.get<Socio[]>(`${environment.apiUrl}/${this.url}`);
  }


}
