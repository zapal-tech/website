import { ApiBaseAttributes, ApiImage, ApiSeo } from './api';

type ArticleAuthorAttributes = {
  firstName: string;
  lastName?: string;
  avatar?: ApiImage;
  email?: string;
};

type ArticleAuthor = {
  id: number;
  attributes: ArticleAuthorAttributes;
};

type ArticleTagAttributes = {
  name: string;
  slug: string;
  description?: string;
  updatedAt: string;
  createdAt: string;
  publishedAt: string;
};

type ArticleTag = {
  id: number;
  attributes: ArticleTagAttributes;
};

type ArticleTags = {
  data: ArticleTag[];
};

// export type ArticleSliderComponent = {
//   __component: 'shared.slider';
//   // TODO: Add support for files and videos
//   media: ApiImage[];
// };

export type ArticleAttributes = {
  slug: string;
  title: string;
  cover?: ApiImage;
  description: string;
  content: string;
  author: ArticleAuthor;
  tags: ArticleTags;
  seo: ApiSeo;
  locale: string;
  publishedAt: string;
};

export type Article = {
  id: number;
  attributes: ApiBaseAttributes<ArticleAttributes>;
};
