import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Text } from 'components';

import styles from './Error404.module.scss';

export const Error404 = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <div className={styles.Error404}>
      <Text type="h1" size="heading1" className={styles.Error404__Text}>
        404
      </Text>

      <Text size="heading3">{t('pageNotFound')}</Text>
    </div>
  );
};
