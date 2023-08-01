import { ApiResponse } from 'types/api';

type SlugPathType = { params: { slug: string }; locale?: string };

export const getLocalizedSlugPaths = async <T extends { attributes: { slug: string } }>(
  getEntities: (locale?: string) => Promise<ApiResponse<T[]>>,
  locales: string[],
  defaultLocale?: string,
): Promise<SlugPathType[]> => {
  const entities: Record<string, T[]> = {};

  for (const locale of locales) {
    const data = await getEntities(locale)
      .then((res) => res.data)
      .catch(() => undefined);

    if (data) entities[locale] = data;
  }

  const paths: SlugPathType[] = Object.entries(entities).reduce<SlugPathType[]>((acc, [locale, entities]) => {
    const result = [...acc];

    const localePaths = entities.map(({ attributes: { slug } }) => ({
      params: { slug },
      locale,
    }));

    if (locale === defaultLocale) {
      const defaultLocalePaths = localePaths.map((path) => ({ ...path, locale: undefined }));

      result.push(...defaultLocalePaths, ...localePaths);
    } else result.push(...localePaths);

    return result;
  }, []);

  return paths;
};
