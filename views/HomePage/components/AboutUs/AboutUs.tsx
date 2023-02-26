import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Button, Card, Container, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './AboutUs.module.scss';

export const AboutUs: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);
  const router = useRouter();

  const goToAboutUs = () => router.push('/about');

  return (
    <Container className={styles.AboutUs}>
      <Text size="heading1" type="h2" uppercase className={styles.AboutUs__Title}>
        {t('about.title')}
      </Text>

      <div className={styles.AboutUs__Box}>
        <Text size="heading3" type="h3" className={styles.AboutUs__Subtitle}>
          {t('about.subtitle')}
        </Text>

        <div className={styles.AboutUs__Line} />

        <div className={styles.AboutUs__CardsContainer}>
          {(t('about.cards', { returnObjects: true }) as string[]).map((cardText) => (
            <Card key={cardText} frameType="corner">
              <Text type="h4" className={styles.AboutUs__CardText}>
                {cardText}
              </Text>
            </Card>
          ))}
        </div>

        <Button variant="primary" onClick={goToAboutUs}>
          {t('about.button')}
        </Button>
      </div>
    </Container>
  );
};
