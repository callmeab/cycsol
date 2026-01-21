import { Home } from './pages/home/home';
import { ServicesPage } from './pages/services-page/services-page';
import { WorksPage } from './pages/works-page/works-page';
import { AboutPage } from './pages/about-page/about-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'services', component: ServicesPage },
    { path: 'projects', component: WorksPage },
    { path: 'about', component: AboutPage },
    { path: 'contact', component: ContactPage },
    { path: '**', redirectTo: '' }
];
