import CaseStudyLayout from '../../Layouts/CaseStudyLayout';
import './Grinpath.css';

import grinpathCover from '../../assets/img/case-studies/grinpath/01-cover.webp';
import persona from '../../assets/img/case-studies/grinpath/02-user-persona.webp';
import journey from '../../assets/img/case-studies/grinpath/03-user-journey.webp';
import userFlow from '../../assets/img/case-studies/grinpath/04-user-flow.webp';
import conceptSketches from '../../assets/img/case-studies/grinpath/05-concept-sketches.webp';
import lowFi from '../../assets/img/case-studies/grinpath/06-lowfi.webp';
import midFi from '../../assets/img/case-studies/grinpath/07-midfi.webp';
import competitorAnalysis from '../../assets/img/case-studies/grinpath/08-competitor-analysis.webp';
import moodBoard from '../../assets/img/case-studies/grinpath/09-mood-board.webp';
import colourPalette from '../../assets/img/case-studies/grinpath/10-colour-palette.webp';
import typography from '../../assets/img/case-studies/grinpath/11-typography.webp';
import hiFi1 from '../../assets/img/case-studies/grinpath/12-hifi1.webp';
import hiFi2 from '../../assets/img/case-studies/grinpath/13-hifi2.webp';

const grinpathCaseStudy = {
  header: {
    heading: 'Revolutionising fibromyalgia management with Grinpath',
    subheading:
      'Harnessing technology to enhance quality of life and empower women with fibromyalgia',
    img: {
      src: grinpathCover,
      alt: 'Decorative cover image for Grinpath case study',
    },
    details: [
      {
        heading: 'time',
        content: ['10 days'],
      },
      {
        heading: 'team',
        content: ['Beth Mac', 'Curtis Ross', 'Javier Quiroga'],
      },
      {
        heading: 'tools',
        content: ['Figma', 'Figjam', 'Trello', 'Procreate'],
      },
    ],
    content: [
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'the brief' },
          {
            type: 'p',
            content:
              'Working on Grinpath was all about building a comprehensive solution for women with fibromyalgia. In just 10 days, alongside Beth Mac and Curtis Ross, we helped transform their MedTech app—designed to offer personalised behavioural activation and a gamified community—for a target audience of women aged 25 to 45. Our mission? Enhance quality of life and empower users by combining smart tech with genuine care.',
          },
          { type: 'h3', content: 'the challenge' },
          {
            type: 'p',
            content:
              'Grinpath’s founders had poured years into refining every feature, but they were so immersed that they lost sight of what users truly needed. When we first dove into the beta, we felt lost navigating its complex structure. Users, too, would struggle to access the valuable resources designed to support them. The app needed a radical rethink of its information architecture and user flow, ensuring that every interaction felt personal and empowering.',
          },
        ],
      },
    ],
  },
  content: [
    [
      { type: 'h2', content: 'our assumptions' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'Right from the kickoff with Ale, Grinpath’s CTO, we laid out our assumptions to steer our research:',
          },
          {
            type: 'ul',
            content: [
              'Users crave personalized information that feels tailored to them.',
              'Real motivation comes when goals link to daily life.',
              'Users are more driven when they set their own goals.',
              'A lack of motivation (rather than a lack of desire) is the main barrier to treatment progress.',
              'Women over 45 are less likely to engage with an app designed for pain management.',
            ],
          },
        ],
      },
    ],
    [
      { type: 'h2', content: 'research & insights' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'To validate our assumptions and truly understand our target users, we took a two-pronged approach.',
          },
          { type: 'h3', content: 'secondary research' },
          {
            type: 'p',
            content:
              'We dove into the digital world of fibromyalgia—reviewing online forums, social media chatter, and industry articles. Through this deep dive, we discovered that many women face misdiagnoses and a pervasive distrust of conventional medical advice. The complexity and variability of fibromyalgia symptoms underscore the urgent need for a supportive, user-friendly resource.',
          },
          { type: 'h3', content: 'primary research' },
          {
            type: 'p',
            content:
              'The real breakthrough came when we managed to interview several women living with chronic pain. Given the challenges of securing participants for such a sensitive topic, each conversation was gold. These interviews revealed that users aren’t lacking motivation—they’re craving genuine support and understanding. Their primary goal? To reclaim their quality of life so they can be present for their loved ones. They also expressed a deep desire for a community that offers empathy, shared experiences, and even a touch of humor—a stark contrast to the negative cycles common in many existing forums.',
          },
        ],
      },
    ],
    [
      { type: 'h2', content: 'mapping the experience' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'creating linda' },
          {
            type: 'p',
            content:
              'From these rich conversations, we synthesised our insights into a single, well-defined persona: Linda.',
          },
          {
            type: 'p',
            content:
              'In UX design, a user persona is a fictional character that embodies the common traits, challenges, and aspirations of your target audience. Linda isn’t a real person, but her profile represents the typical experience of our users—struggling with isolation, chronic pain, and an overwhelming need for empathy and support.',
          },
          {
            type: 'p',
            content:
              'Using Linda as our guiding light, every design decision was made with her needs in mind.',
          },
        ],
      },
      {
        type: 'img',
        src: persona,
        alt: 'User persona card for Linda Whiteman...',
        className: 'case-study-img',
        style: { maxHeight: '500px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: "getting into linda's shoes" },
          {
            type: 'p',
            content:
              'To further ground our design choices, we mapped out Linda’s journey. This exercise uncovered critical pain points—from moments of deep frustration to flashes of hope when she accessed a helpful resource. By turning these pain points into “How Might We…” opportunities, we reimagined a user experience that supports, empowers, and uplifts.',
          },
        ],
      },
      {
        type: 'img',
        src: journey,
        alt: 'User flow chart capturing Linda’s journey...',
        className: 'case-study-img',
        style: { maxHeight: '600px' },
      },
    ],
    [
      { type: 'h2', content: 'ideation & mvp' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'Armed with our research, we brainstormed ideas and prioritised them using the MOSCOW method. The must-haves quickly emerged:',
          },
          {
            type: 'ul',
            content: [
              'Allow users to set their own goals.',
              'Integrate a personalised behavioural activation program.',
              'Build a community platform that offers real support.',
              'Provide both reactive advice and proactive tips.',
              'Visualize progress in a clear, engaging way.',
            ],
          },
          {
            type: 'p',
            content:
              'For our MVP, we focused on a transformative flow: when Linda is in pain, she taps an “I’m in pain” button and is presented with either a curated library of pain relief resources or an invitation to join a supportive community.',
          },
        ],
      },
      {
        type: 'img',
        src: userFlow,
        alt: 'User flow diagram...',
        className: 'case-study-img',
      },
    ],
    [
      { type: 'h2', content: 'testing & iterating' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'low-fidelity & mid-fidelity wireframes' },
          {
            type: 'p',
            content:
              'We began with quick sketches and low-fi wireframes, testing our ideas with users and our client. Their feedback led to subtle, yet essential tweaks—like enabling users to favourite a resource or fine-tuning profile details.',
          },
        ],
      },
      {
        type: 'img',
        src: conceptSketches,
        alt: 'Multiple hand drawn sketches of different screens...',
        className: 'case-study-img',
      },
      {
        type: 'img',
        src: lowFi,
        alt: 'The same screens now in low-fidelity mode.',
        className: 'case-study-img',
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'Transitioning into mid-fi prototypes, we refined the layouts and information placement to ensure a kind, straightforward flow that resonated with our users’ needs.',
          },
        ],
      },
      {
        type: 'img',
        src: midFi,
        alt: 'The MVP flow now as a mid fidelity prototype.',
        className: 'case-study-img',
      },
    ],
    [
      { type: 'h2', content: 'visual design & high fidelity' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'Before diving into final visuals, we conducted competitive analysis of existing pain management apps—drawing inspiration from platforms like Elsa, Curable, and even apps like Headspace.',
          },
          {
            type: 'p',
            content:
              'Trends emerged: clean sans-serif fonts, soft pastel hues, minimalist illustrations, and rounded corners that evoke calmness.',
          },
        ],
      },
      {
        type: 'img',
        src: competitorAnalysis,
        alt: 'Six diagrams showing colours, typographies, and icons used by similar apps.',
        className: 'case-study-img',
        style: { maxHeight: '300px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'mood board' },
          {
            type: 'p',
            content:
              'We distilled these insights into a mood board centered on key adjectives: friendly, scientific, calm, supportive, and trustworthy. Our mood board wasn’t an arbitrary collage—it was guided by the language Ale used in our kickoff, ensuring Grinpath’s brand voice shone through.',
          },
        ],
      },
      {
        type: 'img',
        src: moodBoard,
        alt: 'Mood board featuring images of connection, health, and peace.',
        className: 'case-study-img',
        style: { maxHeight: '400px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'colour & typography' },
          {
            type: 'p',
            content:
              'After testing over 30 colour options, we settled on a soothing triad palette that exudes support and trust while keeping a playful edge.',
          },
        ],
      },
      {
        type: 'img',
        src: colourPalette,
        alt: "Grinpath's colour palette",
        className: 'case-study-img',
        style: { maxHeight: '150px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'For typography, we kept Grinpath’s Barlow for bodies of text, but opted for Asap for headings, a typeface that injects a bit of fun without losing its reliability.',
          },
        ],
      },
      {
        type: 'img',
        src: typography,
        alt: 'Example of the Asap and Barlow typographies.',
        className: 'case-study-img',
        style: { maxHeight: '300px' },
      },
    ],
    [
      { type: 'h2', content: 'the final prototype' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'The final hi-fi prototype was built around two core paths',
          },
          { type: 'h3', content: 'primary path' },
          {
            type: 'p',
            content:
              'This path is based on our user flow, which focuses on providing immediate pain relief resources. This approach prioritizes simplicity, featuring prominent buttons and minimal options. Our goal is to ensure that Linda can quickly and easily access the help she needs when experiencing pain.',
          },
        ],
      },
      {
        type: 'img',
        src: hiFi1,
        alt: '',
        className: 'case-study-img',
        style: { maxHeight: '500px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'secondary path' },
          {
            type: 'p',
            content:
              "Alternatively users can also explore Grinpath's personalised behavioural activation program. They have the option to view it as a map, allowing them to visualize their progress and future goals, or in a list view for a more straightforward approach, catering to users who prefer a non-game format.",
          },
        ],
      },
      {
        type: 'img',
        src: hiFi2,
        alt: '',
        className: 'case-study-img',
        style: { maxHeight: '500px' },
      },
    ],
    [
      { type: 'h2', content: 'next steps & retrospective' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'Time was tight, so we focused on delivering the MVP. Looking ahead, Grinpath envisions expanding the community space with a dedicated venting section, introducing a mentor system pairing experienced users with newcomers, and enhancing the behavioural activation program through closer collaboration with their medical team.',
          },
          {
            type: 'p',
            content:
              'Reflecting on the project, securing interview participants was challenging and stretched our timeline—but every challenge taught us something invaluable. Given more time, I’d have loved to refine the hi-fi details even further. Working with Beth and Curtis was a true delight; their deep passion for UX pushed me to always strive for excellence.',
          },
        ],
      },
    ],
  ],
};

const meta = {
  title:
    'Javier Quiroga | Revolutionising Fibromyalgia Management with Grinpath',
  description:
    'Learn how Javier Quiroga empowered a MedTech app for women with fibromyalgia through targeted user research and innovative design, enhancing quality of life and community support. Read the complete case study.',
};

const og = {
  title: 'Revolutionising Fibromyalgia Management with Grinpath',
  description:
    'Discover Javier Quiroga’s user-centered approach that transformed a complex MedTech app into a supportive, empowering tool for women managing fibromyalgia.',
  image: 'http://www.javierquiroga.com/seo/og-image-grinpath.jpg',
  url: 'https://javierquiroga.com/design/grinpath',
  type: 'article',
};

export default function Grinpath() {
  return (
    <CaseStudyLayout
      caseStudy={grinpathCaseStudy}
      type="grinpath"
      meta={meta}
      og={og}
    />
  );
}
