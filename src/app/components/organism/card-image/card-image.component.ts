import { Component, Input } from '@angular/core';
import { PictureComponent, TitleComponent } from '@components/atom';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { IconLabelComponent } from '@components/molecule';
import { FontStyleDirective } from '@theme/directives';
import { CustomSize } from '@theme/types';
@Component({
  selector: 'ca-card-image',
  standalone: true,
  imports: [
    IconLabelComponent,
    PictureComponent,
    TitleComponent,
    FontStyleDirective,
    NgIf,
    NgFor,
    NgStyle,
  ],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.scss',
})
export class CardImageComponent {
  @Input({ required: true }) srcImg!: string;
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() labels: {
    labelOptions: {
      label: string;
      target?: string;
    };
    iconOptions: {
      icon: string;
      isSvg?: boolean;
    };
  }[] = [];
  @Input() gap: CustomSize = '1rem';
}
