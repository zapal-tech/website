import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import Emblem from 'public/icons/emblem-of-ukraine.svg';
import SupportUkraineLaptop from 'public/icons/support-ukraine-laptop.svg';
import SupportUkraineLarge from 'public/icons/support-ukraine-large-phone.svg';
import SupportUkrainePhone from 'public/icons/support-ukraine-phone.svg';

import { Namespace } from 'configs/i18n';

import { useMediaQuery } from 'hooks/useMediaQuery';

import { Button, Container, Text } from 'components';
import { Link } from 'components/Link/Link';

import media from 'styles/media.module.scss';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  const { t } = useTranslation(Namespace.SupportUkraine);
  const isLargePhone = useMediaQuery({ width: { min: parseInt(media.breakpointLargePhone) } });
  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLargeLaptop) } });

  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__TitleBox}>
        {isLaptop ? (
          <SupportUkraineLaptop className={styles.Hero__LaptopTitleSvg} />
        ) : isLargePhone ? (
          <SupportUkraineLarge className={styles.Hero__LargeTitleSvg} />
        ) : (
          <SupportUkrainePhone className={styles.Hero__TitleSvg} />
        )}
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
};
