import { useTranslation } from 'next-i18next';

import { useMediaQuery } from 'hooks';

import { Container, Link, Text } from 'components';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './Hero.module.scss';

export const Hero = () => {
  const { t } = useTranslation(Namespace.Contacts);

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  return (
    <Container>
      <Text className={styles.Hero__Title} size="heading1" type="h1" uppercase>
        {t('hero.title')}
      </Text>

      <Text className={styles.Hero__Subtitle} size="heading1" type="h2" uppercase>
        {t('hero.subtitle.upper')} {!isLaptop && <br />} {t('hero.subtitle.lower')}
      </Text>

      <div className={styles.Hero__LinksBox}>
        <Link underline={false} icon={false} href="mailto:hello@zapal" className={styles.Hero__EmailLink}>
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
