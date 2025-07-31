import DefaultSection from './DefaultSection';
import DefaultLayout from './DefaultLayout';

import './CaseStudyLayout.css';

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
            className={element.className && element.className}
            style={element.style && element.style}
          />
        );
      case 'div':
        return (
          <div className={element.className && element.className} key={index}>
            {<CaseStudyPart content={element.content} />}
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
          <Tag key={index} className={element.className && element.className}>
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
  type,
  meta = {},
  og = {},
}) {
  return (
    <DefaultLayout pageType={`case-study ${type}`} meta={meta} og={og}>
      <main>
        <DefaultSection>
          <h1>{caseStudy.header.heading}</h1>
          <div className="large-text">{caseStudy.header.subheading}</div>
          <h2 className="hidden-heading">Brief</h2>
          <div className="project-header">
            <img
              src={caseStudy.header.img.src}
              alt={caseStudy.header.img.alt}
            />
            <div className="project-details">
              {caseStudy.header.details.map((elm, idx) => {
                return (
                  <div className="detail-list" key={idx}>
                    <h3>{elm.heading}</h3>
                    <ul>
                      {elm.content.map((elm, idx) => (
                        <li key={idx}>{elm}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
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
