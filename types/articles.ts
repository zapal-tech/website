export type Article = {
  id: number;
  attributes: ArticleAttributes;
};

export type ArticleAttributes = {
  title: string;
  slug: string;
  content: any;
};
