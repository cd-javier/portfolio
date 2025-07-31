import lesgoImg from '../../assets/img/home/lesgo-cover.webp';
import zenlifeImg from '../../assets/img/home/zenlife-cover.webp';
import grinpathImg from '../../assets/img/home/grinpath-cover.webp';

import prideImg from '../../assets/img/home/pride-cover.webp';
import battleshipImg from '../../assets/img/home/battleship-cover.webp';
import weatherImg from '../../assets/img/home/weather-cover.webp';
import libraryImg from '../../assets/img/home/library-cover.webp';
import rpsImg from '../../assets/img/home/rps-cover.webp';

const designCaseStudies = [
  {
    title: 'LESGO',
    tags: ['usability', 'visual design', 'queer dating'],
    description:
      'Revamping LESGO’s UX for its UK launch—enhancing identity, usability, and navigation with a user-centred approach.',
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
const devProjects = [
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

export { designCaseStudies, devProjects };
