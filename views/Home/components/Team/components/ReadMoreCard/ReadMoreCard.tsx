import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Namespace } from 'configs/i18n';

import { Card, Text } from 'components';

import styles from './ReadMoreCard.module.scss';

export const ReadMoreCard: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Link className={styles.ReadMoreCard} href="/about#team">
      <Card className={styles.ReadMoreCard__Card} cornerClassName={styles.ReadMoreCard__Corner} frameType="corner">
        <Text className={styles.ReadMoreCard__Text} uppercase>
          {t('team.readMore')}
        </Text>
      </Card>
    </Link>
  );
};
