import CaseStudyLayout from '../../Layouts/CaseStudyLayout';
import styles from './Matthewctfuller.module.css';
import { matthewctfullerCaseStudy, meta, og } from './matthewctfullerData';

export default function Matthewctfuller() {
  return (
    <CaseStudyLayout
      caseStudy={matthewctfullerCaseStudy}
      themeClass={styles.matthewctfuller}
      meta={meta}
      og={og}
    />
  );
}
