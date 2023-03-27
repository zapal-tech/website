import clsx from 'clsx';

import { TeamMember } from 'types/team';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = TeamMember;

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  id,
  imageUrl,
  firstName,
  lastName,
  fullTitle,
  title,
  bio,
  links,
}) => (
  <div className={styles.TeamMemberCard} id={id}>
    <Image className={styles.TeamMemberCard__Photo} src={imageUrl} alt={`${firstName} ${lastName} photo`} />

    <div className={styles.TeamMemberCard__Container}>
      <Text className={styles.TeamMemberCard__Name} size="heading3" type="h3">
        {firstName} {lastName}
      </Text>

      <Text
        className={clsx(
          styles.TeamMemberCard__Title,
          (bio || links.length) && styles['TeamMemberCard__Title--MarginBottom'],
        )}
      >
        {fullTitle || title}
      </Text>

      {bio && (
        <Text
          className={clsx(styles.TeamMemberCard__Bio, links.length && styles['TeamMemberCard__Bio--MarginBottom'])}
          size="small"
        >
          {bio}
        </Text>
      )}

      {links.length && (
        <ul className={styles.TeamMemberCard__Links}>
          {links.map(({ name, url }, idx) => (
            <li key={url}>
              {!!idx && <Text> / </Text>}

              <a className={styles.TeamMemberCard__Link} href={url} target="_blank" rel="noreferrer">
                <Text>{name}</Text>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
