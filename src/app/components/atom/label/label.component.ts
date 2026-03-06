import { Component, Input } from '@angular/core';

@Component({
  selector: 'ca-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input() target?:string;
  @Input({required:true}) label!:string
}
