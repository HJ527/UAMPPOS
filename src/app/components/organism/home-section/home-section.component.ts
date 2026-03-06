import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ca-home-section',
  standalone: true,
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSectionComponent {}
