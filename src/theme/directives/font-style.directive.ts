import { Directive, Input } from '@angular/core';
import { FontSizeDirective } from './font-size.directive';
import { FontWeightDirective } from './font-weight.directive';
import { FontColorDirective } from './font-color.directive';
import { TextAlignDirective } from './font-align.directive';

@Directive({
  selector: '[fontStyle], ca-title[fontSize], ca-subtitle[fontSize], ca-title[fontWeight], ca-subtitle[fontWeight]',
  standalone: true,
  hostDirectives: [
    { directive: FontSizeDirective, inputs: ['fontSize'] },
    { directive: FontWeightDirective, inputs: ['fontWeight'] },
    { directive: FontColorDirective, inputs: ['fontColor'] },
    { directive: TextAlignDirective, inputs: ['textAlign'] }
  ]
})
export class FontStyleDirective {

  
}
