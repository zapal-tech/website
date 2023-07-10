import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Container, Text } from 'components';
import { Image } from 'components/Image/Image';

import { HomeProps } from 'views/Home/Home';

import { Animation } from './Animation/Animation';

import media from 'styles/media.module.scss';

import styles from './Technologies.module.scss';

export const Technologies: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);
  const {
    pageProps: { technologies },
  } = useGlobalContext<HomeProps>();

  const isLargeTablet = useMediaQuery(`(min-width: ${media.breakpointLargeTablet})`);

  return (
    <Container className={styles.Technologies}>
      <Text size="heading1" className={styles.Technologies__Title} uppercase>
        {t('technologies.title')}
      </Text>

      <div className={styles.Technologies__TechBox}>
        <div className={styles.Technologies__Grid}>
          {technologies.map((technology) => (
            <Image
              key={technology.id}
              className={styles.Technologies__GridItem}
              imageClassName={styles.Technologies__GridItemImage}
              image={technology.attributes.icon}
              alt={technology.attributes.title}
              title={technology.attributes.title}
              unoptimized
            />
          ))}
        </div>

        {isLargeTablet && (
          <div className={styles.Technologies__AnimationBlock}>
            <Animation />
          </div>
        )}
      </div>
    </Container>
  );
};
