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
  @Input() category = '';
  @Input() date = '';
  @Input() description = '';
  @Input() image = '';
}
