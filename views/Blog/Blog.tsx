import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { ApiPage } from 'types/api';
import { Article } from 'types/articles';

import { Container, Text } from 'components';

import { AppLayout } from 'layouts';

import styles from './Blog.module.scss';

export type BlogProps = {
  locale?: string;
  page: ApiPage;
  articles: Article[];
};

export const Blog: React.FC<BlogProps> = ({ articles }) => {
  const { t } = useTranslation(Namespace.Blog);

  return (
    <AppLayout>
      <Container className={styles.Blog}>
        <Text className={styles.Blog__Title} type="h2" size="heading1" uppercase>
          {t('title')}
        </Text>

        <div className={styles.Blog__Grid}>
          {articles.map((article) => (
            <div key={article.id}>{article.attributes.title}</div>
          ))}
        </div>
      </Container>
    </AppLayout>
  );
};
