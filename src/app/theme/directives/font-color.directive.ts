import { Directive, Input } from "@angular/core";
import { ThemeDirective } from "./theme.abstract";
import { CustomColor } from "@theme/types";
import { Colors, FontStyles } from "@theme/enums";

@Directive({
    selector: '[fontColor]',
    standalone: true
})
export class FontColorDirective extends ThemeDirective {

    @Input() set fontColor(fontColor: {value: Colors | CustomColor, tag?: string, applyUniqueChild?: number, applyAllChildren?: boolean }) {
        const { value, tag, applyUniqueChild, applyAllChildren } = fontColor
        this.setChildFontStyle<Colors | CustomColor >(value, FontStyles.Color, tag, applyUniqueChild, applyAllChildren)

    }

}