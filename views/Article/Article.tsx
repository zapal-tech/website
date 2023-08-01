import { Article as ArticleType } from 'types/articles';
import { Page } from 'types/page';

import { parseArticleContent } from 'utils/parseArticle';

import { Container, Text } from 'components';

import { AppLayout } from 'layouts';

import styles from './Article.module.scss';

export type ArticleProps = Page<{
  article: ArticleType;
}>;

export const Article: React.FC<ArticleProps> = ({ article }) => {
  const { title, description, cover, content, author, tags } = article.attributes;

  return (
    <AppLayout>
      <article className={styles.Article}>
        <Container
          type="header"
          className={styles.Article__Header}
          style={
            cover?.data.attributes?.url
              ? {
                  backgroundImage: `url(${cover.data.attributes.url}), linear-gradient(to bottom, rgba(2,2,2,0.5) 85%, rgba(2,2,2,1))`,
                }
              : undefined
          }
        >
          <Text type="h1" size="heading1" className={styles.Article__Title} role="heading">
            {title}
          </Text>

          <Text className={styles.Article__Description}>{description}</Text>
        </Container>

        <Container className={styles.Article__ContentWrapper}>
          <section className={styles.Content}>
            {parseArticleContent(content)}

            {/* {author.attributes && (
          <Container type="footer" className={styles.Article__Footer}>
            <figure className={styles.Article__Author}>
              <Image
                src={author.attributes.avatar?.data.attributes?.url}
                alt={author.attributes.firstName + ' ' + author.attributes.lastName}
                className={styles.Article__Avatar}
                unoptimized
              />

              <figcaption className={styles.Article__AuthorName}>
                <Text size="heading3">{author.attributes.firstName + ' ' + author.attributes.lastName}</Text>
              </figcaption>
            </figure>
          </Container>
        )} */}

            {/* {tags && (
          <Container type="footer" className={styles.Article__Footer}>
            <Text size="heading3" className={styles.Article__Tags}>
              {tags.data.map((tag) => tag.attributes.name).join(', ')}
            </Text>
          </Container>
        )} */}
          </section>
        </Container>
      </article>
    </AppLayout>
  );
};
