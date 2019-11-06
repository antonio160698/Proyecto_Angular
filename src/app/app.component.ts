import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TPM';
  name = 'El puto de juan';
  hojitas = ['Mariguana', 'Bella Dona', 'Telefono', 'Julieta'];
  hojaBuena = '';
  usuarios = [];

  constructor(
    private _http: HttpClient
  ){}

  changeTitle(){
    this.title = 'No vales madres para programar puto'
  }

  addHojitas(){
    this.hojitas.push(this.hojaBuena);
  }
  private changeName(){
    this.name = 'juan';
  }
  // borrarUsuario(id: number){
  //   this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
  // }

  ngOnInit(){
    this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe((datos: any[]) => this.usuarios = datos)
  }
}
