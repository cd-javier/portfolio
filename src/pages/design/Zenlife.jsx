import CaseStudyLayout from '../../Layouts/CaseStudyLayout';
import styles from './Zenlife.module.css';
import { zenlifeCaseStudy, meta, og } from './zenlifeData';

export default function Zenlife() {
  return (
    <CaseStudyLayout
      caseStudy={zenlifeCaseStudy}
      themeClass={styles.zenlife}
      meta={meta}
      og={og}
    />
  );
}
