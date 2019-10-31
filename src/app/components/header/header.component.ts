import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import {Usuario, UserType} from '../../intenfaces/newInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  //encapsulation: ViewEncapsulation.None se aplican todos los estilos
})
export class HeaderComponent implements OnInit {

  constructor() { console.log('conponente header creandose')}

  ngOnInit() {
    console.log('componente header creado');
  }
  nombre = "No se Editar";
  contador = 0;
  arr = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];
  user: Usuario = <Usuario>{
    ID:24,
    Nombre:"Gil",
    Apellidos:"Lozano",
    Email:"gil@gmail.com",
    Nick:"tuma",
    Contraseña:"Hola1234",
    Tipo: UserType.Administrador
  }
  cambiarNombre(){
    this.nombre = 'Carlos';
  }
  suma(){
    this.contador++;
  }
  add(){
    this.arr.push(Math.random()*100);
  }

}
