export type ApiResponse<T> = {
  data: T;
  meta?: Record<string, any>;
};

export type ApiImage = {
  data: {
    id: number;
    attributes: ApiImageAttributes;
  };
};

export type ApiBaseImageAttributes = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  url: string;
  width: number;
};

export type ApiImageAttributes = ApiBaseImageAttributes & {
  alternativeText: string | null;
  caption: string | null;
  formats: Record<string, ApiBaseImageAttributes>;
  previewUrl: string | null;
};

export type ApiSeoSocial = {
  id: number;
  socialNetwork: 'Twitter' | 'Facebook';
  title: string;
  description: string;
  image: ApiImage | null;
};

export type ApiSeo = {
  id: number;
  canonicalURL: string | null;
  keywords: string | null;
  metaDescription: string;
  metaImage: ApiImage;
  metaRobots: string | null;
  metaSocial: ApiSeoSocial[];
  metaTitle: string;
  metaViewport: string | null;
  structuredData: Record<string, any> | null;
};

export type ApiPage = {
  id: number;
  attributes: ApiPageAttributes;
};

export type ApiPageAttributes = {
  translation: Record<string, any>;
  seo: ApiSeo;
  locale: string;
};
