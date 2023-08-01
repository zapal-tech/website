import clsx, { ClassValue } from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Namespace } from 'configs/i18n';

import { Routes } from 'types/routes';

import { Card, Text } from 'components';

import styles from './ReadMoreCard.module.scss';

type ReadMoreCardProps = {
  className?: ClassValue | ClassValue[];
};

export const ReadMoreCard: React.FC<ReadMoreCardProps> = ({ className }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Link className={clsx(styles.ReadMoreCard, className)} href={Routes.About + '#team'}>
      <Card className={styles.ReadMoreCard__Card} cornerClassName={styles.ReadMoreCard__Corner} frameType="corner">
        <Text className={styles.ReadMoreCard__Text} uppercase>
          {t('team.readMore')}
        </Text>
      </Card>
    </Link>
  );
};
