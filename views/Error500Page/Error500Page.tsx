import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Text } from 'components';

import styles from './Error500Page.module.scss';

export const Error500Page = () => {
  const { t } = useTranslation(Namespace.Common);

  return (
    <div className={styles.Error500Page}>
      <Text type="h1" size="heading1" className={styles.Error500Page__Text}>
        500
      </Text>

      <Text size="heading3">{t('internalServerError')}</Text>
    </div>
  );
};
