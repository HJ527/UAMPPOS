import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'ca-icon',
  standalone: true,
  imports: [NgIf],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',

})
export class IconComponent {
  @Input({required:true}) icon!: string;
  @Input() isSvg = true;
}
