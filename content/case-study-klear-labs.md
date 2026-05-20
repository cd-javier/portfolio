# Klear Labs: End-to-End Design and Development with AI Tooling

**Designing, directing, and deploying a full website and online shop for a Notting Hill café using AI-powered development**

URL: https://javierquiroga.com/end-to-end/klear-labs  
Live site: https://klear-labs.com

[IMG: Decorative cover image for the Klear Labs case study]

---

## Project Details

|              |                                         |
| ------------ | --------------------------------------- |
| **Client**   | Klear Labs, Notting Hill                |
| **Tools**    | Figma, FigJam, Lovable, Claude, Shopify |
| **Timeline** | ~20 hours over 6 weeks                  |
| **Role**     | Design, Development, Deployment         |

---

## The Brief

Klear Labs is a gluten-free, sugar-free, organic, regenerative café on Golborne Road in Notting Hill. Everything is made from scratch with quality ingredients, including. The drinks menu features adaptogens and functional waters backed by actual nutritional research. In a food landscape of vanilla hazelnut oat frappuccinos and artisan-pretending everything, Klear Labs is quietly punk.

[IMG: Interior of Klear Labs café on Golborne Road, Notting Hill]

Lovable, an AI-powered development platform, had approached the owner with free credits and an open brief: build something, explore what the tool can do, give us feedback. She didn't have the bandwidth for it and brought me in to take over. The starting point was an existing Shopify site built on a template, with a shop that existed but had been sitting inactive. The brief was loose but directionally clear: build something that actually looks like us: bold, image-forward, different.

The design challenge was that Klear Labs has two things going on at once. The food and drink is restrained, considered, nothing unnecessary on the plate. But the position it takes (no grains, no sugar, everything made in house, adaptogens on the menu) is pretty uncompromising. The site needed to feel like both. Calm, but not soft. Bold, but not loud.

---

## Starting Point: Design

Before anything was prompted into Lovable, we spent time in FigJam working out the structure and what the site should feel like. Three references set the tone early.

Seed, for the way it treats something scientifically innovative as something worth celebrating visually. The site doesn't just explain what the product is, it makes you feel why it matters, with scroll-driven effects and a design language that feels as considered as the product itself. Aesop, for being relentlessly image-forward, trusting full-width photography to carry the page, and never decorating what doesn't need decorating. Studio Feixen, for its typography and colour choices: very deliberate, very confident, not trying to appeal to everyone.

[IMG: Screenshots of the three reference websites — seed.com, aesop.co.uk, and studiofeixen.ch — showing their visual direction]

From those references, a few things were clear. The background colour was chosen to mirror the wall colour of the café itself. Josefin Sans, already used in the previous site, was kept. A minimal palette so the images could dominate without competing with anything. No decorative UI elements. The Klear Labs logo, a circle inscribed in a square, would carry through into the visual language across the whole site.

The process had two distinct design phases. Early on I had a rough layout in Figma alongside the first version of the homepage. Once that direction was set aside (more on that below), I went back to Figma and redesigned at high fidelity with a lot more detail before writing a single new prompt. Every design decision came from me. Lovable's job was to build what I'd already decided, not to figure it out as it went.

---

## Exploration: Going Deep Before Pulling Back

The first homepage direction never made it to the live site, and it's worth talking about anyway.

The concept was an interactive homepage built around animated elements moving across the page as the user scrolled, each independent, on its own path, responding to each other and to the physics of movement. Getting there meant going deep into Three.js, researching shader materials, sourcing and importing texture files independently, and building out features like collision detection and velocity-driven rotation to make the movement feel physically convincing. It took a lot of work to get it where it needed to be.

It was also wrong for the site. The animation was great, but pairing something like that with a bold, image-forward direction meant one would have to give, and we weren't willing to give up either. So we put it in a drawer, preserved for a future page where it might fit, and started the homepage again with a clearer brief.

That process wasn't a detour. Going that deep into something early was how I figured out how Lovable actually works: what it handles on its own, where it needs very specific instruction, and how to read what it's built rather than just what it shows in the preview. I would not have been as effective on the rest of the project without it.

---

## Building with Lovable

Lovable generates React and TypeScript from natural language prompts. What it does with those prompts depends almost entirely on how precisely they're written.

The most effective approach turned out to be treating it less like a search engine and more like a junior developer in a planning meeting. In plan mode, before any code is generated, Lovable lays out its intended approach. Reading that plan carefully, understanding what it was proposing, questioning anything that didn't make sense, and editing before build rather than fixing after, produced better results and used fewer tokens than writing long prompts and correcting the output downstream. In build mode, small and specific beats long and vague every time.

