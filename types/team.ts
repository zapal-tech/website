import { ApiBaseProperties, ApiImage } from './api';

export type TeamMember = ApiBaseProperties<{
  firstName: string;
  lastName: string;
  title: string;
  fullTitle: string;
  photo: ApiImage;
  order: number;
  slug: string;
  about: string;
  links: TeamMemberLink[];
}>;

export type TeamMemberLink = {
  id: string;
  name: string;
  url: string;
};
