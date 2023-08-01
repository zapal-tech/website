import hljs from 'highlight.js';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      const { name, children } = domNode;
      if (name === 'code') {
        const highlightedCode = hljs.highlightAuto((children[0] as unknown as Text).data);

        return <code>{parse(highlightedCode.value)}</code>;
      }
    }
  },
};

export const parseArticleContent = (content: string) => {
  if (!content) return null;

  return parse(content, options);
};
