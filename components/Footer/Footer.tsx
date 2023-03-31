import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Button, Container, Divider, Text } from 'components';
import { AlternantText } from 'components/AlternantText/AlternantText';
import { SocialLinks } from 'components/SocialLinks/SocialLinks';

import { Namespace } from 'i18n';

import { Policies } from './components/Policies/Policies';

import media from 'styles/media.module.scss';

import styles from './Footer.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

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
    <AlternantText
      className={styles.Footer__MadeByZapal}
      baseTextClassName={styles.Footer__MadeByZapalBaseText}
      itemClassName={styles.Footer__MadeByZapalAlternantText}
      baseText={t('madeByZapal.base')}
      baseTextProps={{ size: 'small' }}
      alternantText={t('madeByZapal.alternant', { returnObjects: true }) as string[]}
      alternantTextProps={{ size: 'small' }}
    />
  );
};

const BecomeAClient = () => {
  const { openModal } = useGlobalContext();
  const { t } = useTranslation(Namespace.Common);

  const openContactForm = () => openModal(ContactForm);

  return (
    <Button className={styles.Footer__Button} onClick={openContactForm}>
      {t('becomeAClient')}
    </Button>
  );
};

const Email = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <Text size="heading3" className={styles.Footer__Email}>
      <a href={`mailto:${t('projectEmail.email')}?subject=${t('projectEmail.subject')}&body=${t('projectEmail.body')}`}>
        {t('projectEmail.email')}
      </a>
    </Text>
  );
};

const Phone = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <Text size="small" className={styles.Footer__Phone}>
      <a href={'tel:' + t('phone')}>{t('phone')}</a>
    </Text>
  );
};

const Location = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <Text size="small" className={styles.Footer__Location}>
      {t('location')}
    </Text>
  );
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

      <div
        className={clsx(
          styles.Footer__Section,
          styles['Footer__Section--AlignEnd'],
          styles['Footer__Section--JustifyBetween'],
        )}
      >
        {isLaptop ? (
          <>
            <SocialLinks className={styles.Footer__Social} />
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
            <SocialLinks className={styles.Footer__Social} />
          </>
        )}
      </div>
    </Container>
  );
};
