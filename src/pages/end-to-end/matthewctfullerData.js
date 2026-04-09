// Images — add imports here when assets are ready
import cover from '../../assets/img/case-studies/matthewctfuller/01-cover.webp';
import siteStructure from '../../assets/img/case-studies/matthewctfuller/02-site-structure.webp';
import wireframes from '../../assets/img/case-studies/matthewctfuller/03-wireframes.webp';
import typography from '../../assets/img/case-studies/matthewctfuller/04-typography.webp';
import colours from '../../assets/img/case-studies/matthewctfuller/05-colours.webp';
import sanityStudio from '../../assets/img/case-studies/matthewctfuller/06-sanity-studio.webp';
import finalSite from '../../assets/img/case-studies/matthewctfuller/07-final-site.webp';
import beforeAfter from '../../assets/img/case-studies/matthewctfuller/08-before-after.webp';

export const meta = {
  title:
    'Javier Quiroga | Designing and Building a Personal Website for a Wellness Coach',
  description:
    'A full end-to-end case study: designing and building a CMS-managed personal brand site for ICF-accredited coach Matthew CT Fuller — from Figma to production with React, TypeScript, and Sanity.',
};

export const og = {
  title: 'Designing and Building a Personal Website for a Wellness Coach',
  description:
    'From a Wix site that was "just fine" to a fully CMS-managed personal brand. Designed, built, and deployed end-to-end by Javier Quiroga.',
  image: 'https://javierquiroga.com/seo/og-image-matthewctfuller.jpg',
  url: 'https://javierquiroga.com/end-to-end/matthewctfuller',
  type: 'article',
};

