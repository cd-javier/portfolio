import cover from '../../assets/img/case-studies/lesgo/01-cover.webp';
import aesthetic from '../../assets/img/case-studies/lesgo/02-aesthetic.webp';
import palette from '../../assets/img/case-studies/lesgo/03-palette.webp';
import cornerRadius from '../../assets/img/case-studies/lesgo/04-corner-radius.webp';
import iconography from '../../assets/img/case-studies/lesgo/05-iconography.webp';
import navigation from '../../assets/img/case-studies/lesgo/06-navigation.webp';
import safetyBeacon from '../../assets/img/case-studies/lesgo/07-safety-beacon.webp';
import calendar from '../../assets/img/case-studies/lesgo/08-calendar.webp';
import plusOne from '../../assets/img/case-studies/lesgo/09-plus1.webp';

export const meta = {
  title:
    'Javier Quiroga | Refining LESGO: A UX Journey to Revitalize Queer Connections',
  description:
    'Discover how Javier Quiroga transformed an innovative Australian LGBTQIA+ dating app by enhancing its design, accessibility, and usability for a broader audience. Read the full UX case study.',
};

export const og = {
  title: 'Refining LESGO: A UX Journey to Revitalize Queer Connections',
  description:
    'Dive into the comprehensive redesign by Javier Quiroga, where a passionate overhaul turned a dated dating app into a modern, accessible experience for the LGBTQIA+ community.',
  image: 'http://www.javierquiroga.com/seo/og-image-lesgo.jpg',
  url: 'https://javierquiroga.com/design/lesgo',
  type: 'article',
};

