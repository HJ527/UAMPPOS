import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonIconDirection, ButtonStyle } from '@theme/enums';
import { IconComponent } from '../icon/icon.component';
import { NgStyle, NgClass } from '@angular/common';
import { CustomSize } from '@theme/types';

@Component({
  selector: 'ca-button',
  standalone: true,
  imports: [IconComponent, NgStyle, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'btnStyle',
    '[attr.role]': '"button"',
  },
})
export class ButtonComponent {
  @Input({ required: true }) text!: string;
  @Input() btnStyle: ButtonStyle = ButtonStyle.PRIMARY;
  @Input() icon?: string;
  @Input() iconDirection: ButtonIconDirection = ButtonIconDirection.TOP;
  @Input() iconHeight: CustomSize = '1.6rem';
  @Input() iconWidth: CustomSize = '1.6rem';
  @Output() onClick = new EventEmitter<void>();
}
