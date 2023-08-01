import clsx from 'clsx';

import Emblem from 'public/icons/emblem-of-ukraine.svg';
import SupportUkraineTitleLaptop from 'public/icons/support-ukraine-laptop.svg';
import SupportUkraineTitleLargePhone from 'public/icons/support-ukraine-large-phone.svg';
import SupportUkraineTitle from 'public/icons/support-ukraine-phone.svg';

import { Text } from 'components';
import { Link } from 'components/Link/Link';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => (
  <div className={styles.Hero}>
    <div className={styles.Hero__TitleBox}>
      <SupportUkraineTitle className={clsx(styles.Hero__TitleSvg, styles['Hero__TitleSvg--Default'])} />
      <SupportUkraineTitleLargePhone className={clsx(styles.Hero__TitleSvg, styles['Hero__TitleSvg--LargePhone'])} />
      <SupportUkraineTitleLaptop className={clsx(styles.Hero__TitleSvg, styles['Hero__TitleSvg--Laptop'])} />
    </div>

    <Text className={styles.Hero__UnderSubtitle} size="heading3">
      Help Ukraine in the war with russia
    </Text>

    <div className={styles.Hero__LinksBox}>
      <Link href="https://war.ukraine.ua/support-ukraine/">Support Ukraine</Link>
      <Link href="https://war.ukraine.ua/donate/">Donate to Ukraine</Link>
      <Link href="https://war.ukraine.ua/arm-ukraine-now/">Arm Ukraine</Link>
    </div>

    <div className={styles.Hero__EmblemBox}>
      <Emblem className={styles.Hero__Emblem} />
    </div>
  </div>
);
