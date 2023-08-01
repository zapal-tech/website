import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Text } from 'components';

import styles from './Offline.module.scss';

export const Offline = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <div className={styles.Offline}>
      <Text type="h1" size="heading1" className={styles.Offline__Text}>
        {t('offline.title')}
      </Text>

      <Text size="heading3">{t('offline.subtitle')}</Text>
    </div>
  );
};
