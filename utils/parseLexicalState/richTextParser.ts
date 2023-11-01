import escapeHTML from 'escape-html';

import { ApiBaseImageProperties, ApiImage } from 'types/api';

import { deviceWidthSizes } from 'utils/imageLoader';

import { generateId } from './generateId';
import {
  ListType,
  NodeType,
  applyCodeBlockStyle,
  applyTextFormatting,
  getAlignClassName,
  getIndentClassName,
} from './richTextNodeFormat';
import type { SerializedLexicalNode } from './types';

function getLinkForPage(doc: unknown) {
  console.log(doc);

  return 'implement this';
}

export function parseLexicalRichText(children: SerializedLexicalNode[], parent?: SerializedLexicalNode): string[] {
  const usedIds: string[] = [];

  return children
    .map((node): string | null => {
      if (node.type === NodeType.TEXT) {
        let text = `${escapeHTML(node.text)}`;

        text = applyTextFormatting(text, node.format);

        return text;
      }

      if (!node) return null;

      const serializedChildren = node.children ? parseLexicalRichText(node.children, node).join('') : null;

      switch (node.type) {
        case NodeType.LINE_BREAK:
          return `<br>`;

        case NodeType.QUOTE: {
          return `<blockquote class="${getAlignClassName(node)} ${getIndentClassName(
            node,
          )}">${serializedChildren}</blockquote>`;
        }

        case NodeType.UPLOAD: {
          if (node.value?.mimeType?.startsWith('image/')) {
            const alt = node.value.alt || node.value.filename;

            if (node.value?.sizes) {
              const deviceSizes: number[] = Object.values(deviceWidthSizes);
              const imageSizes = Object.entries<ApiBaseImageProperties>(node.value.sizes);
              const srcset = imageSizes
                .filter(([key]) => deviceSizes.includes(Number(key)))
                .map(([key, value]) => `${value?.url} ${key}w`)
                .join(', ');

              return `<img alt="${alt}" loading="eager" decoding="async" sizes="100vw" srcset="${srcset}" src="${imageSizes[0][1].url}">`;
            }

            return `<img src="${node.value.url}" loading="eager" decoding="async" alt="${alt}" />`;
          }

          if (node.value.url)
            return `<a href="${node.value.url}" rel="noreferrer noopener nofollow">${node.value.url}</a>`;

          return null;
        }

        case NodeType.LINK:
          // eslint-disable-next-line no-case-declarations
          const attributes: {
            doc?: unknown;
            linkType?: 'custom' | 'internal';
            newTab?: boolean;
            rel?: string[];
            sponsored?: boolean;
            url?: string;
          } = node.fields;

          if (attributes.linkType === 'custom') {
            return `<a href="${attributes.url}"${
              attributes.newTab ? ' target="_blank" ' : ' '
            }rel="${attributes.rel?.join(' ')}">${serializedChildren}</a>`;
          }

          return `<a href="${getLinkForPage(attributes.doc)}"${
            attributes.newTab ? ' target=_"blank" ' : ' '
          }rel="${attributes.rel?.join(' ')}">${serializedChildren}</a>`;

        case NodeType.LIST: {
          if (node.listType === ListType.NUMBER)
            return `<ol class="${getAlignClassName(node)}">${serializedChildren}</ol>`;
          if (node.listType === ListType.CHECK)
            return `<ul data-list-type="check" class="${getAlignClassName(node)}">${serializedChildren}</ul>`;

          return `<ul class="${getAlignClassName(node)}">${serializedChildren}</ul>`;
        }

        case NodeType.LIST_ITEM: {
          let children = `<span>${serializedChildren}</span>`;

          if (parent?.listType === ListType.CHECK) {
            const checked = node.checked ? ' checked ' : ' ';

            children = `<input type="checkbox" disabled${checked}><span>${serializedChildren}</span>`;
          }

          if (parent?.listType === ListType.BULLET) {
            children = `<span data-type="bullet"></span><span>${serializedChildren}</span>`;
          }

          if (parent?.listType === ListType.NUMBER) {
            children = `<span data-type="number">${node.value}.</span><span>${serializedChildren}</span>`;
          }

          return `<li class="${getAlignClassName(node)} ${getIndentClassName(node)}">${children}</li>`;
        }

        case NodeType.PARAGRAPH: {
          const children = serializedChildren ? serializedChildren : '<br>';

          return `<p class="${getAlignClassName(node)} ${getIndentClassName(node)}">${applyCodeBlockStyle(
            node,
            children,
          )}</p>`;
        }

        case NodeType.HEADING: {
          const tagNumber = Number(node.tag[1]);
          const tag = tagNumber < 6 ? `h${tagNumber + 1}` : 'h6';
          let id = node.children?.[0]?.text ? generateId(node.children[0].text) : '';

          if (id && usedIds.includes(id)) id = `${id}-${usedIds.length + 1}`;
          if (id) usedIds.push(id);

          return `<${tag} ${id ? `id="${id}"` : ''} class="${getAlignClassName(node)} ${getIndentClassName(
            node,
          )}">${serializedChildren}</${tag}>`;
        }

        default:
          return null;
      }
    })
    .filter((node) => node !== null) as string[];
}
