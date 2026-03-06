import { Directive, Input } from "@angular/core";
import { ThemeDirective } from "./theme.abstract";
import { FontStyles, FontWeight } from "@theme/enums";

@Directive({
  selector: '[fontWeight]',
  standalone: true
})
export class FontWeightDirective extends ThemeDirective {

  @Input() set fontWeight(fontWeight: { value: FontWeight, tag?: string, applyUniqueChild?: number, applyAllChildren?: boolean }) {
    const { value, tag, applyUniqueChild, applyAllChildren } = fontWeight
    this.setChildFontStyle<FontWeight>(value, FontStyles.FontWeight, tag, applyUniqueChild, applyAllChildren)
  }

}