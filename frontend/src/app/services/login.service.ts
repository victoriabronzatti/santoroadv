import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'advogados';

  constructor(private http: HttpClient) {}

  public login(user: User): Observable<boolean> {
    return this.http.post<boolean>(
      `${environment.apiUrl}/${this.url}/login`,
        user) ;
  }

}
