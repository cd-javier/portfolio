import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DefaultLayout({
  children,
  pageType,
  meta = {},
  og = {},
}) {
  const isHomePage = pageType === 'home';

  useEffect(() => {
    // Set standard meta tags
    if (meta.title) document.title = meta.title;
    if (meta.title) updateMetaTag('name', 'title', meta.title);

    if (meta.description) {
      updateMetaTag('name', 'description', meta.description);
    }

    // Set Open Graph meta tags
    Object.entries(og).forEach(([property, content]) => {
      updateMetaTag('property', `og:${property}`, content);
    });

    // Cleanup if needed (optional)
    return () => {
      if (meta.description) removeMetaTag('name', 'description');
      Object.keys(og).forEach((property) => {
        removeMetaTag('property', `og:${property}`);
      });
    };
  }, [meta, og]);

  return (
    <>
      <Navbar isHomePage={isHomePage} />
      <main className={pageType}>{children}</main>
      <Footer />
    </>
  );
}

// HELPER FUNCTIONS

function updateMetaTag(attrName, attrValue, content) {
  let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function removeMetaTag(attrName, attrValue) {
  const tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (tag) {
    tag.remove();
  }
}
