import CaseStudyLayout from '../../Layouts/CaseStudyLayout';
import styles from './Lesgo.module.css';
import { lesgoCaseStudy, meta, og } from './lesgoData';

export default function Lesgo() {
  return (
    <CaseStudyLayout
      caseStudy={lesgoCaseStudy}
      themeClass={styles.lesgo}
      meta={meta}
      og={og}
    />
  );
}
