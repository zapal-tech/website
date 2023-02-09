import { useTranslation } from 'next-i18next';

import { Text } from 'components';

import { Namespace } from 'i18n';

import { PrivacyList } from '../PrivacyList/PrivacyList';

import styles from '../Contacts/Contacts.module.scss';

export const Contacts: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);
  return (
    <div className={styles.Contacts}>
      <Text size="heading3">hello@zapal.tech</Text>

      <div className={styles.Contacts__PhoneText}>
        <Text size="small">+3807330544893</Text>

        <Text size="small">{t('footer.city')}</Text>
      </div>
      <div className={styles.Contacts__PrivacyBlock}>
        <Text className={styles.Contacts__PrivacyText} size="small">
          made by zapal with love
        </Text>

        <PrivacyList />
      </div>
    </div>
  );
};
