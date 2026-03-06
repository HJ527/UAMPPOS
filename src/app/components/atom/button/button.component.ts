import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ButtonStyle } from '@theme/enums';

@Component({
  selector: 'ca-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({ required: true }) text!: string;
  @Output() onClick = new EventEmitter<void>
  @Input() btnStyle: ButtonStyle = ButtonStyle.NORMAL
}
