import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TPM';
  name = 'El puto de juan';
  hojitas = ['Mariguana', 'Bella Dona', 'Telefono', 'Julieta'];
  hojaBuena = '';

  changeTitle(){
    this.title = 'No vales madres para programar puto'
  }

  addHojitas(){
    this.hojitas.push(this.hojaBuena);
  }
  private changeName(){
    this.name = 'juan';
  }
}
