import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { ApiMetaPagination, ApiPage, ApiResponse } from 'types/api';
import { Article } from 'types/articles';
import { Page } from 'types/page';

import { Container, Text } from 'components';
import { Pagination } from 'components/Pagination/Pagination';

import { AppLayout } from 'layouts';

import { ArticleCard } from './components/ArticleCard';

import styles from './Blog.module.scss';

export type BlogProps = Page<{
  page: ApiPage;
  articles: ApiResponse<Article[], ApiMetaPagination>;
}>;

export const Blog: React.FC<BlogProps> = ({ articles }) => {
  const { t } = useTranslation(Namespace.Blog);

  return (
    <AppLayout>
      <Container className={styles.Blog}>
        <Text className={styles.Blog__Title} type="h1" size="heading1" uppercase>
          {t('title')}
        </Text>

        <div className={styles.Blog__Grid}>
          {articles.data.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        {articles.meta.pagination.pageCount > 1 && (
          <Pagination className={styles.Blog__Pagination} total={articles.meta.pagination.total} />
        )}
      </Container>
    </AppLayout>
  );
};
