import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkCard } from '../ui/work-card/work-card';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, WorkCard],
  templateUrl: './works.html',
  styleUrl: './works.css'
})
export class Works {
  works = [
    {
      title: 'Innovative E-commerce Platform',
      category: 'Web Development',
      date: 'January 2022',
      description: 'Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.'
    },
    {
      title: 'Mobile App for Enhanced Fitness',
      category: 'Mobile App Development',
      date: 'March 2022',
      description: 'Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.'
    },
    {
      title: 'Modern Corporate Website',
      category: 'Web Design',
      date: 'April 2022',
      description: 'Check out our sleek and modern corporate website that showcases the client\'s brand and services. Its responsive design ensures a consistent experience across devices.'
    },
    {
      title: 'Digital Marketing Success Story',
      category: 'Digital Marketing',
      date: 'May 2022',
      description: 'Discover how our data-driven digital marketing strategies boosted a client\'s online presence, resulting in a significant increase in website traffic and leads.'
    }
  ];
}
