import CobuildImage1 from '../assets/projects/cobuildlab-1.png';
import CobuildImage2 from '../assets/projects/cobuild-2.png';
import CobuildImage3 from '../assets/projects/cobuild-3.png';
import CobuildImage4 from '../assets/projects/cobuild-4.png';
import CobuildImage5 from '../assets/projects/cobuild-5.png';

import AmericanImage1 from '../assets/projects/americanarbor1.png';
import AmericanImage2 from '../assets/projects/americanarbor2.png';
import AmericanImage3 from '../assets/projects/americanarbor3.png';
import AmericanImage4 from '../assets/projects/americanarbor4.png';
import AmericanImage5 from '../assets/projects/americanarbor5.png';
import AmericanImage6 from '../assets/projects/americanarbor6.png';
import AmericanImage7 from '../assets/projects/americanarbor7.png';
import AmericanImage8 from '../assets/projects/americanarbor8.png';

import CamronImage1 from '../assets/projects/camron_1.png';
import CamronImage2 from '../assets/projects/camron_2.png';
import CamronImage3 from '../assets/projects/camron_3.png';
import CamronImage4 from '../assets/projects/camron_4.png';
import CamronImage5 from '../assets/projects/camron_5.png';
import CamronImage6 from '../assets/projects/camron_6.png';
import CamronImage7 from '../assets/projects/camron_7.png';
import CamronImage8 from '../assets/projects/camron_8.png';
import CamronImage9 from '../assets/projects/camron_9.png';
import CamronImage10 from '../assets/projects/camron_10.png';

import Exde1 from '../assets/projects/exde-1.png';
import Exde2 from '../assets/projects/exde-2.png';
import Exde3 from '../assets/projects/exde-3.png';
import Exde4 from '../assets/projects/exde-4.png';
import Exde5 from '../assets/projects/exde-5.png';
import Exde6 from '../assets/projects/exde-6.png';
import Exde7 from '../assets/projects/exde-7.png';

export const PROJECTS = [
  {
    title: 'Adela System',
    description: `
            Web system for payroll and inventory
            management for a construction company,
            managed inventory of resources used in
            construction and pay salaries.
            
            `,
    tools: 'Built with Html, CSS, Boostrap, MySQL and PHP, Sockets and ExpressJs.',
    position: 'Full Stack Developer.',
    images: [],
  },
  {
    title: 'Home Computer',
    description: `
            Inventory, invoicing and service management
            web system for electronics stores.
            `,
    tools: 'Built with Html, CSS, Boostrap, MySQL and PHP',
    position: 'Front End Developer.',
    images: [],
  },
  {
    title: 'Dataentry.',
    description: `
           Web platform to store personal data of
          potential customers and vendors, to create
          networks of connection between them to create
          advertising and increase sales and consumption.
            `,
    tools: 'Built with VueJS, Quazar, Mongo y NodeJs.',
    position: 'Full Stack Developer',
    images: [],
  },
  {
    title: 'Camron',
    description: `
           Remote online notarization platform for
notaries to executes digital signings remotely.
            `,
    tools: 'Built with ReactJS, 8base, Auth0, AWS, peerJS, Twilio, etc.',
    position: 'Full Stack Developer.',
    images: [
      CamronImage1,
      CamronImage2,
      CamronImage3,
      CamronImage4,
      CamronImage5,
      CamronImage6,
      CamronImage7,
      CamronImage8,
      CamronImage9,
      CamronImage10,
    ],
  },
  {
    title: 'American Arbor',
    description: `
              Web platform that allows organizations and
          individuals to store data on important
          environmental entities or entities under their
          jurisdiction that need care services, among
          others. It allows them to keep an inventory
          management regarding proposals and services
          performed.
            `,
    tools: 'Built with React Native, 8base, Auth0.',
    position: 'Front Stack Developer.',
    images: [
      AmericanImage1,
      AmericanImage2,
      AmericanImage3,
      AmericanImage4,
      AmericanImage5,
      AmericanImage6,
      AmericanImage7,
      AmericanImage8,
    ],
  },
  {
    title: 'Buyer Board',
    description: `
             Web platform for property listings to post
requirements for Agent Buyers in the Real State
space
            `,
    tools: 'Built with ReatJs, Material Design, 8base, Auht0, AWS and Sendgrid.',
    position: 'Front Stack Developer.',
    images: [],
  },
  {
    title: 'Cobuild Lab Website.',
    description: `
            
            Promotional and presentation website for the
            company Cobuild Lab INC.`,
    tools: 'Built with ReactJS, Material UI, supabase, AWS.',
    position: 'Front End Developer.',
    images: [
      CobuildImage1,
      CobuildImage2,
      CobuildImage3,
      CobuildImage4,
      CobuildImage5,
    ],
    url: 'https://cobuildlab.com/',
  },
  {
    title: 'EXDE',
    description: `
           Web platform to manage order creation,
    reporting, delivery and pick-up management of
    pharmaceutical products.
`,
    tools: 'Built with ReactJS, Material UI, PostgreSQL, AWS, MJML.',
    position: 'Front End Developer.',
    images: [
      Exde1,
      Exde2,
      Exde3,
      Exde4,
      Exde5,
      Exde6,
      Exde7,
    ],
  }
]