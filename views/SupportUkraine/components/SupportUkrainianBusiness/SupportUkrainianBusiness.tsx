import { Text } from 'components';
import { Link } from 'components/Link/Link';

import styles from './SupportUkrainianBusiness.module.scss';

export const SupportUkrainianBusiness = () => {
  return (
    <div className={styles.SupportUkrainianBusiness}>
      <div className={styles.SupportUkrainianBusiness__TextBox}>
        <Text className={styles.SupportUkrainianBusiness__Title} size="heading2">
          5/ SUPPORT UKRAINIAN BUSINESSES
        </Text>
        <Text className={styles.SupportUkrainianBusiness__Text} size="small">
          As we weaken the Russian economy, we need to strengthen the Ukrainian economy as well. The effects of war will
          be felt in every area of the lives of Ukrainians. The situation may worsen if foreign companies and partners
          stop collaborating with our companies.
        </Text>
        <Text className={styles.SupportUkrainianBusiness__Text} size="small">
          Ukraine has been going through a war of a smaller scale for eight years, so most of its companies are prepared
          to deal with this scenario. Plans have been made to continue operations during wartime, relocate staff,
          increase security, etc. So continue working with Ukrainian companies. This is the best source of support you
          can provide.
        </Text>
        <Text className={styles.SupportUkrainianBusiness__Text} size="small">
          During these hard times, we are truly grateful to our clients for keeping their partnership with us. Let’s
          hope others follow your example.
        </Text>
      </div>

      <div className={styles.SupportUkrainianBusiness__LinkBox}>
        <Link href="https://en.wikipedia.org/wiki/Category:Ukrainian_brands">UKRAINIAN BRANDS</Link>
        <Text size="small" className={styles.SupportUkrainianBusiness__LinkText}>
          In addition, you can support Ukraine’s economy by purchasing goods and services from Ukrainian companies. Here
          is a list of Ukrainian brands that ship their products to countries outside Ukraine.
        </Text>
      </div>
    </div>
  );
};
