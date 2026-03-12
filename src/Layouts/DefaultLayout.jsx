import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useMetaTags from '../utils/useMetaTags';

export default function DefaultLayout({
  children,
  pageType,
  meta = {},
  og = {},
}) {
  useMetaTags(meta, og);
  const isHomePage = pageType === 'home';

  return (
    <>
      <Navbar isHomePage={isHomePage} />
      <main className={pageType}>{children}</main>
      <Footer />
    </>
  );
}
