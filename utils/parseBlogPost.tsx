import parse from 'html-react-parser';

export const parseBlogPostContent = (content: string | null) => {
  if (!content) return null;

  const preparedContent = `<div>${content}</div>`;

  return parse(preparedContent);
};
