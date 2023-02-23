import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import { useMediaQuery } from 'hooks';

import { Button, Container, Divider, SocialLinks, Text } from 'components';

import { Namespace } from 'i18n';

import { Policies } from './components/Policies/Policies';

import media from 'styles/media.module.scss';

import styles from './Footer.module.scss';

const Subtitle = () => {
  const { t } = useTranslation(Namespace.Footer);

  return (
    <Text className={styles.Footer__Subtitle} size="heading3">
      {t('subtitle')}
    </Text>
  );
};

const MadeByZapal = () => {
  const { t } = useTranslation(Namespace.Footer);

  return (
    <Text className={styles.Footer__MadeByZapal} size="small">
      {t('madeByZapal')}
    </Text>
  );
};

const BecomeAClient = () => {
  const { t } = useTranslation(Namespace.Navigation);

  return <Button>{t('becomeAClient.title')}</Button>;
};

const Email = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <a
      href={`mailto:${t('email.address')}?subject=${t('email.subject')}&body=${t('email.body')}`}
      className={styles.Footer__Email}
    >
      <Text size="heading3">{t('email.address')}</Text>
    </a>
  );
};

const Phone = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <a href={'tel:' + t('phone')} className={styles.Footer__Phone}>
      <Text size="small">{t('phone')}</Text>
    </a>
  );
};

const Location = () => {
  const { t } = useTranslation(Namespace.Common);

  return <Text size="small">{t('location')}</Text>;
};

export const Footer: React.FC = () => {
  const { t } = useTranslation(Namespace.Footer);

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  return (
    <Container type="footer" className={styles.Footer}>
      <Divider className={styles.Footer__Divider} />

      <div className={styles.Footer__Section}>
        <Text className={styles.Footer__Title} size="heading1" uppercase>
          {t('title')}
        </Text>
      </div>

      <div className={clsx(styles.Footer__Section, styles['Footer__Section--AlignEnd'])}>
        {isLaptop ? (
          <>
            <SocialLinks />
            <Email />
          </>
        ) : (
          <Subtitle />
        )}
      </div>

      <div className={clsx(styles.Footer__Section, styles['Footer__Section--JustifyBetween'])}>
        {isLaptop && <Subtitle />}
        <BecomeAClient />
        {isLaptop && <MadeByZapal />}
      </div>

      <div className={clsx(styles.Footer__Section, styles['Footer__Section--AlignEnd'])}>
        {!isLaptop && <Email />}
        <Phone />
        <Location />

        {isLaptop ? (
          <Policies />
        ) : (
          <>
            <MadeByZapal />
            <Policies />
            <SocialLinks />
          </>
        )}
      </div>
    </Container>
  );
};
