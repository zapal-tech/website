import type { SerializedEditorState } from 'lexical';

import { ApiBaseProperties, ApiImage, ApiMeta } from './api';

type BlogPostAuthor = ApiBaseProperties<{
  name: string;
  slug: string;
  photo: ApiImage;
  email: string;
}>;

type BlogPostTag = ApiBaseProperties<{
  name: string;
  slug: string;
}>;

export type BlogPostContent = {
  title: string;
  description: string;
  content: SerializedEditorState;
  cover?: ApiImage;
  author: BlogPostAuthor;
  tags: BlogPostTag[];
};

export type BlogPost = ApiBaseProperties<{
  slug: string;
  content: BlogPostContent;
  meta: ApiMeta;
}>;
