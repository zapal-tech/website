import { BlogPost as BlogPostType } from 'types/blog';
import { Page } from 'types/page';

import { blogPostPageCoverImageSize } from 'utils/imageSizes';
import { parseHtmlStringToJsx } from 'utils/parseHtmlStringToJsx';

import { Container, Text } from 'components';
import { Image } from 'components/Image/Image';

import { AppLayout } from 'layouts';

import styles from './BlogPost.module.scss';

export type BlogPostProps = Page<{
  blogPost: BlogPostType | null;
  blogPostStringifiedHTML: string | null;
}>;

export const BlogPost: React.FC<BlogPostProps> = ({ blogPost, blogPostStringifiedHTML }) => {
  if (!blogPost) return null;

  const { title, description, cover, author /* , tags */ } = blogPost.content;

  // Insert zero-width space after @ symbol in email address to properly format it
  const formattedAuthorEmail = author?.email?.replace('@', '@\u200B');

  return (
    <AppLayout>
      <article className={styles.BlogPost}>
        <Container type="header" className={styles.BlogPost__Header}>
          <Text type="h1" size="heading1" className={styles.BlogPost__Title} role="heading">
            {title}
          </Text>

          <Text className={styles.BlogPost__Description}>{description}</Text>

          {cover?.url && (
            <Image className={styles.BlogPost__BackgroundImage} image={cover} sizes={blogPostPageCoverImageSize} />
          )}
        </Container>

        <Container className={styles.BlogPost__ContentWrapper}>
          <section className={styles.BlogPost__Content}>
            {parseHtmlStringToJsx(blogPostStringifiedHTML)}

            {author?.name && (
              <Container type="footer" className={styles.BlogPost__Footer}>
                <figure className={styles.BlogPost__Author}>
                  <Image image={author.photo} className={styles.BlogPost__AuthorPhoto} unoptimized />

                  <div className={styles.BlogPost__AuthorInfo}>
                    <Text type="figcaption" size="heading3" className={styles.BlogPost__AuthorName}>
                      {author.name}
                    </Text>

                    <Text className={styles.BlogPost__AuthorEmail}>
                      <a href={`mailto:${author.email}`}>{formattedAuthorEmail || author.email}</a>
                    </Text>
                  </div>
                </figure>
              </Container>
            )}

            {/* {tags && (
              <Container type="footer" className={styles.BlogPost__Footer}>
                <Text size="heading3" className={styles.BlogPost__Tags}>
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
