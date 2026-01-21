import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitForm() {
    console.log('Form Submitted', this.formData);
    // Here you would typically handle the API call to send the email/message
    alert('Thank you for your message! We will get back to you shortly.');
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
