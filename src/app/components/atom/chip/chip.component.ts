import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ca-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  host: {
    '[class]': 'chipStyle',
    '[class.active]': 'active',
    '[attr.role]': '"button"',
    '(onClick)': 'this.activeClick.emit(label)',
  },
})
export class ChipComponent {
  @Input({ required: true }) label!: string;
  @Input() active!: boolean;
  @Input() chipStyle: 'active' | 'disabled' | 'normal' = 'normal';

  @Output() activeClick = new EventEmitter<string>();
}
