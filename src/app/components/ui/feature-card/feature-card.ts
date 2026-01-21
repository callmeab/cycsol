import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css'
})
export class FeatureCard {
  @Input() title = '';
  @Input() description = '';
  @Input() iconName = '';
}
