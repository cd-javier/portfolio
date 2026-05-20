import CaseStudyLayout from '../../Layouts/CaseStudyLayout';
import styles from './Klearlabs.module.css';
import { klearlabsCaseStudy, meta, og } from './klearlabsData';

export default function Klearlabs() {
  return (
    <CaseStudyLayout
      caseStudy={klearlabsCaseStudy}
      themeClass={styles.klearlabs}
      meta={meta}
      og={og}
    />
  );
}
