import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useState } from 'react';

import { Namespace } from 'configs/i18n';

import { Location } from 'types/locations';

import { createTimeString } from 'utils/time';

import { Text } from 'components';

import styles from './TabContent.module.scss';

type ContactLinkProps = {
  title: string;
  href: string;
};

const ContactLink: React.FC<ContactLinkProps> = ({ title, href }) => (
  <a className={styles.TabContent__Link} href={href} target="_blank" rel="noopener noreferrer">
    <Text size="small">{title}</Text>
  </a>
);

export const TabContent: React.FC<Location> = ({ attributes: { address, contact, timeZone } }) => {
  const { t } = useTranslation(Namespace.Contacts);
  const [currentLocationTime, setCurrentLocationTime] = useState('');

  const updateTime = useCallback(() => setCurrentLocationTime(createTimeString(timeZone)), [timeZone]);

  useEffect(() => {
    updateTime();

    const updateTimeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(updateTimeInterval);
  }, [updateTime]);

  return (
    <div className={styles.TabContent}>
      <ContactLink title={address.label} href={address.link} />

      <Text size="small" className={styles.TabContent__Time}>
        {t('locations.time')}: {currentLocationTime}
      </Text>

      <div className={styles.TabContent__ContactLinks}>
        {contact.email && <ContactLink title={contact.email} href={'mailto:' + contact.email} />}
        {contact.number && <ContactLink title={contact.number} href={'tel:' + contact.number} />}
      </div>

      <div className={styles.TabContent__PersonInfo}>
        <Text size="small">{contact.fullName}</Text>
        <Text size="small">{contact.title}</Text>
      </div>
    </div>
  );
};
