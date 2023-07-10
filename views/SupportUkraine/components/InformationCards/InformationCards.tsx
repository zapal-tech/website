import { SupportUkraineSections } from 'types/supportUkraine';

import { Card, Text } from 'components';

import styles from './InformationCards.module.scss';

const officialMedias = [
  'Official Twitter page of Volodymyr Zelenskyy, the President of Ukraine',
  'Official Facebook page of Valerii Zaluzhnyi, the Commander-in-Chief of the Armed Forces of Ukraine',
  'Official Facebook page of General Staff of the Armed Forces of Ukraine',
  'Official Facebook page of Ukraine’s Ministry of Defence',
  'Official Telegram channel of Verkhovna Rada of Ukraine (Ukraine’s Parliament)',
  'Twitter of Suspline News, the national public broadcaster in Ukraine',
  'Instagram and Twitter accounts of independent meMilitarnyi (Twitter account and website)dia Svidomi',
  'Militarnyi (Twitter account and website)',
  'The Kyiv Independent',
  'Ukrayinska Pravda',
  'Ukrainian Toronto Television',
];

export const InformationCards = () => {
  return (
    <div id={SupportUkraineSections.ReadAndShareCredibleInformation} className={styles.SecondVariant}>
      <div className={styles.SecondVariant__TextBox}>
        <Text className={styles.SecondVariant__Title} size="heading2">
          2/ READ AND SHARE ONLY CREDIBLE INFORMATION ABOUT UKRAINE
        </Text>

        <Text className={styles.SecondVariant__Text} size="small">
          russia uses disinformation not only against the Ukrainian people but also to influence world opinion. Their
          bots, troll farms, and fakes were even more active during this hybrid war than usual. This means you should
          always double-check anything you read.
        </Text>

        <Text className={styles.SecondVariant__Text} size="small">
          Foreign media may cover only the main points without going into any details or may not cover everything as
          fast as the information appears in Ukraine.
        </Text>

        <Text className={styles.SecondVariant__Text} size="small">
          For credible first-hand information about Ukraine, please visit the official websites of Ukrainian
          authorities, or check with a reliable news source. Examples of credible sources in English or with English
          translations include:
        </Text>
      </div>

      <div className={styles.SecondVariant__CardList}>
        {officialMedias.map((item) => {
          return (
            <Card className={styles.SecondVariant__CardListItem} frameType="corner" key={item}>
              <Text>{item}</Text>
            </Card>
          );
        })}
      </div>

      <Text className={styles.SecondVariant__AfterListText} size="small">
        You spreading information from these sources could help more people understand what is actually happening in
        Ukraine from point of view of our citizens.
      </Text>
    </div>
  );
};
