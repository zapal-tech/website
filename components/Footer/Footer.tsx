import { Socials, Divider } from 'components';

import { Contacts } from './components/Contacts/Contacts';
import { Content } from './components/Content/Content';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.Footer}>
    <Divider />

    <div className={styles.Footer__Main}>
      <div className={styles.Footer__Main__TextBlock}>
        <Content />

        <Contacts />
      </div>

      <Socials />
    </div>
  </footer>
);
