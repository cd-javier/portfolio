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
  if (meta.title) document.title = meta.title;
  
  const tags = [
    ['name', 'description', meta.description],
    ['property', 'og:title', og.title],
    ['property', 'og:description', og.description],
    ['property', 'og:image', og.image],
    ['property', 'og:url', og.url],
    ['property', 'og:type', og.type],
  ];

  tags.forEach(([attr, key, value]) => {
    if (!value) return;
    let tag = document.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attr, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', value);
  });
}, [meta, og]);

  return (
    <>
      <Navbar isHomePage={isHomePage} />
      <main className={pageType}>{children}</main>
      <Footer />
    </>
  );
}