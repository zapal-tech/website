import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Card, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './ReadMoreCard.module.scss';

export const ReadMoreCard: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Link className={styles.ReadMoreCard} href="/about#team">
      <Card className={styles.ReadMoreCard__Card} frameType="corner">
        <Text uppercase>{t('team.readMore')}</Text>
      </Card>
    </Link>
  );
};
