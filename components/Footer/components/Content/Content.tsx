import { useTranslation } from 'next-i18next';

import { Button, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './Content.module.scss';

export const Content: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <div className={styles.Content}>
      <Text className={styles.Content__Title} size="heading1" uppercase>
        {t('footer.title')}
      </Text>

      <div className={styles.Content__ButtonContent}>
        <Text className={styles.Content__Text} size="heading3">
          {t('footer.description')}
        </Text>

        <Button> {t('footer.button')}</Button>

        <Text className={styles.Content__PrivacyText} size="small">
          {t('footer.love')}
        </Text>
      </div>
    </div>
  );
};
