import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCard } from '../ui/feature-card/feature-card';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FeatureCard],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {
  features = [
    {
      title: 'Expertise That Drives Results',
      description: 'Our team of seasoned professionals brings years of experience and expertise to the table.',
      icon: 'sparkle'
    },
    {
      title: 'Tailored Business Solutions',
      description: 'We understand that every business is unique. That\'s why our solutions are customized.',
      icon: 'lightbulb'
    },
    {
      title: 'Cutting-Edge Web Design',
      description: 'Leave a lasting impression on your audience with our top-notch web design services.',
      icon: 'cursor'
    },
    {
      title: 'Mobile-First Approach',
      description: 'In today\'s mobile-centric world, we prioritize mobile-first design to ensure your website.',
      icon: 'mobile'
    },
    {
      title: 'Marketing Strategies',
      description: 'Our data-driven marketing strategies allow us to target the right audience with precision.',
      icon: 'lightning'
    },
    {
      title: 'Search Engine Optimization',
      description: '(SEO) Mastery Boost your online visibility with our expert SEO techniques.',
      icon: 'grid'
    }
  ];
}
