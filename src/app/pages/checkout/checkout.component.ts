import { Component } from '@angular/core';
import { CardImageComponent } from '@components/organism';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CardImageComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {}
