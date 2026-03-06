import { Directive, Input } from "@angular/core";
import { ThemeDirective } from "./theme.abstract";
import { FontStyles, FontWeight, TextAlign } from "@theme/enums";

@Directive({
  selector: '[textAlign]',
  standalone: true
})
export class TextAlignDirective extends ThemeDirective {

  @Input() set textAlign(textAlign: { value: TextAlign, tag?: string, applyUniqueChild?: number, applyAllChildren?: boolean }) {
    const { value, tag, applyUniqueChild, applyAllChildren } = textAlign
    this.setChildFontStyle<TextAlign>(value, FontStyles.TextAlign, tag, applyUniqueChild, applyAllChildren)
  }

}