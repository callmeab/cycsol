import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css'
})
export class TestimonialCard {
  @Input() quote = '';
  @Input() authorName = '';
  @Input() authorRole = '';
  @Input() authorImage = ''; // Using a placeholder if not provided
}
