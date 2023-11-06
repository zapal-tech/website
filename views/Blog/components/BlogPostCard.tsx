// import Link from 'next/link';
import clsx, { ClassValue } from 'clsx';
import Link from 'next/link';

import { BlogPost } from 'types/blog';
import { Routes } from 'types/routes';

import { blogPagePostCoverImageSize } from 'utils/imageSizes';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './BlogPostCard.module.scss';

export type BlogPostCardProps = {
  photoLoading?: 'eager' | 'lazy';
  className?: ClassValue | ClassValue[];
  slug: BlogPost['slug'];
  cover: BlogPost['content']['cover'];
  title: BlogPost['content']['title'];
};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ photoLoading, className, slug, cover, title }) => (
  <Link className={clsx(styles.BlogPostCard, className)} href={`${Routes.Blog}/${slug}`} target="_blank">
    <Image
      image={cover}
      className={styles.BlogPostCard__Image}
      loading={photoLoading}
      sizes={blogPagePostCoverImageSize}
    />

    <Text type="h3" size="heading3" title={title} className={styles.BlogPostCard__Title}>
      {title}
    </Text>
  </Link>
);
