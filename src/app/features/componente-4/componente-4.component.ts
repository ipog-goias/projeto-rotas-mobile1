import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-4',
  standalone: true,
  imports: [],
  templateUrl: './componente-4.component.html',
  styleUrl: './componente-4.component.css'
})
export class Componente4Component {
  @Input() name!: string;
}
