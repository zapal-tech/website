import { Container, Divider, SocialLinks } from 'components';

import { Contacts } from './components/Contacts/Contacts';
import { Content } from './components/Content/Content';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <Container type="footer" className={styles.Footer}>
    <Divider />

    <div className={styles.Footer__Main}>
      <Content />
      <Contacts />
      <SocialLinks className={styles.Footer__Social} />
    </div>
  </Container>
);
