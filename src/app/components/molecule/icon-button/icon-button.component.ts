import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@components/atom';

@Component({
  selector: 'ca-icon-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() icon!: string
  @Input() isSvg!: boolean
  @Output() onClick = new EventEmitter<void>
}
