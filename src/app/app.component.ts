import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This';
  magicNumber = 4;
  saludo = 'Hola soy una propiedad de la clase AppComponent ubicada en el componente ts. :)'
}
