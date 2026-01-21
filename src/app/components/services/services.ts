import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCard } from '../ui/service-card/service-card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    {
      title: 'Web Design',
      description: 'Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand\'s identity while ensuring seamless navigation and optimal user experience.',
      icon: 'design',
      price: '$1,500',
      buttonText: 'Book a Call'
    },
    {
      title: 'Web Development',
      description: 'Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build dynamic and scalable websites that cater to your business objectives.',
      icon: 'development',
      price: '$1,800',
      buttonText: 'Book a Call'
    },
    // {
    //   title: 'SEO',
    //   description: 'Dominate search rankings and drive organic traffic to your website with our expert SEO techniques.',
    //   icon: 'seo',
    //   price: '$1,200',
    //   buttonText: 'Book a Call'
    // },
    // {
    //   title: 'Game Development',
    //   description: 'Create immersive gaming experiences with our cutting-edge game design and development services.',
    //   icon: 'game',
    //   price: '$5,000',
    //   buttonText: 'Book a Call'
    // },
    // {
    //   title: 'Digital Marketing',
    //   description: 'Boost your brand visibility and ROI with our data-driven digital marketing strategies and campaigns.',
    //   icon: 'marketing',
    //   price: '$2,000/mo',
    //   buttonText: 'Book a Call'
    // },
    // {
    //   title: 'Video Editing',
    //   description: 'Professional video editing services to help you tell your story and engage your audience.',
    //   icon: 'video', // Note: icon might need to be added to ServiceCard or mapped to 'design'
    //   price: '$500',
    //   buttonText: 'Book a Call'
    // }
  ];
}
