import { useTranslation } from 'next-i18next';

import { Text } from 'components';

import { Namespace } from 'i18n';

import styles from './Error404Page.module.scss';

export const Error404Page = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <div className={styles.Error404Page}>
      <Text type="h1" size="heading1" className={styles.Error404Page__Text}>
        404
      </Text>

      <Text size="heading3">{t('pageNotFound')}</Text>
    </div>
  );
};
