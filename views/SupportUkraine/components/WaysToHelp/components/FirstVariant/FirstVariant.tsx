import { SupportUkraineSections } from 'types/supportUkraine';

import { Text } from 'components';

import { CharityOrganisations } from './components/CharityOrganisations/CharityOrganisations';

import styles from './FirstVariant.module.scss';

export const FirstVariant = () => {
  return (
    <>
      <div id={SupportUkraineSections.HumanitarianRelief} className={styles.FirstVariant}>
        <Text className={styles.FirstVariant__Titles} size="heading2">
          1/ DONATE MONEY FOR HUMANITARIAN OR MILITARY RELIEF
        </Text>
        <Text className={styles.FirstVariant__Text} size="small">
          Ukrainian state and charity accounts are now open for foreigners to make donations. All of the organizations
          we are going to talk about are credible. In our article, we have included reliable links. If you search for
          these charities and organizations yourself, please, double-check all websites, links, and account information.
          russia’s war against Ukraine is hybrid, so there are many phishing sites and resources designed to mislead
          donors.
        </Text>
      </div>

      <CharityOrganisations />
    </>
  );
};
