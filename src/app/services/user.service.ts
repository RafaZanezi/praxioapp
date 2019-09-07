import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {
    this._url = `https://processoseletivo.azurewebsites.net/swagger/index.html`;
  }

  autenticate(login: string, password: string) {
    const params = {
      email: login,
      senha: password
    };


    return this.http.post<any>(`${this._url}/api/Authorization/RequestToken`, params, this.httpOptions)
    // .pipe(
    //   catchError(this.handleError('addHero', hero))
    // );

  }


}
