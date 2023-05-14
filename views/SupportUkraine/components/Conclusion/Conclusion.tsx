import { Text } from 'components';

import styles from './Conclusion.module.scss';

export const Conclusion = () => {
  return (
    <div className={styles.Conclusion}>
      <Text uppercase className={styles.Conclusion__Title} size="heading1">
        Conclusion
      </Text>
      <Text size="small">
        Our sincere appreciation goes to all the countries, companies, organizations, and individuals from abroad who
        supported us with sanctions against russia, military and humanitarian aid, donations, and peaceful protests.
        Every single action matters and will make a difference!
      </Text>
      <Text size="small">
        Ukraine’s resistance and unity proved to the world, and even to putin himself, that Ukraine has a powerful army,
        courageous people, and a strong will for freedom. Freedom is what we value most. And we will fight for it
        relentlessly.
      </Text>
      <Text size="small">
        We need your help in this battle. Sovereignty, wellbeing, and even the very existence of our nation are at
        stake.
      </Text>
    </div>
  );
};
