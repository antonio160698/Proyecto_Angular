import { Injectable } from '@angular/core';
import { Alumno, User } from '../intenfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  Alumno: Alumno
  User: User
}
