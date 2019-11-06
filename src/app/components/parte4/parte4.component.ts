import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-parte4',
  templateUrl: './parte4.component.html',
  styleUrls: ['./parte4.component.scss']
})
export class Parte4Component implements OnInit {

  constructor(
    private _user: UserService,
    private _api: ApiService
  ) { }

  ngOnInit() {
      this._api.login(16).subscribe(response =>{
        if(response){
          this._user.User = response;
        }
      })
  }

  desactivado: boolean = false;
  tipo = 'submit';
  title = '';
  titulo: string = '';
  log(titulo){
    console.log(titulo);
  }
  seleccion = '';
  show(){
    let numero = Number(this.titulo)
    this._api.login(numero).subscribe(response =>{
      if(response){
        this._user.User = response;
        this.title = this._user.User.title;
      }
    })
    
  }
}
