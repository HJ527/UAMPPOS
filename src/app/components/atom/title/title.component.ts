import { NgClass } from '@angular/common';
import { Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'ca-title, ca-subtitle',
  standalone: true,
  imports: [NgClass],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {

  private _element = inject(ElementRef)

  public tagName = this._element.nativeElement.tagName.toLowerCase()

  @Input({ required: true }) text!: string;


}