[IMG: Screenshot of Lovable's plan mode showing a prompt and the generated build plan for the Klear Labs site]

One pattern Lovable fell into repeatedly was generating flat sibling structures instead of nested ones. On the smoothies page, this produced large gaps between elements that were logically part of the same section, because they'd been coded as separate top-level components rather than children of a shared container. Catching that required opening devtools, reading the DOM, and understanding what the structural problem actually was before prompting for the fix. On smaller things, like tweaking a stroke width on a shape or adjusting a specific value that was clearly just wrong, it was faster to go into the file directly and change it myself than to spend a prompt on something I could fix in ten seconds.

The homepage scroll animation (a circle and a square entering from opposite sides of the screen and meeting at the centre as the section scrolls into view, referencing the café's own logo) took several sessions to feel right. The shapes, the easing, the timing all needed multiple rounds of iteration, and the fixes came not from reprompting the whole thing but from reading the code directly, identifying the specific values that were off, and changing them myself. That is not a prompting skill, that is just knowing how to read code.

---

## The Designer-Developer Gap

About two thirds of the way through the build, the site worked but didn't fully cohere. Buttons across different pages were slightly inconsistent. Product cards on the homepage and in the shop had been built separately and were almost identical but not quite, with small variations in spacing and type that weren't immediately visible but read as slightly off.

It could have shipped like that. A non-designer using Lovable for the first time would have been happy with it, and honestly proud of it. But there is a thing that happens with inconsistency in UI: users don't know exactly what's wrong, but they feel it. Something is off. It wears down trust in the product before they can say why.

A designer notices these things. The instinct isn't to fix the symptom (tweak the padding here, adjust the font there) but to fix the source. And in a React codebase, the source is always the same: components that should be shared aren't.

In Figma, designers build component libraries so things stay consistent and reusable. React developers do the same, it's arguably the central idea of the framework. But Lovable, left to its own devices, doesn't. It builds things that look similar without making them structurally the same. Because it was so obvious to me that product cards on the homepage and in the shop should be a single component with a prop controlling whether the description showed, and that every button on the site should come from one place with props for colour, size, and destination, I almost missed that Lovable hadn't done it. When I caught it, one prompt each was all it took. But only because the diagnosis was right.

The same thinking applied to typography. The general style was consistent enough across pages, but the hierarchy wasn't enforced. Eyebrow labels, page titles, section titles, detail labels, body text: all close, none systematic. Going through the site and specifying exactly what each level should be, and making sure it was applied the same way everywhere, is something a designer notices and a developer enforces.

[IMG: Collection of UI details from the live Klear Labs site showing cohesive buttons, product cards, and typography hierarchy across pages]

---

## The Shop

Lovable is a frontend tool. It generates UI, handles routing, manages state, but it has no backend, and a shop needs one. Klear Labs already used Shopify for the previous site, so connecting the two made sense. Getting them to talk was the tricky part.

Navigating Shopify's setup took longer than expected, mostly because the current admin flow routes app creation through a dashboard that generates the wrong type of credentials for a frontend integration. Once the right access token was in place, a cart context, product fetching, a cart drawer, and a full product page were all built out through Lovable. Products on the shop page are fetched from a specific Shopify collection so the display order on the site matches whatever order is set in the Shopify admin, giving the owner full control without touching any code.

Everything worked in the Lovable subdomain. It looked great, we were proud of the final product, so we pointed the domain to Lovable's servers, and when that was live, the checkout broke immediately. Shopify was generating checkout URLs pointing to the new domain rather than to Shopify's own checkout flow, so every attempt returned a 404. A dedicated checkout subdomain would have solved it cleanly, but that feature is Shopify Plus only. The fix was to remove the custom domain from Shopify's settings entirely, so checkout stays on the native Shopify URL. It works, and it has been working since.

[IMG: Screenshot of the Klear Labs shop page with the cart drawer open]

---

## Result

The site is live at klear-labs.com with a fully functional shop connected to Shopify. The homepage runs edge to edge with no max-width constraint, holding up on large screens and scaling cleanly to mobile. The smoothies page carries a lot of text by necessity and is still navigable. I put a lot of work into the structure so the copy doesn't become a wall. Those were the two hardest layout problems to get right.

The original animation concept didn't ship. It's preserved in Lovable and will likely surface on a future page when the context fits.

[IMG: Klear Labs homepage on desktop and mobile, and the about page on desktop and mobile]

Looking back, the main thing I kept running into was that Lovable doesn't make design decisions. It builds. Every call about what something should look like, how it should behave, whether it was consistent with the rest of the site: that was on me. What the tool gave me was speed. I could go from a decision to a built, deployable version of it in the same session, without a developer in the loop. That changes what's possible working alone. But it only works if you're actually making the decisions, not just accepting whatever the tool produces.
