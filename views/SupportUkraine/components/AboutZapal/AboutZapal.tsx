import { Container, Text } from 'components';
import { Link } from 'components/Link/Link';

import styles from './AboutZapal.module.scss';

const needestList = [
  'volunteer work',
  'dissemination of credible',
  'information',
  'purchase of humanitarian',
  'military goods',
  'creation of content',
  'donations, etc.',
];

export const AboutZapal: React.FC = () => {
  return (
    <div className={styles.AboutZapal}>
      <Text className={styles.AboutZapal__Title} uppercase type="h2" size="heading1">
        What About Zapal
      </Text>
      <Text size="small">
        Currently, the safety of our employees is our highest priority at Edvantis. The majority of our employees live
        in the west of Ukraine, where the situation is relatively safe compared to other parts. Most of the employees
        who lived in areas where regular and large-scale shillings and bombardments were occurring have relocated to the
        west of Ukraine or abroad.
      </Text>
      <Text size="small">
        Edvantis keeps on working with our clients and continues to operate. It is important to us that all clients
        express support and understanding. We value our partnerships greatly.
      </Text>
      <Text size="small">
        But still, the war continues, so we, as a company, and each employee contribute to defeating enemy forces in the
        following ways:
      </Text>
      <div className={styles.AboutZapal__NeedestList}>
        {needestList.map((item) => {
          return (
            <Text key={item} size="small" className={styles.AboutZapal__NeedestItem}>
              {item}
            </Text>
          );
        })}
      </div>
      <Text size="small">
        We know: many foreigners are also wondering how they can help. So we prepared six ways you can assist Ukraine at
        this challenging time. Our resistance will be even stronger with your support.
      </Text>
    </div>
  );
};
