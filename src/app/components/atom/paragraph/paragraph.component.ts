import { Component, Input } from '@angular/core';
import { Sizes } from '@theme/enums';
import { CustomSize } from '@theme/types';

@Component({
  selector: 'ca-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  @Input() text!: string;
  @Input() size: Sizes | CustomSize = Sizes.md;
}
