import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte4',
  templateUrl: './parte4.component.html',
  styleUrls: ['./parte4.component.scss']
})
export class Parte4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  desactivado: boolean = false;
  tipo = 'submit';
  titulo: string = '';
  log(titulo){
    console.log(titulo);
  }
  seleccion = '';
}
