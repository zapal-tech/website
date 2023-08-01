import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Namespace } from 'configs/i18n';

import { Routes } from 'types/routes';

import { Button, Card, Container, Text } from 'components';

import styles from './AboutUs.module.scss';

export const AboutUs: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);
  const router = useRouter();

  const goToAboutUs = () => router.push(Routes.About);

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
            <Card key={cardText} frameType="corner" className={styles.AboutUs__Card}>
              <Text className={styles.AboutUs__CardText}>{cardText}</Text>
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
