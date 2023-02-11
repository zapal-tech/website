import { useTranslation } from 'next-i18next';

import { Button, Card, Container, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './AboutUs.module.scss';

export const AboutUs: React.FC = () => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container>
      <Text size="heading1" type="h1" uppercase className={styles.AboutUs__Title}>
        {t('about.title')}
      </Text>
      <div className={styles.AboutUs__Box}>
        <Text size="heading3" type="h3" className={styles.AboutUs__Subtitle}>
          {t('about.subtitle.upper')}
          <br />
          {t('about.subtitle.lower')}
        </Text>

        <div className={styles.AboutUs__Line}></div>

        <div className={styles.AboutUs__CardBox}>
          {(t('about.cards', { returnObjects: true }) as string[]).map((cardText) => (
            <Card key={cardText} frameType="corner">
              <Text type="h4" className={styles.Card__Text}>
                {cardText}
              </Text>
            </Card>
          ))}
        </div>

        <Button variant="primary">SERVICES</Button>
      </div>
    </Container>
  );
};
