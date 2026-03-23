// import matthewctfullerImg from '../../assets/img/home/matthewctfuller-cover.webp';

import lesgoImg from '../../assets/img/home/lesgo-cover.webp';
import zenlifeImg from '../../assets/img/home/zenlife-cover.webp';
import grinpathImg from '../../assets/img/home/grinpath-cover.webp';

import prideImg from '../../assets/img/home/pride-cover.webp';
import battleshipImg from '../../assets/img/home/battleship-cover.webp';
import weatherImg from '../../assets/img/home/weather-cover.webp';
import libraryImg from '../../assets/img/home/library-cover.webp';
import rpsImg from '../../assets/img/home/rps-cover.webp';

export const endToEndProjects = [
  {
    title: 'Matthew CT Fuller',
    tags: ['ux design', 'react', 'cms integration'],
    description:
      'Designing and building a CMS-managed personal brand site for an ICF-accredited coach. From Figma to production.',
    link: '/end-to-end/matthewctfuller',
    img: 'matthewctfullerImg',
  },
];

export const designCaseStudies = [
  {
    title: 'LESGO',
    tags: ['usability', 'visual design', 'queer dating'],
    description:
      'Revamping LESGO’s UX for its UK launch. Enhancing identity, usability, and navigation with a user-centred approach.',
    link: '/design/lesgo',
    img: lesgoImg,
  },
  {
    title: 'Zen Life',
    tags: ['usability', 'redesign', 'wellness'],
    description:
      'Streamlining information architecture to improve accessibility and engagement in the wellness space.',
    link: '/design/zenlife',
    img: zenlifeImg,
  },
  {
    title: 'Grinpath',
    tags: ['ux research', 'app design', 'medtech'],
    description:
      'Developing a MedTech solution that empowers women with fibromyalgia through gamification and personalized support.',
    link: '/design/grinpath',
    img: grinpathImg,
  },
];

export const devProjects = [
  {
    title: 'Pride Memory Game',
    tags: ['react', 'state management', 'game logic'],
    description:
      'Web game where players match pride flags while learning their meanings, history, and the communities they represent',
    repo: 'https://github.com/cd-javier/pride-memory-game',
    link: 'https://www.pridememorygame.com/',
    img: prideImg,
  },
  {
    title: 'Battleship',
    tags: ['javascript', 'smart opponent', 'unit testing'],
    description:
      'A classic strategy game built with JavaScript, featuring an interactive UI, AI opponent, and dynamic gameplay.',
    repo: 'https://github.com/cd-javier/battleship',
    link: 'https://cd-javier.github.io/battleship/',
    img: battleshipImg,
  },
  {
    title: 'Weather App',
    tags: ['javascript', 'api fetching', 'data handling'],
    description:
      'A responsive weather application using API integration to display real-time forecasts with a clean and accessible interface.',
    repo: 'https://github.com/cd-javier/weather-app',
    link: 'https://cd-javier.github.io/weather-app/',
    img: weatherImg,
  },
  {
    title: 'Library Management',
    tags: ['javascript', 'responsive design', 'localstorage'],
    description:
      'A basic web app for managing a digital library, allowing users to add, edit, and remove books with a clean, minimal interface.',
    repo: 'https://github.com/cd-javier/library/',
    link: 'https://cd-javier.github.io/library/',
    img: libraryImg,
  },
  {
    title: 'Rock Paper Scissors',
    tags: ['javascript', 'css animations', 'game mechanics'],
    description:
      'A simple yet engaging game with intuitive UI, randomized opponent logic, and smooth animations for an interactive experience.',
    repo: 'https://github.com/cd-javier/rock-paper-scissors',
    link: 'https://cd-javier.github.io/rock-paper-scissors',
    img: rpsImg,
  },
];

export const meta = {
  title: 'Javier Quiroga | UX & Web Dev',
  description:
    "I'm Javier Quiroga — UX designer and web developer blending design thinking with functional code to create smarter, better digital experiences.",
};

export const og = {
  title: 'Javier Quiroga | UX & Web Design',
  description:
    "I'm Javier Quiroga — a UX designer & web developer crafting thoughtful, user-first experiences. Check out my latest projects and case studies.",
  image: 'https://javierquiroga.com/seo/og-image-index.jpg',
  url: 'https://javierquiroga.com',
  type: 'website',
};

export const aboutText = [
  'Hello, I’m Javier, a London-based UX/UI Designer and Web Developer, dedicated to crafting intuitive digital experiences and building functional, user-first solutions.',
  "With nearly a decade of experience in the service and management industries, I've developed a keen insight into user behaviours and streamlined processes, insights that now inform my approach to digital product creation.",
  'In 2022 I gathered the courage to quit my management job and complete a UX/UI Design Bootcamp at Ironhack, finally uniting my artistic side with my technical mind and passion for human experiences. There, I learned everything about Design Thinking and found my love for interface design and usability.',
  "Since then, I've been collaborating with various startups as a freelancer, dedicated to improving the UX of their digital products. Creating wireframes, conducting thorough UX analysis, and enhancing visual design elements, I focus on making tech more accessible and user friendly.",
  'At the end of 2024 I started training as a Full Stack developer with The Odin Project and discovered how incredibly creative and fulfilling writing code is, how exciting a blank code editor page is with a brain full of ideas.',
  'When I’m not immersed in Figma or VSCode, you might find me playing board games, enjoying a glass of wine, or in the kitchen making up recipes.',
];

export const aboutTimeline = [
  { year: 1993, emoji: '👶', event: 'Born' },
  { year: 2015, emoji: '🎓', event: 'Graduated University' },
  { year: 2016, emoji: '🇫🇷', event: 'Moved to France' },
  { year: 2017, emoji: '👟', event: 'Learned to tie my shoes' },
  { year: 2019, emoji: '🇦🇺', event: 'Moved to Australia' },
  { year: 2020, emoji: '🇬🇧', event: 'Moved to London' },
  { year: 2021, emoji: '👨', event: 'Became General Manager' },
  { year: 2022, emoji: '🎨', event: 'Studied UX Design' },
  { year: 2024, emoji: '👨‍💻', event: 'Started FullStack Dev Course' },
];

export const skills = [
  {
    category: 'Languages',
    subcategory: 'human',
    items: ['Spanish - Native', 'English - Fluent', 'French - Fluent'],
  },
  {
    category: 'Languages',
    subcategory: 'programming',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Adobe Creative Suite', 'VSCode', 'Git & GitHub', 'Jest'],
  },
];
