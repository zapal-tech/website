import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { ProjectPreview } from 'types/projects';

import { HomePage } from 'views/HomePage/HomePage';

import { globalNamespaces, Namespace } from 'i18n';

const projects: ProjectPreview[] = [
  {
    name: 'KORTIK',
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fkortik.jpg?alt=media&token=54ef2f60-8f85-4920-959a-0316febd0e47',
  },
  {
    name: 'SMTH PRODUCTION',
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fsmth.jpg?alt=media&token=cc9dd190-bf51-4949-95b3-215a2aaa3322',
  },
  {
    name: 'IDONTKO',
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fidontko.jpg?alt=media&token=4234b285-1598-43a6-97a4-c82dcc726abe',
  },
  {
    name: 'SAMESH',
    photoUrl:
      'https://firebasestorage.googleapis.com/v0/b/astute-impulse-377623.appspot.com/o/projects%2Fsamesh.jpg?alt=media&token=555c3f28-454f-42a5-89ab-e26113c5163f',
  },
];

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [...globalNamespaces, Namespace.Home])),
    projects,
  },
  revalidate: 10,
});

export default function Home(props: any) {
  const { t } = useTranslation(Namespace.Titles);

  return (
    <>
      <NextSeo title={t('home') || undefined} />
      <HomePage {...props} />
    </>
  );
}
