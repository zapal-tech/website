export type ApiResponse<T, M = object> = {
  data: T;
  meta: M;
};

export type ApiMetaPagination<T = object> = T & {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};

export type ApiImage = {
  data: {
    id: number;
    attributes: ApiBaseAttributes<ApiImageAttributes>;
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

export type ApiImageAttributes = ApiBaseAttributes<
  ApiBaseImageAttributes & {
    alternativeText: string | null;
    caption: string | null;
    formats: Record<string, ApiBaseImageAttributes>;
    previewUrl: string | null;
  }
>;

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

export type ApiPageAttributes = ApiBaseAttributes<{
  translation: Record<string, any>;
  seo: ApiSeo;
  locale: string;
}>;

export type ApiBaseAttributes<T> = T & {
  createdAt: string;
  updatedAt: string;
};

export type ApiPage = {
  id: number;
  attributes: ApiPageAttributes;
};
