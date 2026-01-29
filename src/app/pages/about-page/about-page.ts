import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  teamMembers = [
    {
      name: 'Muhammad Hamid',
      role: 'CEO',
      phone: '03321441980',
      email: 'hamid.cycsol@gmail.com',
      link: 'https://veldora-studio.slack.com/archives/D082YBL4EUX/p1769492536205489',
      image: 'assets/team/hamid.jpg',
    },
    {
      name: 'Muneeb Ahmad',
      role: 'Director/CFO',
      phone: '03038222407',
      email: 'cycsol.pk@gmail.com',
      link: 'https://veldora-studio.slack.com/archives/D082YBL4EUX/p1769666892350939',
      image: 'assets/team/muneeb.jpg',
    },
    {
      name: 'Nabeel Akbar',
      role: 'Managing Director',
      phone: '03148256803',
      email: 'm.nabeel.cycsol@gmail.com',
      link: 'https://veldora-studio.slack.com/archives/D082YBL4EUX/p1769492580339229',
      image: 'assets/team/nabeel.jpg',
    },
    {
      name: 'Ali Abbas',
      role: 'COO',
      phone: '03359922005',
      email: 'aliabbas.cycsol@gmail.com',
      link: 'https://veldora-studio.slack.com/archives/D082YBL4EUX/p1769492705466289',
      image: 'assets/team/ali.jpg',
    },
    {
      name: 'M Abdullah Arshad',
      role: 'Software Developer/IT Department Head',
      phone: '0303168816',
      email: 'callmeab26@gmail.com',
      link: 'https://www.linkedin.com/in/m-abdullah-arshad-b73147240/',
      image: 'assets/team/abdullah.jpg',
    },
    {
      name: 'Ilyas Ramzan',
      role: 'Graphic Designer',
      phone: '03041302051',
      email: 'ilyasramzanart@gmail.com',
      link: 'https://www.linkedin.com/in/illyas-ramzan-893a9233a/',
      image: 'assets/team/ilyas.jpg',
    },
  ];
}
