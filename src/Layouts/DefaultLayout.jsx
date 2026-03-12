import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useMetaTags from '../utils/useMetaTags';

export default function DefaultLayout({
  children,
  pageType,
  className,
  meta = {},
  og = {},
}) {
  useMetaTags(meta, og);

  return (
    <>
      <Navbar />
      <main className={`${pageType}${className ? ` ${className}` : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}