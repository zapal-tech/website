import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import { useWindowSize } from 'hooks';

import { Container, Link, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Hero.module.scss';

export const Hero = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation(Namespace.Contacts);

  const isLaptop = useMemo(
    () => windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop),
    [windowSize],
  );

  return (
    <Container>
      <Text className={styles.Hero__Title} size="heading1" type="h1" uppercase>
        {t('hero.title')}
      </Text>

      <Text className={styles.Hero__SubTitle} size="heading1" type="h3" uppercase>
        {t('hero.subtitle.upper')} {!isLaptop && <br />} {t('hero.subtitle.lower')}
      </Text>

      <div className={styles.Hero__LinksBox}>
        <Link
          uppercase={false}
          underline={false}
          icon={false}
          href="mailto:hello@zapal"
          className={styles.Hero__EmailLink}
        >
          <Text size="heading3">hello@zapal.tech</Text>
        </Link>

        <Link
          uppercase={false}
          underline={false}
          icon={false}
          href="tel:+380887348756"
          className={styles.Hero__PhoneLink}
        >
          <Text size="heading3">+38 088 734 87 56</Text>
        </Link>
      </div>
    </Container>
  );
};
