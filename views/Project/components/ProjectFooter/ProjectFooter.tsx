import clsx, { ClassValue } from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

import { Namespace } from 'configs/i18n';

import { ProjectFooter as ProjectFooterType } from 'types/projects';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Card, Text } from 'components';
import { Image } from 'components/Image/Image';
import { Link } from 'components/Link/Link';

import styles from './ProjectFooter.module.scss';

type ProjectFooterProps = {
  className?: ClassValue | ClassValue[];
} & ProjectFooterType;

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const ProjectFooter: React.FC<ProjectFooterProps> = ({
  className,
  title,
  description,
  contact,
  contactFormButton,
  link,
}) => {
  const { t } = useTranslation(Namespace.Common);
  const { openModal } = useGlobalContext();

  const openContactForm = () => openModal(ContactForm);

  return (
    <div className={clsx(styles.ProjectFooter, className)}>
      <Text type="h2" size="heading2" className={styles.ProjectFooter__Headline}>
        {title}
      </Text>

      <div className={styles.ProjectFooter__Contact}>
        <Card className={styles.ProjectFooter__PhotoCard}>
          <Image className={styles.ProjectFooter__Photo} image={contact.photo} />
        </Card>

        <div className={styles.ProjectFooter__InfoWrapper}>
          <div className={styles.ProjectFooter__Info}>
            <Text size="heading3" className={styles.ProjectFooter__Name}>
              {contact.firstName} {contact.lastName}
            </Text>

            <Text className={styles.ProjectFooter__Title}>{contact.title}</Text>

            <Text size="small" className={styles.ProjectFooter__Description}>
              {description}
            </Text>
          </div>

          <Text className={styles.ProjectFooter__Actions}>
            <Link
              className={styles.ProjectFooter__Action}
              href={link.url}
              target="_blank"
              icon={false}
              underline={false}
            >
              {link.label}
            </Link>{' '}
            <Text type="span" className={styles.ProjectFooter__Or}>
              {t('or')}
            </Text>{' '}
            <Text type="span" className={styles.ProjectFooter__Action} onClick={openContactForm}>
              {contactFormButton}
            </Text>
          </Text>
        </div>
      </div>
    </div>
  );
};
