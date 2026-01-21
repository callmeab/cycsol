import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCard } from '../ui/testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TestimonialCard],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
  testimonials = [
    {
      name: 'Mark Roberts',
      role: 'Founder of GreenEarth Eco Store',
      quote: 'Working with Cycsol was a pleasure. Their web design team created a stunning website that perfectly captured our brand\'s essence. The feedback from our customers has been overwhelmingly positive.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces' // Placeholder real image
    },
    {
      name: 'Lisa Williams',
      role: 'Head of Product at HealthTech Innovations',
      quote: 'The mobile app Cycsol developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces' // Placeholder real image
    },
    {
      name: 'Michael Johnson',
      role: 'Marketing Manager at GlobalTech',
      quote: 'Cycsol transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our vision made the entire process smooth and hassle-free.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces' // Placeholder real image
    }
  ];
}
