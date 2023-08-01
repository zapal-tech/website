// import Link from 'next/link';
import clsx, { ClassValue } from 'clsx';
import Link from 'next/link';

import { Article } from 'types/articles';
import { Routes } from 'types/routes';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './ArticleCard.module.scss';

export type ArticleCardProps = Article & {
  photoLoading?: 'eager' | 'lazy';
  className?: ClassValue | ClassValue[];
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  photoLoading,
  className,
  attributes: { slug, title, cover },
}) => (
  <Link className={clsx(styles.ArticleCard, className)} href={`${Routes.Blog}/${slug}`} target="_blank">
    <Image image={cover} className={styles.ArticleCard__Image} loading={photoLoading} />

    <Text type="h3" size="heading3" title={title} className={styles.ArticleCard__Title}>
      {title}
    </Text>
  </Link>
);
