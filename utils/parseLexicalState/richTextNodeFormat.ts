// Reconciling
// export const NO_DIRTY_NODES = 0;
// export const HAS_DIRTY_NODES = 1;
// export const FULL_RECONCILE = 2;
import { SerializedLexicalNode } from './types';

// Text node modes
// export const IS_NORMAL = 0;
// export const IS_TOKEN = 1;
// export const IS_SEGMENTED = 2;
// IS_INERT = 3

export enum NodeType {
  PARAGRAPH = 'paragraph',
  TEXT = 'text',
  HEADING = 'heading',
  UPLOAD = 'upload',
  QUOTE = 'quote',
  LINK = 'link',
  LINE_BREAK = 'linebreak',
  LIST = 'list',
  LIST_ITEM = 'listitem',
}

export enum ListType {
  CHECK = 'check',
  BULLET = 'bullet',
  NUMBER = 'number',
}

// Text node formatting
export enum TextNodeFormat {
  BOLD = 1,
  ITALIC = 1 << 1,
  STRIKETHROUGH = 1 << 2,
  UNDERLINE = 1 << 3,
  CODE = 1 << 4,
  SUBSCRIPT = 1 << 5,
  SUPERSCRIPT = 1 << 6,
  // HIGHLIGHT = 1 << 7,
}

// export enum TextNodeAlignment {
//   LEFT = 1,
//   CENTER = 2,
//   RIGHT = 3,
//   JUSTIFY = 4,
//   // START = 5,
//   // END = 6,
// }

export enum NodeAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
  START = 'start',
  END = 'end',
}

export type TextFormatType = 'bold' | 'underline' | 'strikethrough' | 'italic' | 'code' | 'subscript' | 'superscript';

export const textNodeFormattingMap: Record<TextNodeFormat, string> = {
  [TextNodeFormat.BOLD]: 'strong',
  [TextNodeFormat.ITALIC]: 'em',
  [TextNodeFormat.STRIKETHROUGH]: 's',
  [TextNodeFormat.UNDERLINE]: 'u',
  [TextNodeFormat.CODE]: 'code',
  [TextNodeFormat.SUBSCRIPT]: 'sub',
  [TextNodeFormat.SUPERSCRIPT]: 'sup',
};

export const applyTextFormatting = (text: string, format: number): string => {
  let formattedText = text;

  const sortedOptions = Object.keys(textNodeFormattingMap)
    .map(Number)
    .sort((a, b) => b - a);

  for (const option of sortedOptions) {
    if (format & option) {
      const tag = textNodeFormattingMap[option as TextNodeFormat];

      formattedText = `<${tag}>${formattedText}</${tag}>`;
      format &= ~option;
    }
  }

  return formattedText;
};

export const getAlignClassName = (node: SerializedLexicalNode): string => {
  const align = node.format as any as NodeAlignment;

  return align ? `align-${align}` : '';
};

export const getIndentClassName = (node: SerializedLexicalNode): string => {
  const indent = node.indent;

  if (!indent || typeof indent !== 'number') return '';

  return `indent indent-level-${indent}`;
};

export const applyCodeBlockStyle = (node: SerializedLexicalNode, serializedChildren: string): string => {
  const isCodeBlock = node.children?.length
    ? node?.children?.every(
        (child) =>
          child.type === NodeType.LINE_BREAK ||
          (child.format >= TextNodeFormat.CODE && child.format < TextNodeFormat.SUBSCRIPT),
      )
    : false;

  return isCodeBlock ? `<pre>${serializedChildren}</pre>` : serializedChildren;
};
