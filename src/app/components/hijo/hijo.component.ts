import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
@Input() nombre: string = ""
// esta variable tiene un valor por defecto pero al ponerle @input hago que desde padre pueda cambiarlo
@Input() contadorHijo!: number
// ! es para no tener un valor por defecto
@Input() colorHijo: string = "green";
}
