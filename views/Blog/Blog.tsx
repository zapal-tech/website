import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { ApiCollectionResponse, ApiPage } from 'types/api';
import { BlogPost, BlogPostContent } from 'types/blog';
import { Page } from 'types/page';

import { Container, Text } from 'components';
import { Pagination } from 'components/Pagination/Pagination';

import { AppLayout } from 'layouts';

import { BlogPostCard } from './components/BlogPostCard';

import styles from './Blog.module.scss';

type OmitedBlogPostContent = Omit<BlogPostContent, 'content' | 'description'>;
export type OmitedBlogPost = Omit<BlogPost, 'content'> & { content: OmitedBlogPostContent };

export type BlogProps = Page<{
  page: ApiPage;
  blogPosts: ApiCollectionResponse<OmitedBlogPost>;
}>;

export const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  const { t } = useTranslation(Namespace.Blog);

  return (
    <AppLayout>
      <Container className={styles.Blog}>
        <Text className={styles.Blog__Title} type="h1" size="heading1" uppercase>
          {t('title')}
        </Text>

        <div className={styles.Blog__Grid}>
          {blogPosts.docs.map(({ id, slug, content: { title, cover } }) => (
            <BlogPostCard key={id} slug={slug} title={title} cover={cover} />
          ))}
        </div>

        {blogPosts.hasNextPage && <Pagination className={styles.Blog__Pagination} total={blogPosts.totalPages} />}
      </Container>
    </AppLayout>
  );
};
