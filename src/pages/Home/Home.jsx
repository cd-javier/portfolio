import './Home.css';

import DefaultLayout from '../../Layouts/DefaultLayout';
import ProjectSection from '../../Layouts/ProjectSection/ProjectSection';
import DefaultSection from '../../Layouts/DefaultSection';
import CopyLink from '../../components/CopyLink';

import logo from '../../assets/img/logo.svg';
import portrait from '../../assets/img/home/about-me-portrait.webp';
import { designCaseStudies, devProjects } from './projects';

const meta = {
  title: 'Javier Quiroga | UX & Web Dev',
  description:
    "I'm Javier Quiroga — UX designer and web developer blending design thinking with functional code to create smarter, better digital experiences.",
};

const og = {
  title: 'Javier Quiroga | UX & Web Design',
  description:
    "I'm Javier Quiroga — a UX designer & web developer crafting thoughtful, user-first experiences. Check out my latest projects and case studies.",
  image: 'https://javierquiroga.com/seo/og-image-index.jpg',
  url: 'https://javierquiroga.com',
  type: 'website',
};

export default function Home() {
  return (
    <DefaultLayout pageType="home" meta={meta} og={og}>
      {/* HERO */}

      <div className="section-wrapper hero">
        <div className="hero-logo">
          <img src={logo} alt="Javier Quiroga logo" />
          <div className="hero-heading">
            <h1 className="hero-name">Javier Quiroga</h1>
            <div className="hero-subheading">
              UX Designer &amp; Web Developer
            </div>
          </div>
        </div>

        <div className="hero-text">
          Blending creativity and logic to build better digital experiences.
        </div>

        <a href="#design-case-studies" className="explore">
          <div className="explore-text">explore my work</div>

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

      {/* DESIGN CASE STUDIES */}
      <ProjectSection
        heading="Design Case Studies"
        subheading="User-first design, backed by strategy and insight"
        anchor="design-case-studies"
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
      <DefaultSection className="about" anchor="about" heading="About me">
        <div className="about-wrapper">
          <div className="about-text">
            <img
              src={portrait}
              alt="Black and white illustration of Javier"
              className="portrait"
            />

            <p className="large-text">
              Hello, I’m Javier, a London-based UX/UI Designer and Web
              Developer, dedicated to crafting intuitive digital experiences and
              building functional, user-first solutions.
            </p>

            <p>
              With nearly a decade of experience in the service and management
              industries, I've developed a keen insight into user behaviours and
              streamlined processes, insights that now inform my approach to
              digital product creation.
            </p>

            <p>
              In 2022 I gathered the courage to quit my management job and
              complete a UX/UI Design Bootcamp at Ironhack, finally uniting my
              artistic side with my technical mind and passion for human
              experiences. There, I learned everything about Design Thinking and
              found my love for interface design and usability.
            </p>

            <p>
              Since then, I've been collaborating with various startups as a
              freelancer, dedicated to improving the UX of their digital
              products. Creating wireframes, conducting thorough UX analysis,
              and enhancing visual design elements, I focus on making tech more
              accessible and user friendly.
            </p>

            <p>
              At the end of 2024 I started training as a Full Stack developer
              with The Odin Project and discovered how incredibly creative and
              fulfilling writing code is, how exciting a blank code editor page
              is with a brain full of ideas.
            </p>

            <p>
              When I’m not immersed in Figma or VSCode, you might find me
              playing board games, enjoying a glass of wine, or in the kitchen
              making up recipes.
            </p>
          </div>
          <div className="timeline-wrapper">
            <div className="timeline">
              <div className="timeline-event">
                <div className="emoji">👶</div>
                <div className="year">1993</div>
                <div className="event">Born</div>
              </div>

              <div className="timeline-event">
                <div className="emoji">🎓</div>
                <div className="year">2015</div>
                <div className="event">Graduated University</div>
              </div>

              <div className="timeline-event">
                <div className="emoji">🇫🇷</div>
                <div className="year">2016</div>
                <div className="event">Moved to France</div>
              </div>

              <div className="timeline-event">
                <div className="emoji">👟</div>
                <div className="year">2017</div>
                <div className="event">Learned to tie my shoes</div>
              </div>

              <div className="timeline-event">
                <div className="emoji">🇦🇺</div>
                <div className="year">2019</div>
                <div className="event">Moved to Australia</div>
              </div>

              <div className="timeline-event">
                <div className="emoji">🇬🇧</div>
                <div className="year">2020</div>
                <div className="event">Moved to London</div>
              </div>

              <div className="timeline-event">
                <div className="emoji">👨</div>
                <div className="year">2021</div>
                <div className="event">Became General Manager</div>
              </div>

              <div className="timeline-event">
                <div className="emoji">🎨</div>
                <div className="year">2022</div>
                <div className="event">Studied UX Design</div>
              </div>

              <div className="timeline-event">
                <div className="emoji">👨‍💻</div>
                <div className="year">2024</div>
                <div className="event">Started FullStack Dev Course</div>
              </div>
            </div>
          </div>
        </div>
      </DefaultSection>

      {/* SKILLS */}
      <DefaultSection className="about" heading="Skills">
        <div className="skills-grid">
          <div className="skills-single">
            <h3>
              Languages <br />
              (human)
            </h3>
            <ul>
              <li>Spanish - Native</li>
              <li>English - Fluent</li>
              <li>French - Fluent</li>
            </ul>
          </div>
          <div className="skills-single">
            <h3>
              Languages <br />
              (programming)
            </h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skills-single">
            <h3>Tools</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
              <li>VSCode</li>
              <li>Git &amp; GitHub</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </DefaultSection>

      {/* DOWNLOAD RESUME */}
      <DefaultSection className="about">
        <a
          href="/javier-quiroga-resume-2025.pdf"
          download="Javier Quiroga Resume.pdf"
          className="resume"
        >
          <button className="resume">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>file-document</title>
              <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
            </svg>
            Download my resume
          </button>
        </a>
      </DefaultSection>

      {/* CONTACT */}
      <DefaultSection className="about" anchor="contact" heading="Get in touch">
        <div className="contact-links">
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
