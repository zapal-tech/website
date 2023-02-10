import { Text } from 'components';

import styles from './Error404Page.module.scss';

export const Error404Page = () => (
  <div className={styles.Error404Page}>
    <Text type="h1" size="heading1" className={styles.Error404Page__Text}>
      404
    </Text>

    <Text size="heading3">Page not found</Text>
  </div>
);
