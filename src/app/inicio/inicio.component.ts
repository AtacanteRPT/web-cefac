import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    // this.appComponent.cambioTab('Inicio');
  }

}

