import { Component, Input } from '@angular/core';
import { Sizes } from '@theme/enums';
import { CustomSize } from '@theme/types';

@Component({
  selector: 'ca-main-title',
  standalone: true,
  imports: [],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.scss',
})
export class MainTitleComponent {
  @Input() size: Sizes | CustomSize = Sizes.xxlg;
  @Input() title!: string;
}
