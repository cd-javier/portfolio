import DefaultLayout from '../../Layouts/DefaultLayout';
import DefaultSection from '../../Layouts/DefaultSection';
import styles from './Legal.module.css';

const meta = {
  title: 'Legal - Javier Quiroga',
  description: 'Terms & Conditions and Privacy Policy for javierquiroga.com.',
};

export default function Legal() {
  return (
    <DefaultLayout pageType="legal" meta={meta}>
      <DefaultSection>
        <div className={styles.legal}>
          <h1>Terms &amp; Privacy</h1>

          <section>
            <h2>Terms &amp; Conditions</h2>
            <p className={styles.lastUpdated}>Last updated: May 2026</p>
            <p>
              By using this website (javierquiroga.com), you agree to these
              terms.
            </p>

            <h3>Use of this site</h3>
            <p>
              This website is a personal portfolio. The content here — including
              case studies, project write-ups, and any other material — is for
              informational and demonstration purposes only.
            </p>

            <h3>Intellectual property</h3>
            <p>
              All content on this site (text, images, design, code) belongs to
              Javier Quiroga unless otherwise stated. Work shown in case studies
              may involve client or team IP — please contact me before
              reproducing any of it.
            </p>

            <h3>External links</h3>
            <p>
              This site links to third-party websites (GitHub, LinkedIn, live
              project URLs). I am not responsible for their content or
              practices.
            </p>

            <h3>Limitation of liability</h3>
            <p>
              This site is provided as-is. I make no guarantees about the
              accuracy or completeness of any content here.
            </p>

            <h3>Changes</h3>
            <p>
              These terms may be updated at any time. Continued use of the site
              means you accept any changes.
            </p>
          </section>

          <hr className={styles.divider} />

          <section>
            <h2>Privacy Policy</h2>
            <p className={styles.lastUpdated}>Last updated: May 2026</p>
            <p>
              <strong>I do not collect or store any personal data.</strong>
            </p>
            <p>
              This site uses{' '}
              <a
                href="https://www.goatcounter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GoatCounter
              </a>{' '}
              for basic, privacy-respecting analytics. GoatCounter:
            </p>
            <ul>
              <li>Does not use cookies</li>
              <li>Does not track you across sites</li>
              <li>Does not store any personally identifiable information</li>
              <li>
                Records only aggregate data (page views, referrers, browser
                type, country)
              </li>
            </ul>
            <p>
              You can read GoatCounter's own privacy policy at{' '}
              <a
                href="https://www.goatcounter.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                goatcounter.com/privacy
              </a>
              .
            </p>

            <h3>No forms, no data collection</h3>
            <p>
              This site has no contact forms, sign-up flows, or any mechanism
              that collects your data. The email link copies an address to your
              clipboard — nothing is sent to or stored by this site.
            </p>

            <h3>Cookies</h3>
            <p>This site uses no cookies.</p>

            <h3>Your rights</h3>
            <p>
              Under UK GDPR, you have rights over your personal data. Since I
              hold none, there is nothing to access, correct, or delete. If you
              have questions, contact:{' '}
              <a href="mailto:contact@javierquiroga.com">
                contact@javierquiroga.com
              </a>
            </p>

            <h3>Contact</h3>
            <p>
              Javier Quiroga ·{' '}
              <a href="mailto:contact@javierquiroga.com">
                contact@javierquiroga.com
              </a>
            </p>
          </section>
        </div>
      </DefaultSection>
    </DefaultLayout>
  );
}
