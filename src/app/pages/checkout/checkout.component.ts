import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardImageComponent } from '@components/organism';
import {
  IconComponent,
  ButtonComponent,
  ChipComponent,
} from '@components/atom';
import { CurrencyPipe } from '@angular/common';
import { ButtonStyle } from '@theme/enums';
import { HeaderComponent, SearchBarComponent } from '@components/molecule';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CardImageComponent,
    CurrencyPipe,
    HeaderComponent,
    SearchBarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  btnStyle = ButtonStyle;

  configIconOrder = {
    name: 'bill',
    direction: 'top',
    height: '2rem',
    width: '2rem',
  };

  filters = [
    {
      label: 'Todos',
      icon: { direction: 'left' },
      value: 'all',
    },
    {
      label: 'Pizzas',
      icon: { direction: 'left' },
      value: 'pizza',
    },
    {
      label: 'Postres',
      icon: { direction: 'left' },
      value: 'desserts',
    },
    {
      label: 'Bebidas',
      icon: { direction: 'left' },
      value: 'drinks',
    },
  ];

  categorySelected(category: string) {
    console.log(category);
  }
}
