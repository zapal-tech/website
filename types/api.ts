export type ApiCollectionResponse<T> = {
  docs: T[];
} & ApiPagination;

export type ApiPagination = {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
};

export type ApiImage = ApiBaseProperties<
  ApiBaseImageProperties & {
    alt?: string;
    prefix?: string;
    blurhash?: string;
    sizes?: Record<string, ApiBaseImageProperties>;
  }
>;

export type ApiBaseImageProperties = {
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  url: string;
};

export type ApiMeta = {
  title?: string;
  canonical?: string;
  keywords?: string;
  description?: string;
  photo?: ApiImage;
  // structuredData: Record<string, any> | null;
};

export type ApiPageContent = {
  translation: Record<string, any>;
};

export type ApiBaseProperties<T> = T & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ApiPage = ApiBaseProperties<{
  content: ApiPageContent;
  meta: ApiMeta;
  globalType: string;
  _status: 'published' | 'draft';
}>;
