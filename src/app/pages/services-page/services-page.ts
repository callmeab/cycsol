import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from '../../components/services/services';

interface categoryFeature {
  title: string;
  description: string;
}

interface categoryStep {
  title: string;
  description: string;
}

interface Project {
  name: string;
  industry: string;
  url: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: categoryFeature[];
  process: categoryStep[];
  portfolioImages: string[];
  completedProjects: Project[];
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, Services],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPage {
  activeCategoryId = 'ecommerce';

  categories: ServiceCategory[] = [
    {
      id: 'ecommerce',
      name: 'E-commerce',
      icon: 'ecommerce',
      description: 'Unlock your online potential with robust e-commerce solutions that drive sales and enhance customer experience. We build scalable stores that are secure, fast, and easy to manage.',
      features: [
        { title: 'Custom Storefronts', description: 'Unique designs that reflect your brand and product catalog.' },
        { title: 'Payment Integration', description: 'Secure gateways for seamless global transactions.' },
        { title: 'Inventory Management', description: 'Tools to track stock levels and automate reordering.' },
        { title: 'Mobile Optimization', description: 'Ensuring a smooth shopping experience on all devices.' }
      ],
      process: [
        { title: 'Strategy & Platform Selection', description: 'Choosing the right platform (Shopify, WooCommerce, Custom) for your needs.' },
        { title: 'Design & UX', description: 'Creating user flows that maximize conversion rates.' },
        { title: 'Development & Testing', description: 'Building the store and rigorously testing payment flows.' },
        { title: 'Launch & Growth', description: 'Going live and implementing marketing tools for growth.' }
      ],
      portfolioImages: [],
      completedProjects: []
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      icon: 'marketing',
      description: 'Boost your brand visibility and ROI with our data-driven digital marketing strategies. We help you reach your target audience and convert leads into loyal customers through targeted campaigns.',
      features: [
        { title: 'Social Media Management', description: 'Growing your presence on platforms like Instagram, LinkedIn, and Twitter.' },
        { title: 'PPC Advertising', description: 'Targeted ad campaigns to drive immediate traffic and results.' },
        { title: 'Email Marketing', description: 'Personalized email flows to nurture leads and retain customers.' },
        { title: 'Analytics & Reporting', description: 'Transparent data on campaign performance and ROI.' }
      ],
      process: [
        { title: 'Audience Research', description: 'Deep dive into your demographics and market trends.' },
        { title: 'Strategy Formulation', description: 'Creating a tailored multi-channel plan.' },
        { title: 'Campaign Execution', description: 'Launching ads and content across selected channels.' },
        { title: 'Optimization', description: 'Continuous monitoring and tweaking for better results.' }
      ],
      portfolioImages: [],
      completedProjects: []
    },
    {
      id: 'seo',
      name: 'SEO',
      icon: 'seo',
      description: 'Dominate search rankings and drive organic traffic to your website with our expert SEO techniques. We focus on sustainable, long-term growth through technical optimizations and quality content.',
      features: [
        { title: 'Keyword Research', description: 'Identifying high-value search terms for your niche.' },
        { title: 'On-Page Optimization', description: 'Optimizing meta tags, content, and structure.' },
        { title: 'Technical SEO', description: 'Improving site speed, mobile-friendliness, and crawlability.' },
        { title: 'Link Building', description: 'Acquiring high-quality backlinks to boost authority.' }
      ],
      process: [
        { title: 'SEO Audit', description: 'Analyzing your current site health and opportunities.' },
        { title: 'Strategy Development', description: 'Planning content and technical roadmap.' },
        { title: 'Implementation', description: 'Executing optimizations and content creation.' },
        { title: 'Monitoring', description: 'Tracking rankings and traffic growth over time.' }
      ],
      portfolioImages: [],
      completedProjects: []
    },
    {
      id: 'web-app-dev',
      name: 'Web & App Development',
      icon: 'development',
      description: 'We build scalable, high-performance websites and mobile apps tailored to your unique business needs. From simple landing pages to complex enterprise platforms, we deliver quality code.',
      features: [
        { title: 'Customized Design', description: 'We craft bespoke designs tailored to match your brand personality and industry.' },
        { title: 'Responsive Design', description: 'Ensuring your website adapts seamlessly to different devices and screen sizes.' },
        { title: 'User-Centric Approach', description: 'Prioritizing ease of navigation and intuitive user experience.' },
        { title: 'Visual Elements', description: 'Incorporating engaging visuals, graphics, and animations to enhance the overall appeal.' }
      ],
      process: [
        { title: 'Discovery & Planning', description: 'We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy.' },
        { title: 'Wireframing & Prototyping', description: 'Creating wireframes and interactive prototypes to visualize the website\'s layout and user flow.' },
        { title: 'Design & Development', description: 'Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life.' },
        { title: 'Testing & Review', description: 'We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage.' }
      ],
      portfolioImages: [
        'assets/uploaded_image_1768545034234.png', // Using existing assets as placeholders
        'assets/uploaded_image_1768545311084.png'
      ],
      completedProjects: [
        { name: 'GlobalTech Solutions', industry: 'E-commerce', url: 'www.globaltechsolutions.com' },
        { name: 'GreenEarth Eco Store', industry: 'Design Agency', url: 'www.greenearthecostore.com' },
        { name: 'TechGuru Inc.', industry: 'Technology', url: 'www.techguruinc.com' }
      ]
    },
    {
      id: 'game-dev',
      name: 'Game Development',
      icon: 'game',
      description: 'Create immersive gaming experiences with our cutting-edge game design and development services. We specialize in mobile, PC, and web-based games that captivate players.',
      features: [
        { title: '2D & 3D Art', description: 'Creating stunning visuals and assets.' },
        { title: 'Game Mechanics', description: 'Designing engaging loops and gameplay systems.' },
        { title: 'Unity/Unreal Engine', description: 'Utilizing industry-standard engines for best performance.' },
        { title: 'Multiplayer', description: 'Implementing real-time networking for social play.' }
      ],
      process: [
        { title: 'Concept Art', description: 'Visualizing characters and environments.' },
        { title: 'Prototyping', description: 'Testing core mechanics quickly.' },
        { title: 'Production', description: 'Full-scale development of levels and assets.' },
        { title: 'Polish & Release', description: 'Bug fixing and publishing to stores.' }
      ],
      portfolioImages: [],
      completedProjects: []
    },
    {
      id: 'graphic-designing',
      name: 'Graphic Designing',
      icon: 'design',
      description: 'Leave a lasting impression with visually stunning graphic designs that communicate your brand identity. We create assets that are consistent, professional, and memorable.',
      features: [
        { title: 'Brand Identity', description: 'Logos, color palettes, and typography.' },
        { title: 'Marketing Materials', description: 'Brochures, flyers, and social media graphics.' },
        { title: 'UI/UX Design', description: 'Designing interfaces for websites and apps.' },
        { title: 'Illustrations', description: 'Custom artwork to elevate your content.' }
      ],
      process: [
        { title: 'Briefing', description: 'Understanding your brand and design needs.' },
        { title: 'Concept Creation', description: 'Drafting initial sketches and ideas.' },
        { title: 'Refinement', description: 'Iterating based on feedback to perfect the design.' },
        { title: 'Delivery', description: 'Providing final files in all necessary formats.' }
      ],
      portfolioImages: [],
      completedProjects: []
    },
    {
      id: 'import-export',
      name: 'Import & Export',
      icon: 'importexport',
      description: 'Streamline your global trade operations with our comprehensive import and export consultancy services. We help navigate regulations and optimize logistics.',
      features: [
        { title: 'Regulatory Compliance', description: 'Ensuring adherence to international trade laws.' },
        { title: 'Logistics Planning', description: 'Optimizing shipping routes and carriers.' },
        { title: 'Documentation', description: 'Handling customs paperwork and certifications.' },
        { title: 'Market Entry', description: 'Advising on entering new international markets.' }
      ],
      process: [
        { title: 'Assessment', description: 'Reviewing your products and target markets.' },
        { title: 'Route Planning', description: 'Determining efficient logistics solutions.' },
        { title: 'Compliance Check', description: 'Verifying all legal requirements are met.' },
        { title: 'Execution', description: 'Managing the shipment and clearance process.' }
      ],
      portfolioImages: [],
      completedProjects: []
    },
    {
      id: 'medical-billing',
      name: 'Medical Billing',
      icon: 'medical',
      description: 'Optimize your healthcare revenue cycle with accurate and efficient medical billing solutions. We help reduce denials and improve cash flow for practices.',
      features: [
        { title: 'Scalable Architecture', description: 'Building systems that grow with your business.' },
        { title: 'Security First', description: 'Implementing best practices to protect your data and users.' },
        { title: 'Performance Optimization', description: 'Ensuring fast load times and smooth interactions.' },
        { title: 'API Integration', description: 'Seamlessly connecting with third-party services and tools.' }
      ],
      process: [
        { title: 'Requirement Analysis', description: 'Deep dive into technical requirements and stack selection.' },
        { title: 'Architecture Design', description: 'Planning database schemas and system architecture.' },
        { title: 'Core Development', description: 'Writing clean, maintainable, and efficient code.' },
        { title: 'QA & Deployment', description: 'Rigorous testing followed by a smooth deployment to production.' }
      ],
      portfolioImages: [],
      completedProjects: []
    },
    {
      id: 'construction-cost',
      name: 'Construction Cost Estimation',
      icon: 'construction',
      description: 'Get precise and reliable cost estimates for your construction projects to ensure budget control. We provide detailed quantities and pricing for all trades.',
      features: [
        { title: 'Material Takeoffs', description: 'Exact quantities of materials needed.' },
        { title: 'Labor Costing', description: 'Estimating hours and rates for workforce.' },
        { title: 'Bid Preparation', description: 'Helping contractors prepare competitive bids.' },
        { title: 'Value Engineering', description: 'Suggesting cost-saving alternatives.' }
      ],
      process: [
        { title: 'Plan Review', description: 'Analyzing blueprints and specifications.' },
        { title: 'Quantity Survey', description: 'Measuring all elements from the drawings.' },
        { title: 'Pricing', description: 'Applying current market rates to materials and labor.' },
        { title: 'Final Report', description: 'delivering a comprehensive cost breakdown.' }
      ],
      portfolioImages: [],
      completedProjects: []
    },
    {
      id: 'trucking',
      name: 'Trucking',
      icon: 'trucking',
      description: 'Reliable logistics and trucking management solutions to keep your supply chain moving efficiently. We offer dispatching, tracking, and fleet management support.',
      features: [
        { title: 'Dispatch Services', description: 'Finding and negotiating loads for drivers.' },
        { title: 'Route Optimization', description: 'Planning the most efficient paths.' },
        { title: 'Compliance Management', description: 'Handling ELD and safety regulations.' },
        { title: 'Fleet Tracking', description: 'Real-time visibility of vehicles.' }
      ],
      process: [
        { title: 'Load Booking', description: 'Securing freight that matches your equipment.' },
        { title: 'Dispatching', description: 'Coordinating pickup and delivery details.' },
        { title: 'Monitoring', description: 'Tracking progress and handling issues en route.' },
        { title: 'Invoicing', description: 'Processing payments and factoring.' }
      ],
      portfolioImages: [],
      completedProjects: []
    }
  ];

  get activeCategory() {
    return this.categories.find(c => c.id === this.activeCategoryId) || this.categories[0];
  }

  setActiveCategory(id: string) {
    this.activeCategoryId = id;
  }
}
