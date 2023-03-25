export type TeamMemberPreview = {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  imageUrl: string;
  order: number;
};

export type TeamMember = TeamMemberPreview & {
  email: string;
  description: string;
  linkedInUrl: string;
};
