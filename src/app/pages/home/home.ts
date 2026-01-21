import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../components/hero/hero';
import { Features } from '../../components/features/features';
import { Works } from '../../components/works/works';
import { Testimonials } from '../../components/testimonials/testimonials';
import { FooterCta } from '../../components/footer-cta/footer-cta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero, Features, Works, Testimonials, FooterCta],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
