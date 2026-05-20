import matthewctfullerImg from '../../assets/img/home/matthewctfuller-cover.webp';
import klearlabsImg from '../../assets/img/home/klearlabs-cover.webp';

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
    title: 'Klear Labs',
    tags: ['e-commerce', 'ai tooling', 'design systems'],
    description:
      'Designing and building a full website and online shop for a Notting Hill café using Lovable, from Figma to deployed product.',
    link: '/end-to-end/klear-labs',
    img: klearlabsImg,
  },
  {
    title: 'Matthew CT Fuller',
    tags: ['ux design', 'react', 'cms integration'],
    description:
      'Designing and building a CMS-managed personal brand site for an ICF-accredited coach. From Figma to production.',
    link: '/end-to-end/matthewctfuller',
    img: matthewctfullerImg,
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
  "Hello, I'm Javier, a London-based UX/UI Designer and Frontend Developer. I never quite managed to choose between design and code, so I just do both.",
  'I spent the better part of a decade in hospitality and management across Spain, France, and Australia. Managing teams and running busy venues teaches you to watch how people actually behave, not how they say they will. That turned out to be great preparation for UX.',
  "In 2022 I quit my management job and did a bootcamp at Ironhack. First time visual thinking and systems thinking had a reason to be in the same room. Design Thinking, interface design, usability... it all clicked. I'd found the thing I wanted to get good at.",
  "Late 2024 I started going deeper into development with The Odin Project. Turns out writing code scratches the same itch as design. It's just less forgiving when you make a mistake. Being able to do both means I can take something from blank canvas to shipped product without handing it off to anyone.",
  "When I'm not designing or building, I'm usually losing at board games, experimenting in the kitchen, or finding excuses to open good wine.",
  'Currently open to UX/UI Designer, Frontend Developer, and hybrid roles in London. Reach out!',
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
  { year: 2025, emoji: '🚀', event: 'Shipped my first React app' },
];

export const skills = [
  {
    category: 'Languages',
    subcategory: 'human',
    items: [
      'Spanish - Native',
      'English - Fluent',
      'French - Fluent',
      'Japanese - Beginner',
    ],
  },
  {
    category: 'Languages',
    subcategory: 'programming',
    items: ['React', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Adobe Creative Suite', 'VSCode', 'Sanity CMS', 'Jest'],
  },
];
