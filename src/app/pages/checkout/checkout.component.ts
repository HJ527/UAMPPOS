import { Component } from '@angular/core';
import { CardImageComponent } from '@components/organism';
import { IconComponent, ButtonComponent } from '@components/atom';
import { CurrencyPipe } from '@angular/common';
import { ButtonStyle } from '@theme/enums';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CardImageComponent, IconComponent, CurrencyPipe, ButtonComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  btnStyle = ButtonStyle;
}
