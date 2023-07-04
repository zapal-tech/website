import { Text } from 'components';

import { TableOfContent } from './components/TableOfContent/TableOfContent';

import styles from './Foreword.module.scss';

export const Foreword: React.FC = () => (
  <div className={styles.Foreword}>
    <div className={styles.Foreword__HeadingBox}>
      <Text className={styles.Foreword__Title} uppercase type="h2" size="heading1">
        Foreword
      </Text>
      <Text className={styles.Foreword__ReadTime}>8 min read</Text>
    </div>

    <div className={styles.Foreword__ArticleBox}>
      <Text size="small" className={styles.Foreword__FirstArticle}>
        About 8 years ago, the Russian army had occupied Crimea and Donbas, immersing Ukraine in a state of war. But
        Putin never admitted his soldiers were involved. Until the 24th of February, 2022. That day a week ago, almost
        immediately after Putin announced war against Ukraine, the first bombardments in Kyiv, Kharkiv, Odesa, and
        Donbas began.
      </Text>

      <Text size="small" className={styles.Foreword__SecondArticle}>
        In Ukraine and even across Europe, we have entered unprecedented times. Who could have imagined that a
        full-scale war involving massive bombardments and shellings of towns with millions of residents would take place
        in the 21st century?
      </Text>

      <Text size="small" className={styles.Foreword__ThirdArticle}>
        We are writing this article on 3rd March, the 8th day of Ukraine’s resistance. Even now, the Russian army is
        bombarding our cities and villages, shelling our schools, universities, and hospitals, and killing hundreds of
        people, including children. Still, Ukrainians do everything in their power and even more to get the Russian
        occupiers out of their lands.
      </Text>
    </div>

    <TableOfContent />
  </div>
);
