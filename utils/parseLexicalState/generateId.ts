import slugifyText from 'slugify';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import transliterateUkToEn from 'ua-en-translit';

const slugify = (text: string): string => slugifyText(transliterateUkToEn(text), { locale: 'en', lower: true });

export const generateId = (text: string) => slugify(text);
