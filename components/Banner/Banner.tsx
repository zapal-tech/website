import styles from './Banner.module.scss';

export const Banner = () => (
  <a href="https://u24.gov.ua/" rel="noreferrer noopener" target="_blank" className={styles.banner}>
    <strong className={styles.banner__text}>Support Ukraine</strong>
  </a>
);