export const lesgoCaseStudy = {
  header: {
    heading: 'Refining LESGO: A UX Journey to Revitalize Queer Connections',
    subheading:
      'Teaming up with an innovative app to enhance aesthetics and usability in queer dating',
    img: { src: cover, alt: 'Decorative cover image for LESGO case study' },
    details: [
      {
        heading: 'tools',
        items: ['Figma', 'Figjam', 'Adobe Creative Suite'],
      },
      {
        heading: 'methods',
        items: ['User interviews', 'Competitor Analysis', 'Wireframing'],
      },
      {
        heading: 'primary target',
        items: ['Queer men', 'Late 20s - Early 30s', 'London, UK'],
      },
    ],
    intro: [
      {
        type: 'text',
        content: [
          { type: 'h3', content: 'the client' },
          {
            type: 'p',
            content:
              'LESGO is an Australian LGBTQIA+ dating app that lets you switch easily between friendship, dating, or casual swiping. With plans to break into the UK market, the app needed a design boost to attract a new audience while keeping its fun, inclusive spirit intact.',
          },
          { type: 'h3', content: 'the challenge' },
          {
            type: 'p',
            content:
              'Even though LESGO was built with heart, it hadn\'t had the luxury of a true UX makeover. With the design managed by tight-budget teams and multitasking stakeholders, it ended up with a mismatched look, clunky navigation, and some accessibility oversights. In short, it was crying out for a "facelift." I knew it was time to simplify interactions, tidy up the visuals, and make the whole experience feel as welcoming as the community it serves.',
          },
        ],
      },
    ],
  },
  sections: [
    {
      heading: 'our approach',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                "I dove in with a user-first mindset, determined to blend innovation with a nod to the app's playful origins. The aim was clear: modernise the look and feel while smoothing out usability bumps—all without compromising its uniquely queer vibe.",
            },
          ],
        },
        {
          type: 'image',
          src: aesthetic,
          alt: 'Comparison screenshot of the LESGO app interface before and after the redesign.',
          maxHeight: 550,
        },
        {
          type: 'text',
          content: [
            { type: 'h3', content: 'visual identity overhaul' },
            { type: 'h4', content: 'first impressions' },
            {
              type: 'p',
              content:
                "The initial design felt a bit disjointed—clashing colours, inconsistent icon choices, and random corner curves that didn't add up.",
            },
            { type: 'h4', content: 'colour pop' },
            {
              type: 'p',
              content:
                "I kept LESGO's signature blue but refreshed the palette with bolder off-white and off-black tones, using subtle gradients to ease eye strain and keep things modern.",
            },
          ],
        },
        {
          type: 'image',
          src: palette,
          alt: 'Final color palette for the LESGO app redesign.',
          maxHeight: 400,
        },
        {
          type: 'text',
          content: [
            { type: 'h4', content: 'shape matters' },
            {
              type: 'p',
              content:
                'I ditched the random rounded corners in favor of a deliberate system: a neat 4px radius for most elements, a comfortable 16px for swipe cards, and full roundness where it felt right.',
            },
          ],
        },
        {
          type: 'image',
          src: cornerRadius,
          alt: 'Comparison image showing the evolution of border radiuses.',
          maxHeight: 350,
        },
        {
          type: 'text',
          content: [
            { type: 'h4', content: 'typography & icons' },
            {
              type: 'p',
              content:
                'Instead of a mix-and-match approach (hello, emoji overload!), I standardised the type and icons. Strong, clear titles paired with intuitive icons now quickly communicate each function.',
            },
          ],
        },
        {
          type: 'image',
          src: iconography,
          alt: 'Grid of redesigned app icons featuring a cohesive modern aesthetic.',
          maxHeight: 200,
        },
      ],
    },
    {
      heading: 'navigation refresh',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'The original design tried to be minimalist, but that meant users were left guessing which button did what. To solve this, I introduced a straightforward navigation bar with four clear sections: Home, Messages, Explore, and Profile/Settings. This change not only cleared up confusion but also set the stage for future features.',
            },
          ],
        },
        {
          type: 'image',
          src: navigation,
          alt: 'Side-by-side comparison of navigation designs.',
          maxHeight: 500,
        },
      ],
    },
    {
      heading: 'user testing & iteration',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'Real users should always guide the process, so we put this into practice and tested our changes, focusing on particulars that we had doubts on:',
            },
            { type: 'h4', content: 'swiping clarity' },
            {
              type: 'p',
              content:
                'They found the newly labeled swiping modes instantly understandable.',
            },
            { type: 'h4', content: 'finding your way' },
            {
              type: 'p',
              content:
                'The updated navigation meant settings and features were now accessible in a snap.',
            },
            { type: 'h4', content: 'icon wins' },
            {
              type: 'p',
              content:
                'For the Explore section, testing showed that a magazine icon hit the mark, aligning perfectly with what users expected.',
            },
          ],
        },
      ],
    },
    {
      heading: "what's next",
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'Feedback was overwhelming—in a good way. The "facelift" transformed LESGO into an app that\'s not only visually fresh but also a breeze to use. And the journey doesn\'t end here. New ideas are already on the horizon:',
            },
            { type: 'h4', content: 'safety beacon' },
            {
              type: 'p',
              content:
                'A quick-tap feature to share your real-time location with a loved one when you need peace of mind.',
            },
          ],
        },
        {
          type: 'image',
          src: safetyBeacon,
          alt: 'Three-part wireframe for the Safety Beacon feature.',
          maxHeight: 500,
        },
        {
          type: 'text',
          content: [
            { type: 'h4', content: 'events calendar' },
            {
              type: 'p',
              content: 'A one-stop hub for all LGBTQIA+ friendly events.',
            },
          ],
        },
        {
          type: 'image',
          src: calendar,
          alt: 'Two-part screenshot of an events calendar interface.',
          maxHeight: 500,
        },
        {
          type: 'text',
          content: [
            { type: 'h4', content: '+1 feature' },
            {
              type: 'p',
              content:
                'For those nights when you want company for a film, a show, or a night out.',
            },
          ],
        },
        {
          type: 'image',
          src: plusOne,
          alt: 'Three-screen wireframe of the +1 feature.',
          maxHeight: 500,
        },
        {
          type: 'text',
          heading: 'lessons learned',
          content: [
            {
              type: 'p',
              content:
                'Working on LESGO reminded me why I love the process of design. I almost jumped straight into prototyping, but taking the time to really talk to users and sketch out ideas made all the difference. Every conversation and little insight enriched the final product and taught me to trust—and enjoy—the journey every step of the way.',
            },
          ],
        },
      ],
    },
  ],
};
