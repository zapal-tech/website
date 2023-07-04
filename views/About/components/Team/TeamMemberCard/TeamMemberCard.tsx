import clsx from 'clsx';

import { TeamMember } from 'types/team';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = TeamMember;

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  attributes: { slug, image, firstName, lastName, fullTitle, title, bio, links },
}) => (
  <div className={styles.TeamMemberCard} id={slug}>
    <Image className={styles.TeamMemberCard__Photo} image={image} alt={`${firstName} ${lastName} photo`} priority />

    <div className={styles.TeamMemberCard__Container}>
      <Text className={styles.TeamMemberCard__Name} size="heading3" type="h3">
        {firstName} {lastName}
      </Text>

      <Text
        className={clsx(
          styles.TeamMemberCard__Title,
          (bio || links?.length) && styles['TeamMemberCard__Title--MarginBottom'],
        )}
      >
        {fullTitle || title}
      </Text>

      {bio && (
        <Text
          className={clsx(styles.TeamMemberCard__Bio, links?.length && styles['TeamMemberCard__Bio--MarginBottom'])}
          size="small"
        >
          {bio}
        </Text>
      )}

      {links?.length && (
        <ul className={styles.TeamMemberCard__Links}>
          {links.map(({ title, link }, idx) => (
            <li key={link}>
              {!!idx && <Text> / </Text>}

              <a className={styles.TeamMemberCard__Link} href={link} target="_blank" rel="noreferrer">
                <Text>{title}</Text>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
