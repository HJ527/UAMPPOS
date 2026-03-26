import { Component } from '@angular/core';
import { IconComponent } from '@components/atom';

@Component({
  selector: 'ca-search-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {}
