import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
  // template: `<img [src]="{{ imagenURL }}" />`,
})
export class ClaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imagenURL= "http://lorempixel.com/400/200"
}
