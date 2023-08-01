import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Text } from 'components';

import styles from './Error500.module.scss';

export const Error500 = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <div className={styles.Error500}>
      <Text type="h1" size="heading1" className={styles.Error500__Text}>
        500
      </Text>

      <Text size="heading3">{t('internalServerError')}</Text>
    </div>
  );
};
