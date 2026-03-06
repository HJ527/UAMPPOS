import { Directive, ElementRef, inject, Input, Renderer2 } from "@angular/core";
import { FontStyles } from "@theme/enums";


@Directive()
export abstract class ThemeDirective {
    private _element = inject(ElementRef);
    public _renderer = inject(Renderer2);

    id: Symbol = Symbol('123');

    public htmlElement = this._element.nativeElement as HTMLElement

    public childrenTargets!: HTMLCollectionOf<HTMLElement>

    getFirstChildElement(element: HTMLElement) {
        return element.firstElementChild as HTMLElement
    }

    setFontStyle<EnumValues>(style: FontStyles, value: EnumValues, element?: HTMLElement) {
        this._renderer.setStyle(element, style, value)
    }


    setChildFontStyle<TValue>(value: TValue, typeFontStyle: FontStyles, tag?: string, applyUniqueChild?: number, applyAllChildren?: boolean) {

        let child = this.getFirstChildElement(this.htmlElement);
        
        if (tag) {
            this.childrenTargets = this.htmlElement.getElementsByTagName(tag) as HTMLCollectionOf<HTMLElement>
            if (applyUniqueChild===undefined) {
                for (let i = 0; i < this.childrenTargets.length; i++) {
                    child = this.getFirstChildElement(this.childrenTargets[i]);
                    console.log(child);
                    
                    setTimeout(() => {
                        this.setFontStyle(typeFontStyle, value, child)
                    });
                }
            }
            else if (!!applyUniqueChild) {
                child = this.getFirstChildElement(this.childrenTargets.item(applyUniqueChild) as HTMLElement)
                if (child) {
                    setTimeout(() => {
                        this.setFontStyle(typeFontStyle, value, child)
                    });
                }
            }
        } else {
            this.setFontStyle(typeFontStyle, value, child)
        }
    }
}
