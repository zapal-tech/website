import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Container, Text } from 'components';

import styles from './Hero.module.scss';

export const Hero = () => {
  const { t } = useTranslation([Namespace.Contacts, Namespace.General]);

  return (
    <>
      <Container>
        <Text className={styles.Hero__Title} size="heading1" type="h1" uppercase>
          {t('hero.title')}
        </Text>

        <Text className={styles.Hero__Subtitle} size="heading1" type="h2" uppercase>
          {t('hero.subtitle.upper')} <br className={styles.Hero__Divider} /> {t('hero.subtitle.lower')}
        </Text>
      </Container>

      <Container>
        <div className={styles.Hero__Links}>
          <div className={styles.Hero__LinkContainer}>
            <Text size="small" className={styles.Hero__LinkLabel}>
              {t('hero.email')}
            </Text>
            <a href={'mailto:' + t('email', { ns: Namespace.General })} className={styles.Hero__Link}>
              <Text size="heading3">{t('email', { ns: Namespace.General })}</Text>
            </a>
          </div>

          <div className={styles.Hero__LinkContainer}>
            <Text size="small" className={styles.Hero__LinkLabel}>
              {t('hero.phone')}
            </Text>
            <a href={'tel:' + t('phone', { ns: Namespace.General })} className={styles.Hero__Link}>
              <Text size="heading3">{t('phone', { ns: Namespace.General })}</Text>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};
