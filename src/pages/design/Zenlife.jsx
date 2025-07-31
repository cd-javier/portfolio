import CaseStudyLayout from '../../Layouts/CaseStudyLayout';
import './ZenLife.css';

import cover from '../../assets/img/case-studies/zenlife/01-cover.jpg';
import firstSitemap from '../../assets/img/case-studies/zenlife/02-first-sitemap.webp';
import secondSitemap from '../../assets/img/case-studies/zenlife/03-second-sitemap.webp';
import homepage from '../../assets/img/case-studies/zenlife/04-homepage.webp';
import news from '../../assets/img/case-studies/zenlife/05-news.webp';
import wellness from '../../assets/img/case-studies/zenlife/06-wellness.webp';
import wellnessPrograms from '../../assets/img/case-studies/zenlife/07-wellness.webp';
import profileSettings from '../../assets/img/case-studies/zenlife/08-settings.webp';
import settingsScreens from '../../assets/img/case-studies/zenlife/09-settings.webp';
import blankScreens from '../../assets/img/case-studies/zenlife/10-empty-states.webp';
import emptyStates from '../../assets/img/case-studies/zenlife/11-empty-states.webp';

const zenlifeCaseStudy = {
  header: {
    heading: 'Enhancing the user experience for a lifestyle app',
    subheading:
      'Collaborating with a startup in the wellness industry to transform a complex app into an intuitive and user-friendly experience',
    img: { src: cover, alt: 'Decorative cover image for ZenLife case study' },
    details: [
      {
        heading: 'tools',
        content: ['Figma', 'Figjam', 'Google Suite', 'Adobe Creative Suite'],
      },
      {
        heading: 'methods',
        content: [
          'User testing',
          'Heuristic Evaluation',
          'Information Architecture Analysis',
          'Wireframing',
        ],
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
              'I teamed up with a startup in the wellness industry to transform ZenLife—a beta app that offers eastern wellness practices like yoga, meditation, and kung-fu—into an intuitive, user-friendly experience. With just 10 days on the clock, my goal was to cut through the clutter and make the app feel as inviting and clear as the mindful practices it celebrates.',
          },
          { type: 'h3', content: 'the challenge' },
          {
            type: 'p',
            content:
              'ZenLife had been built with passion, but the founders were so immersed in perfecting every detail that they lost sight of the user’s perspective. When I first explored the beta, I found myself wandering through confusing menus and complex features—if I could get lost, so would the users. It was clear: the app needed a major usability tweak, starting with a fresh information architecture and a clearer design approach.',
          },
        ],
      },
    ],
  },
  content: [
    [
      { type: 'h2', content: 'our approach' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'I started with a “hands-on user testing session.” I treated my first interaction with ZenLife as a genuine exploration, mapping out features and screens without any preconceived notions. From there, I zeroed in on one of the most critical aspects: the information architecture.',
          },
          { type: 'h3', content: 'information architecture refresh' },
          {
            type: 'p',
            content:
              'I began by sketching the app’s initial sitemap, which felt cluttered and overwhelming.',
          },
        ],
      },
      {
        type: 'img',
        src: firstSitemap,
        alt: "Diagram showing ZenLife's previous sitemap, cluttered with many arrows outlining the structure and navigation flow.",
        className: 'case-study-img',
        style: { maxHeight: '350px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'After researching best practices and analysing similar apps, I restructured the sitemap into a more intuitive, user-friendly flow.',
          },
        ],
      },
      {
        type: 'img',
        src: secondSitemap,
        alt: "Diagram showing ZenLife's new sitemap, presenting a more streamlined, clear, and organised structure.",
        className: 'case-study-img',
        style: { maxHeight: '350px' },
      },
    ],
    [
      { type: 'h2', content: 'redesign' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'I iterated through a series of designs—moving from low-fidelity sketches to polished hi-fi screens—to breathe clarity and purpose into every key area of the app.',
          },
          { type: 'h3', content: 'homepage' },
          {
            type: 'p',
            content:
              'The homepage is the dashboard of ZenLife—it needs to provide a snapshot of your profile, calendar, and notifications at a glance. In the original design, news dominated the space while essential features were shoved into a secondary carousel. I flipped that around, giving key functions prime real estate and relegating news to its own dedicated page.',
          },
        ],
      },
      {
        type: 'img',
        src: homepage,
        alt: 'Three side-by-side screenshots of the ZenLife dashboard. The left image shows the original design with a cluttered layout dominated by a news feed. The middle image is a mid-fidelity redesign in grayscale that repositions the calendar and key features, while the right image is the final design—nearly identical to the mid-fidelity version but enhanced with a refined colour palette.',
        className: 'case-study-img',
        style: { maxHeight: '450px' },
      },
    ],
    [
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'news' },
          {
            type: 'p',
            content:
              'The news section now lives on a separate screen with a clear hierarchy: the latest article grabs your attention first, and once read, it fades out to keep the focus on what’s new.',
          },
        ],
      },
      {
        type: 'img',
        src: news,
        alt: 'Three side-by-side interface designs comparing iterations of the ZenLife app. The first screenshot shows the same homepage as in the previous image. The new design shows a simple an minimalist news feed, separate from the homepage.',
        className: 'case-study-img',
        style: { maxHeight: '450px' },
      },
    ],
    [
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'wellness' },
          {
            type: 'p',
            content:
              'Since wellness is the heart of ZenLife, I merged what were once separate “Videos” and “Wellness Services” into one cohesive Wellness section. It’s now organised into:',
          },
          {
            type: 'ul',
            content: [
              {
                title: 'Live',
                description: 'showing current and upcoming livestreams.',
              },
              {
                title: 'Wellness Programs',
                description:
                  'complete with brief explanations to help users distinguish between different content types.',
              },
              {
                title: 'Your Library',
                description: 'a dedicated space for your own lessons.',
              },
              {
                title: 'Purchase More Classes',
                description:
                  'making it easy to expand your learning. I crafted a seamless, engaging flow for this section so that every wellness experience feels natural.',
              },
            ],
          },
        ],
      },
      {
        type: 'img',
        src: wellness,
        alt: "Two mobile screenshots of the ZenLife wellness interface. The first screenshot displays the top view with clearly defined sections for Live sessions, Wellness Programs, Your Library, and a 'Purchase More Classes' button. The second screenshot shows the same screen scrolled down to reveal additional wellness program cards below the initial viewport.",
        className: 'case-study-img',
        style: { maxHeight: '450px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'I added a brief explanation of the various sections within the Wellness Programs. This will allow users to make informed choices based on the information provided within the app, without the need for external research that might divert their attention away from the app.',
          },
        ],
      },
      {
        type: 'img',
        src: wellnessPrograms,
        alt: "Three aligned mobile interface iterations of the Pranayama selection screen within Wellness Programs. The first one, labeled 'current design', features four cards for different pranayamas. The second one, labeled 'mid-fidelity', features a similar screen in grayscale, but under each heading for pranayama there is a placeholder for a brief description. The third one, labeled 'high fidelity', looks exactly like the second one but colours and images have been added.",
        className: 'case-study-img',
        style: { maxHeight: '450px' },
      },
    ],
    [
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'menu & settings' },
          {
            type: 'p',
            content:
              'Originally, ZenLife featured a “Menu” with a hamburger icon that lumped together settings and other items—confusing and counterintuitive. I rebranded this as “Settings” and tucked it neatly into the profile. This change not only declutters the navbar but also mirrors familiar patterns seen in apps like Instagram and TikTok, making it easier for users to find what they need.',
          },
        ],
      },
      {
        type: 'img',
        src: profileSettings,
        alt: "Annotated screenshot of the 'profile' section in the app. The screen looks similar to Instagram's profile grid. There's an arrow at the bottom left pointing at the navbar: 'simpler navbar', one on the bottom right: 'room for upcoming features', and one on the top right, pointing at a settings icon 'intuitive placement for users. As seen on: Instagram, TikTok, Tumblr, BeReal'",
        className: 'case-study-img',
        style: { maxHeight: '400px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              "I divided the settings page into sections, making it easier for the user to quickly scan the screen and find what they're looking for.",
          },
        ],
      },
      {
        type: 'img',
        src: settingsScreens,
        alt: "Three part screenshot of the settings page. The first screen, labeled 'current design', it's a list of many unorganised features. The second screen, labeled 'mid-fidelity', presents the same screen in black and white, but this time the settings are grouped under headings like 'account settings', 'help', and 'privacy and terms'. The third screen, labeled 'high- fidelity', looks the same as the second but it follows the app's colour palette and icons.",
        className: 'case-study-img',
        style: { maxHeight: '450px' },
      },
    ],
    [
      {
        type: 'div',
        className: 'text-body',
        content: [
          { type: 'h3', content: 'empty states' },
          {
            type: 'p',
            content:
              'Blank screen can leave users feeling stranded, and in the version of ZenLife that I was first shown, there was a lot of them.',
          },
        ],
      },
      {
        type: 'img',
        src: blankScreens,
        alt: 'Three screenshots of the app, showing the inbox, the profile, and the community page. All three are blank without any content.',
        className: 'case-study-img',
        style: { maxHeight: '450px' },
      },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'To address this, I designed thoughtful empty states with clear, friendly messages that guide users on what to do next.',
          },
        ],
      },
      {
        type: 'img',
        src: emptyStates,
        alt: "Four screenshots of the app. The first one, labeled 'inbox', features a gray icon in the middle and the text 'you don't have any messages. Tap the + icon to start your first conversation'. The second one, labeled 'profile' features an icon with the text 'This profile doesn't have ant posts yet'. The third one, labeled 'community', features an icon with the text 'You don't follow any connections yet. Tap the + icon to find your first connection'. And the fourth screen, labeled 'notifications', features an icon with the text 'you don't have any notifications'",
        className: 'case-study-img',
        style: { maxHeight: '450px' },
      },
    ],
    [
      { type: 'h2', content: 'retrospective' },
      {
        type: 'div',
        className: 'text-body',
        content: [
          {
            type: 'p',
            content:
              'Convincing the client to embrace these changes wasn’t easy, but data-backed user testing made it undeniable. This project reinforced a core belief: while deep expertise is essential, keeping the user front and center is what truly drives a great experience.',
          },
          {
            type: 'p',
            content:
              'By refreshing the information architecture and applying iterative, user-focused design, ZenLife transformed from a maze of features into a calm and coherent journey. Every pixel earned its place—and every decision led back to making users feel confident, supported, and understood.',
          },
        ],
      },
    ],
  ],
};

const meta = {
  title:
    'Javier Quiroga | ZenLife Unlocked: Transforming Complexity into Clarity in Wellness UX',
  description:
    'Explore how Javier Quiroga revamped a wellness app into a user-centered, intuitive experience that seamlessly blends design with functionality. Read the full case study.',
};

const og = {
  title:
    'ZenLife Unlocked: Transforming Complexity into Clarity in Wellness UX',
  description:
    'Check out Javier Quiroga’s detailed UX transformation that turned a complex wellness app into an engaging, easy-to-use platform where clarity meets innovation.',
  image: 'http://www.javierquiroga.com/seo/og-image-zenlife.jpg',
  url: 'https://javierquiroga.com/design/zenlife',
  type: 'article',
};

export default function Zenlife() {
  return (
    <CaseStudyLayout
      caseStudy={zenlifeCaseStudy}
      type="zenlife"
      meta={meta}
      og={og}
    />
  );
}
