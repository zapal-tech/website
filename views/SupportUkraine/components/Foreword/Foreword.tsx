import { useTranslation } from 'next-i18next';

import { Container, Text } from 'components';

import { Namespace } from 'i18n';

import { TableOfContent } from './components/TableOfContent/TableOfContent';

import styles from './Foreword.module.scss';

export const Foreword: React.FC = () => {
  const { t } = useTranslation(Namespace.SupportUkraine);
  return (
    <div className={styles.Foreword}>
      <div className={styles.Foreword__HeadingBox}>
        <Text className={styles.Foreword__Title} uppercase type="h2" size="heading1">
          {t('foreword.title')}
        </Text>
        <Text className={styles.Foreword__ReadTime}>{t('foreword.readTime')}</Text>
      </div>
      <div className={styles.Foreword__ArticleBox}>
        <Text size="small" className={styles.Foreword__FirstArticle}>
          {t('foreword.firstArticle')}
        </Text>
        <Text size="small" className={styles.Foreword__SecondArticle}>
          {t('foreword.secondArticle')}
        </Text>
        <Text size="small" className={styles.Foreword__ThirdArticle}>
          {t('foreword.thirdArticle')}
        </Text>
      </div>
      <TableOfContent />
    </div>
  );
};
