import type { SerializedEditorState } from 'lexical';

import { parseLexicalRichText } from './richTextParser';
import { SerializedLexicalNode } from './types';

export const parseLexicalState = async (content: SerializedEditorState): Promise<string> => {
  const html = parseLexicalRichText(content.root.children as SerializedLexicalNode[]);

  return html.join('');
};
