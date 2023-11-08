import { ApiBaseProperties, ApiImage, ApiMeta } from './api';
import { TeamMember } from './team';

export type Project = ApiBaseProperties<{
  order: number;
  slug: string;
  preview: ProjectPreview;
  content: ProjectContent;
  meta: ApiMeta;
}>;

export type ProjectPreview = {
  name: string;
  description: string;
  image: ApiImage;
};

export type ProjectDetails = {
  country: string;
  url: string;
  startYear: number;
  endYear?: number;
  industry: string;
  projectType: string;
  services: string;
  technologies: string;
};

export type ProjectContent = {
  name: string;
  description: string;
  image: ApiImage;
  details: ProjectDetails;
  layout: LayoutBlock[];
};

export type ProjectFooter = {
  title: string;
  description: string;
  contactFormButton: string;
  link: {
    label: string;
    url: string;
  };
  contact: TeamMember;
};

type LayoutBlock =
  | {
      options?: {
        autoplay?: boolean | null;
        loop?: boolean | null;
        animation?: ('slide' | 'fade') | null;
      };
      slides?:
        | {
            image?: string | ApiImage | null;
            id?: string | null;
          }[]
        | null;
      id?: string | null;
      blockName?: string | null;
      blockType: 'slider';
    }
  | {
      content: {
        [k: string]: unknown;
      }[];
      id?: string | null;
      blockName?: string | null;
      blockType: 'rich-text';
    }
  | {
      color: string;
      default: {
        show: boolean;
        x?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        y?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        blur?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        diameter?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
      };
      phone: {
        show: boolean;
        x?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        y?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        blur?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        diameter?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
      };
      'large-phone': {
        show: boolean;
        x?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        y?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        blur?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        diameter?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
      };
      tablet: {
        show: boolean;
        x?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        y?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        blur?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        diameter?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
      };
      'large-tablet': {
        show: boolean;
        x?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        y?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        blur?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        diameter?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
      };
      laptop: {
        show: boolean;
        x?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        y?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        blur?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        diameter?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
      };
      'large-laptop': {
        show: boolean;
        x?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        y?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        blur?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        diameter?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
      };
      desktop: {
        show: boolean;
        x?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        y?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        blur?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
        diameter?: {
          value?: number | null;
          unit?: ('px' | 'rem' | '%' | 'vw') | null;
        };
      };
      id?: string | null;
      blockName?: string | null;
      blockType: 'circle-element';
    }
  | {
      columns?:
        | {
            blocks?:
              | (
                  | {
                      content: {
                        [k: string]: unknown;
                      }[];
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'rich-text';
                    }
                  | {
                      media: string | ApiImage;
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'media';
                    }
                )[]
              | null;
            id?: string | null;
          }[]
        | null;
      id?: string | null;
      blockName?: string | null;
      blockType: 'columns';
    };

export type ColumnBlock =
  | {
      content: {
        [k: string]: unknown;
      }[];
      id?: string | null;
      blockName?: string | null;
      blockType: 'rich-text';
    }
  | {
      media: string | ApiImage;
      id?: string | null;
      blockName?: string | null;
      blockType: 'media';
    };
