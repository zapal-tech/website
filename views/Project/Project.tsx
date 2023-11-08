import { useTranslation } from 'next-i18next';

import { Namespace } from 'configs/i18n';

import { ApiMeta } from 'types/api';
import { Page } from 'types/page';
import { ProjectContent, ProjectFooter as ProjectFooterType } from 'types/projects';

import { parseHtmlStringToJsx } from 'utils/parseHtmlStringToJsx';

import { Container, Text } from 'components';
import { Image } from 'components/Image/Image';
import { Link } from 'components/Link/Link';

import { ProjectLayout } from 'layouts';

import { ProjectFooter } from './components/ProjectFooter/ProjectFooter';

import styles from './Project.module.scss';

export type ProjectProps = Page<
  ProjectContent & {
    footer: ProjectFooterType;
    layoutHtmlString: string | null;
    meta: ApiMeta;
  }
>;

export const Project: React.FC<ProjectProps> = ({ name, description, image, details, footer, layoutHtmlString }) => {
  const { t } = useTranslation(Namespace.Project);

  if (!name) return null;

  return (
    <ProjectLayout mainClassName={styles.Project}>
      <Container type="header" className={styles.Project__Header}>
        <Text type="h1" size="heading1" className={styles.Project__Name} role="heading">
          {name}
        </Text>

        <Text className={styles.Project__Description}>{description}</Text>

        {image?.url && <Image className={styles.Project__BackgroundImage} image={image} />}
      </Container>

      <Container className={styles.Project__Content}>
        <div className={styles.Project__Details}>
          <div className={styles.Project__Details__Cell}>
            <Text type="h3" size="heading2" className={styles.Project__Details__Cell__Title}>
              {t('country')}
            </Text>
            <Text size="heading3">{details.country}</Text>
          </div>

          <div className={styles.Project__Details__Cell}>
            <Text type="h3" size="heading2" className={styles.Project__Details__Cell__Title}>
              {t('timeFrame')}
            </Text>
            <Text size="heading3">
              {details.startYear}
              {details.endYear
                ? details.startYear !== details.endYear
                  ? ` - ${details.endYear}`
                  : ''
                : ` - ${t('present').toLowerCase()}`}
            </Text>
          </div>

          <div className={styles.Project__Details__Cell}>
            <Text type="h3" size="heading2" className={styles.Project__Details__Cell__Title}>
              {t('industry')}
            </Text>
            <Text size="heading3">{details.industry}</Text>
          </div>

          <div className={styles.Project__Details__Cell}>
            <Text type="h3" size="heading2" className={styles.Project__Details__Cell__Title}>
              {t('projectType')}
            </Text>
            <Text size="heading3">{details.projectType}</Text>
          </div>

          <div className={styles.Project__Details__Cell}>
            <Text type="h3" size="heading2" className={styles.Project__Details__Cell__Title}>
              {t('services')}
            </Text>
            <Text size="heading3">{details.services}</Text>
          </div>

          <div className={styles.Project__Details__Cell}>
            <Text type="h3" size="heading2" className={styles.Project__Details__Cell__Title}>
              {t('technologies')}
            </Text>
            <Text size="heading3">{details.technologies}</Text>
          </div>
        </div>

        <Link className={styles.Project__Link} target="_blank" href={details.url} uppercase>
          {t('urlLabel')}
        </Link>

        <div className={styles.Project__Layout}>{parseHtmlStringToJsx(layoutHtmlString)}</div>

        <ProjectFooter {...footer} />
      </Container>
    </ProjectLayout>
  );
};
