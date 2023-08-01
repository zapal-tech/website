import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Container, Text } from 'components';

import { HomeProps } from 'views/Home/Home';

import { Animation } from './components/Animation/Animation';
import { Technology } from './components/Technology/Technology';

import styles from './Technologies.module.scss';

type TechnologiesProps = Pick<HomeProps, 'technologies'>;

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  const { t } = useTranslation(Namespace.Home);

  return (
    <Container className={styles.Technologies}>
      <Text type="h2" size="heading1" className={styles.Technologies__Title} uppercase>
        {t('technologies.title')}
      </Text>

      <div className={styles.Technologies__Content}>
        <ul className={styles.Technologies__Grid}>
          {technologies.map((technology) => (
            <Technology key={technology.id} {...technology} />
          ))}
        </ul>

        <div className={styles.Technologies__AnimationBlock}>
          <Animation />
        </div>
      </div>
    </Container>
  );
};
