import DefaultSection from './DefaultSection';
import DefaultLayout from './DefaultLayout';

import styles from './CaseStudyLayout.module.css';

function CaseStudyPart({ content }) {
  return content.map((element, index) => {
    const Tag = element.type;

    switch (Tag) {
      case 'img':
        return (
          <img
            src={element.src}
            alt={element.alt}
            key={index}
            className={`${styles.caseStudyImg}${element.className ? ` ${element.className}` : ''}`}
            style={element.style}
          />
        );
      case 'div':
        return (
          <div
            className={
              element.className === 'text-body'
                ? styles.textBody
                : element.className
            }
            key={index}
          >
            <CaseStudyPart content={element.content} />
          </div>
        );
      case 'ul':
        return (
          <ul key={index}>
            {element.content.map((elm, idx) => {
              if (typeof elm === 'object')
                return (
                  <li key={idx}>
                    <b>{elm.title}</b>: {elm.description}
                  </li>
                );
              return <li key={idx}>{elm}</li>;
            })}
          </ul>
        );
      default:
        return (
          <Tag
            key={index}
            className={
              element.className === 'hidden-heading'
                ? styles.hiddenHeading
                : element.className
            }
          >
            {element.content}
          </Tag>
        );
    }
  });
}

function CaseStudySection({ content }) {
  return (
    <DefaultSection>
      <CaseStudyPart content={content} />
    </DefaultSection>
  );
}

export default function CaseStudyLayout({
  caseStudy,
  themeClass,
  meta = {},
  og = {},
}) {
  return (
    <DefaultLayout pageType="case-study" meta={meta} og={og}>
      <main className={`${styles.caseStudy} ${themeClass ?? ''}`}>
        <DefaultSection>
          <h1>{caseStudy.header.heading}</h1>
          <div className={`large-text ${styles.largeText}`}>
            {caseStudy.header.subheading}
          </div>
          <h2 className={styles.hiddenHeading}>Brief</h2>
          <div className={styles.projectHeader}>
            <img
              src={caseStudy.header.img.src}
              alt={caseStudy.header.img.alt}
            />
            <div className={styles.projectDetails}>
              {caseStudy.header.details.map((elm, idx) => (
                <div className={styles.detailList} key={idx}>
                  <h3>{elm.heading}</h3>
                  <ul>
                    {elm.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <CaseStudyPart content={caseStudy.header.content} />
        </DefaultSection>

        {caseStudy.content.map((section, idx) => (
          <CaseStudySection key={idx} content={section} />
        ))}
      </main>
    </DefaultLayout>
  );
}
