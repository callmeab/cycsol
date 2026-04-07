import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-card.html',
  styleUrl: './work-card.css'
})
export class WorkCard {
  @Input() title = '';
  @Input() role = '';
  @Input() category = '';
  @Input() date = '';
  @Input() type = '';
  @Input() tags: string[] = [];
  @Input() description = '';
  @Input() image = '';
}
