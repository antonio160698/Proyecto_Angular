import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno, User } from '../intenfaces/interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = 'https://jsonplaceholder.typicode.com';

  headers = new HttpHeaders().set('Access-Control-Allow-Origin','*')
  .set('Access-Control-Allow-Credentials', 'true')
  .set('Access-Control-Max-Age', '86400');

  login(matricula: number){
    return this._http.get<User>(`${this.api_url}/todos/${matricula}`,
    {headers: this.headers});
  }
}
