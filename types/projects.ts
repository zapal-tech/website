export type ProjectPreview = {
  id: string;
  shortName: string;
  shortDescription: string;
  thumbnailImageUrl: string;
  order: number;
};

export type Project = ProjectPreview & {
  name: string;
  description: string;
};
