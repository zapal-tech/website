import { useTranslation } from 'next-i18next';

import { Link, Text } from 'components';

import { Namespace } from 'i18n';

import { Policies } from '../Policies/Policies';

import styles from './Contacts.module.scss';

export const Contacts: React.FC = () => {
  const { t } = useTranslation(Namespace.Footer);

  return (
    <div className={styles.Contacts}>
      <Text size="heading3">
        <Link
          href="mailto:hello@zapal.tech"
          className={styles.Contacts__Link}
          underline={false}
          uppercase={false}
          icon={false}
        >
          hello@zapal.tech
        </Link>
      </Text>

      <div className={styles.Contacts__PhoneText}>
        <Text size="small">
          <Link
            href="tel:+380887348756"
            className={styles.Contacts__Link}
            underline={false}
            uppercase={false}
            icon={false}
          >
            +38 088 734 87 56
          </Link>
        </Text>

        <Text size="small">{t('city')}</Text>
      </div>

      <div className={styles.Contacts__PrivacyBlock}>
        <Text className={styles.Contacts__PrivacyText} size="small">
          {t('love')}
        </Text>

        <Policies />
      </div>
    </div>
  );
};
