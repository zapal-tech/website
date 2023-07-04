import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { Text } from 'components';

import styles from './TableOfContent.module.scss';

export const TableOfContent: React.FC = () => {
  return (
    <>
      {' '}
      <Text uppercase className={styles.TableOfContent__Title} size="heading2">
        Table Of Content
      </Text>
      <div className={styles.TableOfContent__List}>
        <Text size="small">What About Edvantis?</Text>
        <Text size="small">1/ Donate Money for Humanitarian or Military Relief</Text>
        <div className={styles.TableOfContent__FirstChild}>
          <Text size="small">Ukraine-Based Charity Organizations</Text>
          <div className={styles.TableOfContent__FirstChild__Child}>
            <Text size="small">National Bank of Ukraine</Text>
            <Text size="small">NGO Come Back Alive</Text>
            <Text size="small">Sergiy Prytula’s foundations</Text>
            <Text size="small">Army SOS</Text>
            <Text size="small">Hospitallers</Text>
            <Text size="small">Voices of Children</Text>
            <Text size="small">Ukraine Crisis Media Center</Text>
          </div>
          <Text size="small">Foreign charity organizations</Text>
          <Text size="small">Help Us Help</Text>
          <Text size="small">With Ukraine</Text>
          <Text size="small">Leleka Foundation</Text>
        </div>
        <Text size="small">2/ Read and Share Only Credible Information About Ukraine</Text>
        <Text size="small">3/ Protest Peacefully to Demand Additional Help From Your Authorities</Text>
        <Text size="small">4/ Ban Russian Business or Urge Other Brands To Do So</Text>
        <Text size="small">5/ Support Ukrainian Businesses</Text>
        <Text size="small">6/ Help Refugees in Your Country</Text>
        <Text size="small">Conclusion</Text>
      </div>
    </>
  );
};
