import { ApiImage } from './api';

export type TeamMember = {
  id: number;
  attributes: TeamMemberAttributes;
};

export type TeamMemberAttributes = {
  firstName: string;
  lastName: string;
  title: string;
  fullTitle: string;
  image: ApiImage;
  order: number;
  slug: string;
  bio: string;
  links: TeamMemberLink[];
};

export type TeamMemberLink = {
  title: string;
  link: string;
};
