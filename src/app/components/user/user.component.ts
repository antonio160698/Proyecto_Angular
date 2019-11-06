import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core';
import {Usuario, UserType} from '../../intenfaces/newInterface';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('data') dato: any

  // @Output() borrar = new EventEmitter<number>()

  constructor(
    @Host() private _app:AppComponent
  ) {
    console.log(this._app)
   }

  ngOnInit() {
  }
  isLogged: boolean = false;
  nivel: number = 5;
  user: Usuario[] = [
    {
      ID:23,
      Nombre:"Antonio",
      Apellidos:"Elizondo",
      Email:"antonio@gmail.com",
      Nick:"ctm",
      Contraseña:"Hola1234",
      Tipo: UserType.Cliente
    },
    {
      ID:24,
      Nombre:"Gil",
      Apellidos:"Lozano",
      Email:"gil@gmail.com",
      Nick:"tuma",
      Contraseña:"Hola1234",
      Tipo: UserType.Tecnico
    }
  ];

  mostrar(){
    console.log(this.user[0]);
    console.log(this.user[1]);
  }

  BorrarUsuario(id: number){
    // this.borrar.emit(id)
    this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id)
  }

}
