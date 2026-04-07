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
      title: 'Smart App 360',
      role: 'Angular Developer',
      category: 'Web Development',
      type: 'Web',
      date: '2024',
      tags: ['Angular', 'Tailwind CSS', 'Material UI', 'jQuery', 'Bootstrap'],
      description: 'A web-based business management solution with integrated POS, Inventory, and Accounts management modules. Features automated purchase orders, attendance & payroll management, dynamic reporting, and rapid invoicing — designed to efficiently manage daily retail business activities.'
    },
    {
      title: 'Clery Edge',
      role: 'Angular Developer',
      category: 'Web Development',
      type: 'Web',
      date: '2024',
      tags: ['Angular', 'ASP.NET Core', 'DevExpress', 'Web API'],
      description: 'A complete revamp of the original CleryEdge platform (previously ASPX pages) into a modern ASP.NET Core MVC Web API with an Angular + DevExpress frontend. Improved system performance, scalability, and user experience through modern architecture and technologies.'
    },
    {
      title: 'Discover Sair',
      role: 'Angular / Ionic Developer',
      category: 'Web, Mobile & Admin Panel',
      type: 'Web & Mobile',
      date: '2024',
      tags: ['Angular', 'Ionic', 'MongoDB', 'Express.js', 'Node.js', 'MEAN Stack'],
      description: 'A comprehensive travel booking application built on the MEAN Stack. Supports a multi-role system for travelers, admins, and managers with trip exploration, booking management, approval workflows, and both web and mobile-based admin panels for seamless trip monitoring.'
    },
    {
      title: 'Prop UI',
      role: 'Angular Developer',
      category: 'Migration & Enhancement',
      type: 'Web',
      date: '2024',
      tags: ['Angular 19', 'Angular 16+', 'Mig\ration'],
      description: 'Upgraded and enhanced a full-featured Gym Management System to Angular 19. Implemented modules for member registration, attendance tracking, subscription management, and admin dashboards. Ensured smooth migration from older Angular versions to a scalable, high-performance architecture.'
    },
    {
      title: 'DroneLeaf',
      role: 'Angular Developer',
      category: 'Web Development',
      type: 'Web',
      date: '2024',
      tags: ['Angular', 'GraphQL', 'REST API'],
      description: 'An innovative drone management and service platform with a dual-login system for Personal and Organization users. Features dynamic dashboards and responsive UI with real-time updates through GraphQL API integration. Focused on performance optimization and scalability.'
    },
    {
      title: 'NIC Skin-Care',
      role: 'Ionic-Angular Developer',
      category: 'Mobile App Development',
      type: 'Mobile',
      date: '2024',
      tags: ['Ionic', 'Angular', 'OpenAI API', 'Firebase', 'RevenueCat (iOS & Android)'],
      description: 'A hybrid mobile app that scans men\'s facial images and provides personalized skincare routines using AI (OpenAI API). Features Firebase Authentication & Firestore for data storage, RevenueCat integration for in-app subscriptions on both iOS and Android, and an intuitive AI-driven skincare recommendation interface.'
    },
    // {
    //   title: 'SignLingo Kids',
    //   role: 'Ionic-Angular Developer',
    //   category: 'Mobile App Development',
    //   type: 'Mobile', 
    //   date: '2024',
    //   tags: ['Ionic', 'Angular', '3D Models', 'ASL'],
    //   description: 'A learning application inspired by ASL (American Sign Language) tools for kids. Features 3D animated models to visually demonstrate sign language gestures for interactive learning. Focused on child-friendly UI/UX design to enhance engagement, accessibility, and inclusivity through technology-driven language learning.'
    // },
    {
      title: 'Hand Hero 3D',
      role: 'Ionic-Angular Developer',
      category: 'Mobile App Development',
      type: 'Mobile',
      date: '2024',
      tags: ['Ionic', 'Angular', '3D Models', 'RevenueCat (iOS & Android)'],
      description: 'A 3D-powered mobile application with immersive hand-gesture experiences. Integrated RevenueCat for seamless in-app purchase and subscription management on both iOS and Android. Features interactive 3D model rendering and a polished, premium UI for engaging user experiences.'
    }
  ];
}
