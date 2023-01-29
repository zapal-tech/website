import styles from './Banner.module.scss';

export const Banner = () => (
  <a href="https://u24.gov.ua/" rel="noreferrer noopener" target="_blank" className={styles.Banner}>
    <strong className={styles.Banner__Text}>Support Ukraine</strong>
  </a>
);
