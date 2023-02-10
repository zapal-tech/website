import { Socials } from 'components';

import { Contacts } from './components/Contacts/Contacts';
import { Content } from './components/Content/Content';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__TextBlock}>
      <Content />

      <Contacts />
    </div>

    <Socials />
  </footer>
);
