import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
  @Input() title = '';
  @Input() description = '';
  @Input() iconName = '';
  @Input() price: string | undefined;
  @Input() buttonText = 'Learn More';
}
