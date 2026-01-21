import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Works } from '../../components/works/works';

@Component({
  selector: 'app-works-page',
  standalone: true,
  imports: [CommonModule, Works],
  templateUrl: './works-page.html',
  styleUrl: './works-page.css'
})
export class WorksPage {
  features = [
    {
      title: 'Strategic Planning',
      description: 'Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients\' objectives and target audience.',
      icon: 'lightning'
    },
    {
      title: 'Customized Solutions',
      description: 'We believe in tailoring our services to suit each project\'s unique requirements, resulting in solutions that perfectly align with our clients\' brand identities.',
      icon: 'fire'
    },
    {
      title: 'User-Centric Approach',
      description: 'Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.',
      icon: 'users'
    },
    {
      title: 'Cutting-Edge Technologies',
      description: 'We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.',
      icon: 'stars'
    },
    {
      title: 'Timely Delivery',
      description: 'We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.',
      icon: 'clock'
    }
  ];
}
