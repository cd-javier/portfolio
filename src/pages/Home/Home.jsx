import styles from './Home.module.css';

import DefaultLayout from '../../Layouts/DefaultLayout';
import ProjectSection from '../../Layouts/ProjectSection/ProjectSection';
import DefaultSection from '../../Layouts/DefaultSection';
import Timeline from './Timeline';
import Skills from './Skills';
import CopyLink from '../../components/CopyLink';

import logo from '../../assets/img/logo.svg';
import portrait from '../../assets/img/home/about-me-portrait.webp';
import {
  endToEndProjects,
  designCaseStudies,
  devProjects,
  meta,
  og,
  aboutText,
  aboutTimeline,
  skills,
} from './homeData';

export default function Home() {
  return (
    <DefaultLayout pageType="home" meta={meta} og={og}>
      {/* HERO */}
      <div className={`section-wrapper ${styles.hero}`}>
        <div className={styles.heroLogo}>
          <img src={logo} alt="Javier Quiroga logo" />
          <div className={styles.heroHeading}>
            <h1>{`Javier Quiroga`}</h1>
            <div className={styles.heroSubheading}>
              UX Designer &amp; Web Developer
            </div>
          </div>
        </div>

        <div className={styles.heroText}>
          Blending creativity and logic to build better digital experiences.
        </div>

        <a href="#case-studies" className={styles.explore}>
          <div>explore my work</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M15.0427 18.7333L11.4254 15.2667C10.9848 14.8444 10.8865 14.3613 11.1304 13.8173C11.3734 13.2724 11.808 13 12.4341 13H19.5993C20.2254 13 20.6599 13.2724 20.9029 13.8173C21.1469 14.3613 21.0485 14.8444 20.608 15.2667L16.9906 18.7333C16.8514 18.8667 16.7007 18.9667 16.5384 19.0333C16.3761 19.1 16.2022 19.1333 16.0167 19.1333C15.8312 19.1333 15.6572 19.1 15.4949 19.0333C15.3326 18.9667 15.1819 18.8667 15.0427 18.7333Z"
              fill="#101218"
            />
          </svg>
        </a>
      </div>
      {/* END-TO-END PROJECTS */}
      <ProjectSection
        heading="End-to-End Projects"
        subheading="Designed and built from brief to deployment"
        anchor="case-studies"
        projects={endToEndProjects}
        isCaseStudy={true}
      />

      {/* DESIGN CASE STUDIES */}
      <ProjectSection
        heading="Design Case Studies"
        subheading="User-first design, backed by strategy and insight"
        projects={designCaseStudies}
        isCaseStudy={true}
      />

      {/* DEV PROJECTS */}
      <ProjectSection
        heading="Dev Projects"
        subheading="Turning ideas into seamless, functional code"
        anchor="dev-projects"
        projects={devProjects}
        isCaseStudy={false}
      />

      {/* ABOUT ME */}
      <DefaultSection
        className={styles.about}
        anchor="about"
        heading="About me"
      >
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutText}>
            <img
              src={portrait}
              alt="Black and white illustration of Javier"
              className={styles.portrait}
            />
            {aboutText.map((paragraph, index) => (
              <p
                className={index === 0 ? `large-text ${styles.largeText}` : ''}
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Timeline timeline={aboutTimeline} styles={styles} />
        </div>
      </DefaultSection>

      {/* SKILLS */}
      <DefaultSection className={styles.about} heading="Skills">
        <Skills skills={skills} styles={styles} />
      </DefaultSection>

      {/* DOWNLOAD RESUME */}
      <DefaultSection className={styles.about}>
        <a
          href="/javier-quiroga.pdf"
          target="_blank"
          className={styles.resumeLink}
        >
          <button className={styles.resumeButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>file-document</title>
              <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
            </svg>
            Download my resume
          </button>
        </a>
      </DefaultSection>

      {/* CONTACT */}
      <DefaultSection
        className={styles.about}
        anchor="contact"
        heading="Get in touch"
      >
        <div className={styles.contactLinks}>
          <a
            href="https://www.linkedin.com/in/javier-quiroga/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cd-javier"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <CopyLink>contact@javierquiroga.com</CopyLink>
        </div>
      </DefaultSection>
    </DefaultLayout>
  );
}
