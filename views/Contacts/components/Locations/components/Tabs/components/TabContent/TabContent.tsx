import { useCallback, useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

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

export const TabContent: React.FC<Location> = ({ address, url, fullName, title, email, phone, timeZone }) => {
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
      <ContactLink title={address} href={url} />

      <Text size="small" className={styles.TabContent__Time}>
        {t('locations.time')}: {currentLocationTime}
      </Text>

      <div className={styles.TabContent__ContactLinks}>
        {email && <ContactLink title={email} href={'mailto:' + email} />}
        {phone && <ContactLink title={phone} href={'tel:' + phone} />}
      </div>

      <div className={styles.TabContent__PersonInfo}>
        <Text size="small">{fullName}</Text>
        <Text size="small">{title}</Text>
      </div>
    </div>
  );
};
