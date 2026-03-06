import { Directive, HostBinding, Input } from "@angular/core";
import { ThemeDirective } from "./theme.abstract";
import { FontStyles, Sizes } from "@theme/enums";
import { CustomSize } from "@theme/types";

@Directive({
    selector: '[fontSize]',
    standalone: true
})
export class FontSizeDirective extends ThemeDirective {


    @Input() set fontSize(fontSize: { value: Sizes | CustomSize, tag?: string, applyUniqueChild?: number, applyAllChildren?: boolean }) {

        const { value, tag, applyUniqueChild, applyAllChildren } = fontSize

        this.setChildFontStyle<Sizes | CustomSize>(value, FontStyles.FontSize, tag, applyUniqueChild, applyAllChildren)
    }
}