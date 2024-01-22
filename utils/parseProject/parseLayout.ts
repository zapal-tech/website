import { SerializedEditorState } from 'lexical';

import { ColumnBlock, ProjectContent } from 'types/projects';

import { parseLexicalState } from 'utils/parseLexicalState';

import media from 'styles/media.module.scss';

type BreakpointName =
  | 'default'
  | 'phone'
  | 'large-phone'
  | 'tablet'
  | 'large-tablet'
  | 'laptop'
  | 'large-laptop'
  | 'desktop';

const isNotNullOrUndefined = (value: unknown): boolean => value !== null && value !== undefined;
const getCssValue = (data: Record<'value' | 'unit', string | number>): string => `${data.value}${data.unit}`;

const getRadialGradientStyleProps = (item: ProjectContent['layout'][0], key: BreakpointName): string => {
  if (item.blockType !== 'circle-element') return '';

  const isXPresent = isNotNullOrUndefined(item[key].x?.value) && isNotNullOrUndefined(item[key].x?.unit);
  const isYPresent = isNotNullOrUndefined(item[key].y?.value) && isNotNullOrUndefined(item[key].y?.unit);
  const isDiameterPresent =
    isNotNullOrUndefined(item[key].diameter?.value) && isNotNullOrUndefined(item[key].diameter?.unit);
  const isBlurPresent = isNotNullOrUndefined(item[key].blur?.value) && isNotNullOrUndefined(item[key].blur?.unit);

  return `
    ${isYPresent ? `top: ${getCssValue(item[key].y as Record<'value' | 'unit', string | number>)};` : ''}
    ${isXPresent ? `left: ${getCssValue(item[key].x as Record<'value' | 'unit', string | number>)};` : ''}
    ${
      isDiameterPresent ? `width: ${getCssValue(item[key].diameter as Record<'value' | 'unit', string | number>)};` : ''
    }
    ${isBlurPresent ? `filter: blur(${getCssValue(item[key].blur as Record<'value' | 'unit', string | number>)})` : ''}
  `;
};

const mediaMap = new Map<BreakpointName, string>();

mediaMap.set('phone', media.breakpointPhone);
mediaMap.set('large-phone', media.breakpointLargePhone);
mediaMap.set('tablet', media.breakpointTablet);
mediaMap.set('large-tablet', media.breakpointLargeTablet);
mediaMap.set('laptop', media.breakpointLaptop);
mediaMap.set('large-laptop', media.breakpointLargeLaptop);
mediaMap.set('desktop', media.breakpointDesktop);

const getRadialGradientMediaStyles = (item: ProjectContent['layout'][0]): string => {
  if (item.blockType !== 'circle-element') return '';

  let styles = '';

  mediaMap.forEach((value, key) => {
    styles += `
      @media screen and (min-width: ${value}) {
        .circle-element__circle {
          display: ${item[key].show ? 'block' : 'none'};
          ${item[key].show ? getRadialGradientStyleProps(item, key) : ''}
        }
      }
    `;
  });

  return styles;
};

export const parseProjectLayout = (layout: ProjectContent['layout'] | ColumnBlock[]): string => {
  let parsedLayout = '';

  layout.map((item) => {
    switch (item.blockType) {
      case 'rich-text': {
        if (!item.content) break;

        parsedLayout += `<div class="rich-text">${parseLexicalState(
          item.content as unknown as SerializedEditorState,
        )}</div>`;
        break;
      }

      case 'media': {
        if (item.media && typeof item.media !== 'string' && item.media.mimeType?.includes('image'))
          parsedLayout += `<img class="media media--image" data-media='${JSON.stringify(item.media)}' />`;

        break;
      }

      case 'circle-element': {
        parsedLayout += `
        <div class="circle-element">
          <style scoped>
            .circle-element__circle {
              background: ${item.color};

              ${getRadialGradientStyleProps(item, 'default')}
            }

            ${getRadialGradientMediaStyles(item)}
          </style>
          <div class="circle-element__circle"></div>
        </div>`.replace(/\s\s+/g, '');

        break;
      }

      case 'slider': {
        parsedLayout += `<div class="slider" data-animation="${item.options?.animation}" data-autoplay="${item.options
          ?.autoplay}" data-loop="${item.options?.loop}">${item.slides
          ?.map((slide) =>
            slide.image ? `<img class="slide-image" data-image='${JSON.stringify(slide.image)}' />` : '',
          )
          .join('')}</div>`;
        break;
      }

      case 'columns': {
        parsedLayout += `<div class="row row--columns-${item.columns?.length}">${item.columns
          ?.map((column) => (column.blocks ? `<div class="column">${parseProjectLayout(column.blocks)}</div>` : ''))
          .join('')}</div>`.replace(/\s\s+/g, '');

        break;
      }
    }
  });

  return parsedLayout;
};
