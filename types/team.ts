export type TeamMemberPreview = {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  fullTitle: string;
  imageUrl: string;
  order: number;
};

export type TeamMember = TeamMemberPreview & {
  email: string;
  bio: string;
  links?: {
    name: string;
    url: string;
  }[];
};
