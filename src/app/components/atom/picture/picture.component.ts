import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomSize } from '@theme/types';

@Component({
  selector: 'ca-picture',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
})
export class PictureComponent {
  @Input() sources: ISource[] = [];
  @Input() srcImg!: string;
  @Input() altImg!: string;
}

export interface ISource {
  media: CustomSize;
  srcset: string;
}
