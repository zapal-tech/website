import styles from './Animation.module.scss';

export const Animation: React.FC = () => (
  <div className={styles.Animation}>
    {/* eslint-disable-next-line prefer-spread */}
    {Array.apply(null, Array(50)).map((item, idx) => (
      <div key={idx} className={styles.Animation__Line} />
    ))}
  </div>
);
