import { SupportUkraineSections } from 'types/supportUkraine';

import { Text } from 'components';
import { Link } from 'components/Link/Link';

import styles from './WarCrimes.module.scss';

export const WarCrimes = () => {
  return (
    <div id={SupportUkraineSections.ProtestPeacefully} className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading2">
        3/ PROTEST PEACEFULLY TO DEMAND ADDITIONAL HELP FROM YOUR AUTHORITIES
      </Text>
      <Text className={styles.FoundationItem__Text} size="small">
        We have already greatly benefited from the assistance your countries have already provided us in resisting
        russian aggression. Military and financial aid help Ukraine become stronger, increasing its resistance to
        russian aggression. The sanctions affect the economy of russia, making it harder and harder to allocate funds
        for their occupying army at the expense of the russian people’s wellbeing.
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://warcrimes.gov.ua/">WAR CRIMES</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          Your authorities can still take many steps to resolve the situation. Besides starting an unprovoked war,
          russia is also committing numerous war crimes. You can demand more financial, military, and humanitarian help
          from authorities in order to prevent war crimes from happening.
        </Text>
      </div>
    </div>
  );
};