export const matthewctfullerCaseStudy = {
  header: {
    heading: 'Designing and building a personal website for a wellness coach',
    subheading:
      'From a Wix site that was "just fine" to a fully CMS-managed personal brand Designed, built, and deployed end-to-end.',
    img: {
      src: cover,
      alt: 'Screenshot of the finished Matthew CT Fuller website',
    },
    details: [
      {
        heading: 'design',
        items: ['Figma'],
      },
      {
        heading: 'stack',
        items: [
          'React 19',
          'TypeScript',
          'Sanity CMS',
          'CSS Modules',
          'React Router v7',
          'Vite',
        ],
      },
      {
        heading: 'my role',
        items: ['Design', 'Development', 'Deployment'],
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
              'Matthew CT Fuller is an ICF-accredited coach, speaker, and LGBTQIA+ advocate based in London. He works with professionals navigating addiction, major life transitions, and personal growth, combining behavioural insight with a direct, compassionate approach. He also runs The Wellbeing Hypocrite Club, a support network for professionals in the wellness space.',
          },
          { type: 'h3', content: 'the brief' },
          {
            type: 'p',
            content:
              'Matthew had a Wix site. It did the job, but it didn\'t really represent him. For a coach whose whole offer is built on trust and credibility, "functional" only gets you so far. He needed something that actually looked like him: premium, warm, trustworthy.',
          },
          {
            type: 'p',
            content:
              "One requirement wasn't negotiable: he needed to manage his own content. New podcast appearances, updated services, a different hero image, all without emailing a developer every time. I also pitched a custom links page instead of Linktree: something that fit the rest of the site rather than sticking out like a third-party tool.",
          },
        ],
      },
    ],
  },
  sections: [
    {
      heading: 'kickoff',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'We started with a brainstorm, not a rigid brief. We pulled references together, tested colour combinations, and worked out what the site needed to feel like before either of us touched Figma. The words that kept coming up: premium, warm, credible.',
            },
          ],
        },
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'We also looked at other coaches\' sites to understand the conventions in the space, and agreed on a long single-page homepage with "Get in touch" at the bottom as the destination for almost every call to action. The homepage would preview the About and the Services section, which would each get their own page.',
            },
          ],
        },
        {
          type: 'image',
          src: siteStructure,
          alt: 'Diagram comparing the old site structure to the new one',
          maxHeight: 350,
        },
      ],
    },
    {
      heading: 'wireframes & content',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'With the structure signed off, I moved into Figma. Lo-fi wireframes first, then mid-fi with lorem ipsum for Matthew to review before any real content went in.',
            },
          ],
        },
        {
          type: 'image',
          src: wireframes,
          alt: 'Mid-fidelity wireframes of the site in Figma',
          maxHeight: 500,
        },
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                "Once he approved the structure, I gave him homework: write the content. He came back with solid copy, clear and factual. We spent the most time on the homepage snippets, which needed to pull the reader in, not just tell them what's on the page. We went back and forth on those a few times and landed somewhere good.",
            },
          ],
        },
      ],
    },
    {
      heading: 'visual identity',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'Manrope throughout, self-hosted, three weights. Clean enough for body text, enough personality to work at heading size. H1s are uppercase and bold, which gives the site a bit of weight without tipping into aggressive. It stays out of the way of the content, which is what you want on a personal brand site.',
            },
          ],
        },
        {
          type: 'image',
          src: typography,
          alt: 'Typography specimen showing Manrope at various weights and sizes',
          maxHeight: 400,
        },
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                "The palette came directly from the moodboard. Deep velvety green as the base, an off-white that leans warm, and gold across headings, buttons, and hover states. Green is everywhere in wellness for a reason, it reads as calm and grounded, but this shade is dark enough that it doesn't feel like a yoga studio. The gold keeps it from going too cold or corporate.",
            },
            {
              type: 'p',
              content:
                'Getting that combination to pass accessibility contrast tests took longer than expected, as some pairings we both liked visually failed completely. We went back and forth until we had something that held up.',
            },
          ],
        },
        {
          type: 'image',
          src: colours,
          alt: 'Web colour palette for the Matthew CT Fuller site',
          maxHeight: 200,
        },
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'Border radius is 4px across all components. Just enough to take the edge off, not so much that anything looks bubbly.',
            },
          ],
        },
      ],
    },
    {
      heading: 'why sanity',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                "The content independence requirement shaped the whole technical approach. A static site with hardcoded copy would mean Matthew emailing me every time he needed to change or add anything. That's not a product, that's a support contract neither of us wanted.",
            },
          ],
        },
        {
          type: 'image',
          src: sanityStudio,
          alt: 'Screenshot of the Sanity Studio CMS interface',
          maxHeight: 400,
        },
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                "Sanity is a headless CMS, content lives separately from the code, and Matthew edits it through a studio interface without touching any files. I built the schemas to match exactly what he needed to control: headings, body text, images, testimonials, services, CTAs, and the links page. Then I populated every field myself using the content he'd written, and handed the keys over.",
            },
          ],
        },
      ],
    },
    {
      heading: 'learning sanity',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                "I hadn't used a headless CMS before this project. GROQ, Sanity's query language, was new. TypeGen, which auto-generates TypeScript types from the Sanity schema so the frontend always knows the shape of the data coming in, was new. All of it, learned on a live project with a real client waiting.",
            },
            {
              type: 'p',
              content:
                'It was confusing at times, but what kept me going was watching the schemas I built shape the studio interface and through that, the live site. When something is actually live and a real person is waiting on it, you read the documentation properly.',
            },
          ],
        },
      ],
    },
    {
      heading: 'under the hood',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'There are a couple of implementation details worth walking through. Not the flashiest parts of the project, but the kind of decisions that make the thing actually work well.',
            },
            { type: 'h3', content: 'in-memory cache on loaders' },
            {
              type: 'p',
              content:
                "I added a simple in-memory cache so the site doesn't hit the Sanity API more than it needs to. First visit fetches fresh. After that, the data lives in memory for the rest of the session. Same content, no extra requests.",
            },
          ],
        },
        {
          type: 'code',
          language: 'typescript',
          code: `const cache = new Map<string, SanityDocument>();

export async function homepageLoader() {
  const cacheKey = 'homepage';
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const data = await client.fetch(HOMEPAGE_QUERY);
  cache.set(cacheKey, data);
  return data;
}`,
        },
        {
          type: 'text',
          content: [
            { type: 'h3', content: 'testimonials carousel' },
            {
              type: 'p',
              content:
                "The carousel auto-advances every 6 seconds and resets if the user navigates manually. The trickier part was the transition: if you just swap the content directly, you get a brief flash of the wrong testimonial mid-fade. So instead it fades out first, swaps while nothing is visible, then fades back in. Three states instead of two, but it's the difference between something that feels polished and something that doesn't.",
            },
          ],
        },
        {
          type: 'code',
          language: 'tsx',
          code: `function handleTransitionEnd() {
  if (!isVisible && targetIndex !== null) {
    setIndex(targetIndex);
    setTargetIndex(null);
    setIsVisible(true);
  }
}

function changeToIndex(newIndex: number) {
  setIsVisible(false);
  setTargetIndex(newIndex);
}`,
        },
      ],
    },
    {
      heading: 'result',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content: [
                { type: 'text', content: 'The site is live at ' },
                {
                  type: 'a',
                  href: 'https://matthewctfuller.com',
                  content: 'MatthewCTFuller.com',
                  external: true,
                },
                {
                  type: 'text',
                  content:
                    '. Matthew manages all his content through Sanity Studio. ',
                },
                {
                  type: 'a',
                  href: 'https://matthewctfuller.com/links',
                  content: 'The links page',
                  external: true,
                },
                {
                  type: 'text',
                  content:
                    ', a custom alternative to Linktree, is live and in use.',
                },
              ],
            },
          ],
        },
        {
          type: 'image',
          src: beforeAfter,
          alt: 'Side by side comparison of the old Wix site and the new custom site',
          maxHeight: 500,
        },
      ],
    },
    {
      heading: 'what i learned',
      content: [
        {
          type: 'text',
          content: [
            {
              type: 'p',
              content:
                'This was my first end-to-end client project. Not a project for myself, not a practice build. Someone was paying for the outcome, and they were going to use it every day.',
            },
            {
              type: 'p',
              content:
                'That changes the stakes on decisions you might otherwise shrug off. Getting the Sanity schema right mattered because Matthew would live with whatever I built. Explaining a design decision clearly mattered because he needed to trust it, not just accept it.',
            },
            {
              type: 'p',
              content:
                "Technically: Sanity, GROQ, TypeGen, and my first production TypeScript project. The auto-generated types from the schema meant the frontend and CMS stayed in sync without any manual effort, something I'll be using again.",
            },
          ],
        },
        {
          type: 'image',
          src: finalSite,
          alt: 'Screenshots of the finished Matthew CT Fuller website',
          maxHeight: 500,
        },
      ],
    },
  ],
};
