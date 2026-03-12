import CaseStudyLayout from '../../Layouts/CaseStudyLayout';
import styles from './Grinpath.module.css';
import { grinpathCaseStudy, meta, og } from './grinpathData';

export default function Grinpath() {
  return (
    <CaseStudyLayout
      caseStudy={grinpathCaseStudy}
      themeClass={styles.grinpath}
      meta={meta}
      og={og}
    />
  );
}
