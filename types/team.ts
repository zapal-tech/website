export type TeamMemberPreview = {
  firstName: string;
  lastName: string;
  title: string;
  imageUrl: string;
};

export type TeamMember = TeamMemberPreview & {
  email: string;
  description: string;
  linkedInUrl: string;
};
