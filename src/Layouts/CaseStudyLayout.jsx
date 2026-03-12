import DefaultSection from './DefaultSection';
import DefaultLayout from './DefaultLayout';

import styles from './CaseStudyLayout.module.css';

// ─── Typed content components ────────────────────────────────────────────────

function TextBlock({ content }) {
  return (
    <div className={styles.textBody}>
      {content.map((item, index) => {
        const Tag = item.type;
        return <Tag key={index}>{item.content}</Tag>;
      })}
    </div>
  );
}

function CaseStudyImage({ src, alt, maxHeight }) {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.caseStudyImg}
      style={maxHeight ? { maxHeight } : undefined}
    />
  );
}

function BulletList({ items }) {
  return (
    <ul className={styles.bulletList}>
      {items.map((item, index) => {
        if (typeof item === 'object' && item.title) {
          return (
            <li key={index}>
              <b>{item.title}</b>: {item.description}
            </li>
          );
        }
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

// ─── Content block renderer ───────────────────────────────────────────────────

function ContentBlock({ block }) {
  switch (block.type) {
    case 'text':
      return (
        <>
          {block.heading && <h2>{block.heading}</h2>}
          <TextBlock content={block.content} />
        </>
      );
    case 'image':
      return (
        <CaseStudyImage
          src={block.src}
          alt={block.alt}
          maxHeight={block.maxHeight}
        />
      );
    case 'list':
      return <BulletList items={block.items} />;
    default:
      return null;
  }
}

// ─── Section ─────────────────────────────────────────────────────────────────

function CaseStudySection({ heading, content }) {
  return (
    <DefaultSection>
      {heading && <h2>{heading}</h2>}
      {content.map((block, index) => (
        <ContentBlock key={index} block={block} />
      ))}
    </DefaultSection>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function CaseStudyHeader({ header }) {
  return (
    <DefaultSection>
      <h1>{header.heading}</h1>
      <div className={`large-text ${styles.largeText}`}>
        {header.subheading}
      </div>

      <div className={styles.projectHeader}>
        <img src={header.img.src} alt={header.img.alt} />
        <div className={styles.projectDetails}>
          {header.details.map((detail, index) => (
            <div className={styles.detailList} key={index}>
              <h3>{detail.heading}</h3>
              <ul>
                {detail.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {header.intro.map((block, index) => (
        <ContentBlock key={index} block={block} />
      ))}
    </DefaultSection>
  );
}

// ─── Layout ──────────────────────────────────────────────────────────────────

export default function CaseStudyLayout({
  caseStudy,
  themeClass,
  meta = {},
  og = {},
}) {
  return (
    <DefaultLayout
      pageType="case-study"
      className={`${styles.caseStudy} ${themeClass ?? ''}`}
      meta={meta}
      og={og}
    >
      <CaseStudyHeader header={caseStudy.header} />

      {caseStudy.sections.map((section, index) => (
        <CaseStudySection
          key={index}
          heading={section.heading}
          content={section.content}
        />
      ))}
    </DefaultLayout>
  );
}
