import { GetServerSideProps } from 'next';
import { getServerSideSitemapIndexLegacy } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getServerSideSitemapIndexLegacy(ctx, [process.env.NEXT_PUBLIC_SITE_URL + '/blog-sitemap.xml']);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapIndex() {}
