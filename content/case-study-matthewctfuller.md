# Designing and Building a Personal Website for a Wellness Coach

**From a Wix site that was "just fine" to a fully CMS-managed personal brand. Designed, built, and deployed end-to-end.**

URL: https://javierquiroga.com/end-to-end/matthewctfuller  
Live site: https://matthewctfuller.com

[IMG: Screenshot of the finished Matthew CT Fuller website]

---

## Project Details

| | |
|---|---|
| **Design** | Figma |
| **Stack** | React 19, TypeScript, Sanity CMS, CSS Modules, React Router v7, Vite |
| **My Role** | Design, Development, Deployment |

---

## Introduction

### The Client

Matthew CT Fuller is an ICF-accredited coach, speaker, and LGBTQIA+ advocate based in London. He works with professionals navigating addiction, major life transitions, and personal growth, combining behavioural insight with a direct, compassionate approach. He also runs The Wellbeing Hypocrite Club, a support network for professionals in the wellness space.

### The Brief

Matthew had a Wix site. It did the job, but it didn't really represent him. For a coach whose whole offer is built on trust and credibility, "functional" only gets you so far. He needed something that actually looked like him: premium, warm, trustworthy.

One requirement wasn't negotiable: he needed to manage his own content. New podcast appearances, updated services, a different hero image — all without emailing a developer every time. I also pitched a custom links page instead of Linktree: something that fit the rest of the site rather than sticking out like a third-party tool.

---

## Kickoff

We started with a brainstorm, not a rigid brief. We pulled references together, tested colour combinations, and worked out what the site needed to feel like before either of us touched Figma. The words that kept coming up: premium, warm, credible.

We also looked at other coaches' sites to understand the conventions in the space, and agreed on a long single-page homepage with "Get in touch" at the bottom as the destination for almost every call to action. The homepage would preview the About and the Services section, which would each get their own page.

[IMG: Diagram comparing the old Wix site structure to the new planned structure]

---

## Wireframes & Content

With the structure signed off, I moved into Figma. Lo-fi wireframes first, then mid-fi with lorem ipsum for Matthew to review before any real content went in.

[IMG: Mid-fidelity wireframes of the site in Figma]

Once he approved the structure, I gave him homework: write the content. He came back with solid copy, clear and factual. We spent the most time on the homepage snippets, which needed to pull the reader in, not just tell them what's on the page. We went back and forth on those a few times and landed somewhere good.

---

## Visual Identity

**Typography**

Manrope throughout, self-hosted, three weights. Clean enough for body text, enough personality to work at heading size. H1s are uppercase and bold, which gives the site a bit of weight without tipping into aggressive. It stays out of the way of the content, which is what you want on a personal brand site.

[IMG: Typography specimen showing Manrope at various weights and sizes]

**Colour Palette**

The palette came directly from the moodboard. Deep velvety green as the base, an off-white that leans warm, and gold across headings, buttons, and hover states. Green is everywhere in wellness for a reason — it reads as calm and grounded, but this shade is dark enough that it doesn't feel like a yoga studio. The gold keeps it from going too cold or corporate.

Getting that combination to pass accessibility contrast tests took longer than expected, as some pairings we both liked visually failed completely. We went back and forth until we had something that held up.

[IMG: Web colour palette for the Matthew CT Fuller site — deep green, warm off-white, and gold]

**Border Radius**

4px across all components. Just enough to take the edge off, not so much that anything looks bubbly.

---

## Why Sanity

The content independence requirement shaped the whole technical approach. A static site with hardcoded copy would mean Matthew emailing me every time he needed to change or add anything. That's not a product, that's a support contract neither of us wanted.

Sanity is a headless CMS — content lives separately from the code, and Matthew edits it through a studio interface without touching any files. I built the schemas to match exactly what he needed to control: headings, body text, images, testimonials, services, CTAs, and the links page. Then I populated every field myself using the content he'd written, and handed the keys over.

[IMG: Screenshot of the Sanity Studio CMS interface showing the content editing experience]

---

## Learning Sanity

I hadn't used a headless CMS before this project. GROQ, Sanity's query language, was new. TypeGen — which auto-generates TypeScript types from the Sanity schema so the frontend always knows the shape of the data coming in — was new. All of it, learned on a live project with a real client waiting.

It was confusing at times, but what kept me going was watching the schemas I built shape the studio interface and through that, the live site. When something is actually live and a real person is waiting on it, you read the documentation properly.

---

## Under the Hood

There are a couple of implementation details worth walking through. Not the flashiest parts of the project, but the kind of decisions that make the thing actually work well.

### In-Memory Cache on Loaders

I added a simple in-memory cache so the site doesn't hit the Sanity API more than it needs to. First visit fetches fresh. After that, the data lives in memory for the rest of the session. Same content, no extra requests.

```typescript
const cache = new Map<string, SanityDocument>();

export async function homepageLoader() {
  const cacheKey = 'homepage';
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const data = await client.fetch(HOMEPAGE_QUERY);
  cache.set(cacheKey, data);
  return data;
}
```

### Testimonials Carousel

The carousel auto-advances every 6 seconds and resets if the user navigates manually. The trickier part was the transition: if you just swap the content directly, you get a brief flash of the wrong testimonial mid-fade. So instead it fades out first, swaps while nothing is visible, then fades back in. Three states instead of two, but it's the difference between something that feels polished and something that doesn't.

```tsx
function handleTransitionEnd() {
  if (!isVisible && targetIndex !== null) {
    setIndex(targetIndex);
    setTargetIndex(null);
    setIsVisible(true);
  }
}

function changeToIndex(newIndex: number) {
  setIsVisible(false);
  setTargetIndex(newIndex);
}
```

---

## Result

The site is live at [matthewctfuller.com](https://matthewctfuller.com). Matthew manages all his content through Sanity Studio. The links page — a custom alternative to Linktree — is live and in use at [matthewctfuller.com/links](https://matthewctfuller.com/links).

[IMG: Side-by-side comparison of the old Wix site and the new custom-built site]

---

## What I Learned

This was my first end-to-end client project. Not a project for myself, not a practice build. Someone was paying for the outcome, and they were going to use it every day.

That changes the stakes on decisions you might otherwise shrug off. Getting the Sanity schema right mattered because Matthew would live with whatever I built. Explaining a design decision clearly mattered because he needed to trust it, not just accept it.

Technically: Sanity, GROQ, TypeGen, and my first production TypeScript project. The auto-generated types from the schema meant the frontend and CMS stayed in sync without any manual effort — something I'll be using again.

[IMG: Screenshots of the finished Matthew CT Fuller website across multiple pages]
