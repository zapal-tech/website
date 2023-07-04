import { SupportUkraineSections } from 'types/supportUkraine';

import { Text } from 'components';

import styles from './HelpRefugers.module.scss';

export const HelpRefugers = () => {
  return (
    <div id={SupportUkraineSections.HelpRefugers} className={styles.HelpRefugers}>
      <Text className={styles.HelpRefugers__Title} size="heading2">
        6/ HELP REFUGEES IN YOUR COUNTRY
      </Text>
      <Text size="small">
        The constant shelling and bombardment of Ukraine’s cities and villages caused many people to flee their homes.
        Some went to the west of the country. Others sought refuge in Europe.
      </Text>
      <Text size="small">
        Many of these people have left all of their belongings behind and need assistance finding a place to live, a
        job, and receiving financial aid for the first time. Provide them with this assistance.
      </Text>
      <Text size="small">
        Get in touch with your local authorities or the Ukrainian embassy to find out how and where you can help
        Ukrainian refugees in your country or city.
      </Text>
    </div>
  );
};
