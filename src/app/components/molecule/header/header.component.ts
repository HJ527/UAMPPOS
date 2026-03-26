import { Component } from '@angular/core';
import { ButtonComponent, TitleComponent } from '@components/atom';
import { ButtonStyle } from '@theme/enums';

@Component({
  selector: 'ca-header',
  standalone: true,
  imports: [ButtonComponent, TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  btnStyle = ButtonStyle;
}
