import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './components/padre/padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // aqui en import iran todo lo que quiero importar en mi apphtml
  imports: [RouterOutlet, PadreComponent],
  // template:'<h1> hola</h1>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


// aqui tendremos toda la lógica
export class AppComponent {

// creamos una variable que es título 
  title: string = 'primer-proyecto';
// nombre de tipo string y valor de la variable
  nombre: string = "pepe";
  esNuevo: boolean = true;
  numeros: number[] = [1, 2, 3];
  letas: string[] = ["a","b", this.title ] //para referirme a una variable tengo que poner this.nombrevariable
  numero: number = 0;

  test(letra: string, numero: number){
  } //puedo decir de que tipo son mis variables en las funciones
  funcion1(){
    this.test("a",1)
  }
  // algo tambien puede ser de varios tipos pero debemos evitarlo 
  mivariable: string|number|boolean = true;
  // funciones que hacen que mi contador sume y reste
  sumar(){
    this.numero = this.numero +1
  }
  restar(){
    this.numero= this.numero -1
  }


}
// las variables que yo he creado son accesibles desde html
