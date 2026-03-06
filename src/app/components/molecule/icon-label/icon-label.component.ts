import { Component, Input } from '@angular/core';
import { IconComponent, LabelComponent } from '@components/atom';
import { FontStyleDirective } from '@theme/directives';

@Component({
  selector: 'ca-icon-label',
  standalone: true,
  imports: [IconComponent, LabelComponent,FontStyleDirective],
  templateUrl: './icon-label.component.html',
  styleUrl: './icon-label.component.scss'
})

export class IconLabelComponent {

  @Input({ required: true }) icon!: string;
  @Input({ required: true }) label!: string
  @Input() isSvg = false;
  @Input() target?: string;
}
