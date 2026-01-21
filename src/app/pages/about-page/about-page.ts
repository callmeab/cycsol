import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {
  teamMembers = [
    {
      name: 'John Smith',
      role: 'Co-Founder & CEO',
      image: 'assets/team/john.jpg' // Placeholder, will need real images or default avatar
    },
    {
      name: 'Sarah Adams',
      role: 'Head of Design',
      image: 'assets/team/sarah.jpg'
    },
    {
      name: 'Michael Williams',
      role: 'Project Manager',
      image: 'assets/team/michael.jpg'
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Web Developer',
      image: 'assets/team/emily.jpg'
    },
    {
      name: 'Jessica Lee',
      role: 'UX/UI Designer',
      image: 'assets/team/jessica.jpg'
    },
    {
      name: 'Robert Johnson',
      role: 'Lead Mobile App Developer',
      image: 'assets/team/robert.jpg'
    },
    {
      name: 'Emma Taylor',
      role: 'Digital Marketer',
      image: 'assets/team/emma.jpg'
    },
    {
      name: 'Olivia Martin',
      role: 'Content Specialist',
      image: 'assets/team/olivia.jpg'
    }
  ];
}
