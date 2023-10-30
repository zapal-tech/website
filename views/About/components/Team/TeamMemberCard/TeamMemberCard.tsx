import clsx from 'clsx';

import { TeamMember } from 'types/team';

import { Text } from 'components';
import { Image } from 'components/Image/Image';

import styles from './TeamMemberCard.module.scss';

export type TeamMemberCardProps = TeamMember;

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  slug,
  photo,
  firstName,
  lastName,
  fullTitle,
  title,
  about,
  links,
}) => (
  <div className={styles.TeamMemberCard} id={slug}>
    <Image className={styles.TeamMemberCard__Photo} image={photo} alt={`${firstName} ${lastName} photo`} priority />

    <div className={styles.TeamMemberCard__Container}>
      <Text className={styles.TeamMemberCard__Name} size="heading3" type="h3">
        {firstName} {lastName}
      </Text>

      <Text
        className={clsx(
          styles.TeamMemberCard__Title,
          (about || links?.length) && styles['TeamMemberCard__Title--MarginBottom'],
        )}
      >
        {fullTitle || title}
      </Text>

      {about && (
        <Text
          className={clsx(styles.TeamMemberCard__Bio, links?.length && styles['TeamMemberCard__Bio--MarginBottom'])}
          size="small"
        >
          {about}
        </Text>
      )}

      {links?.length ? (
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
      ) : null}
    </div>
  </div>
);
