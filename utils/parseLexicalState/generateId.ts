import slugifyText from 'slugify';
import transliterateUkToEn from 'ua-en-translit';

const slugify = (text: string): string => slugifyText(transliterateUkToEn(text), { locale: 'en', lower: true });

export const generateId = (text: string) => slugify(text);
