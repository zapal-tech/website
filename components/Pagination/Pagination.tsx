import clsx, { ClassValue } from 'clsx';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import queryString from 'querystring';

import { ARTICLES_PER_PAGE } from 'utils/constants';
import { getPageNumbers } from 'utils/getPaginationPageNumbers';

import { ArrowButton } from 'components/ArrowButton/ArrowButton';

import { PaginationItem } from './components/PaginationItem';
import { PaginationLink } from './components/PaginationLink';

import styles from './Pagination.module.scss';

type PaginationProps = {
  className?: ClassValue | ClassValue[];
  total: number; // The total number of pages
};

export const Pagination: React.FC<PaginationProps> = ({ className, total = 0 }) => {
  const router = useRouter();

  const currentPage = Number(router.query.page || 1);
  const pageSize = Number(router.query.size || ARTICLES_PER_PAGE);
  const isLastPage = currentPage * pageSize >= total;
  const pageNumbers = getPageNumbers({ currentPage, pageSize, total });

  const path = router.pathname;

  const url = (page: number | string) =>
    '?' +
    queryString.stringify({
      ...router.query,
      page,
    });

  return (
    <nav className={clsx(styles.Pagination, className)} aria-label="pagination">
      <Head>
        {currentPage !== 1 ? <link rel="prev" href={`${path}${url(currentPage - 1)}`} /> : null}

        {!isLastPage ? <link rel="next" href={`${path}${url(currentPage + 1)}`} /> : null}
      </Head>

      <ul className={styles.Pagination__List}>
        <PaginationItem>
          {currentPage !== 1 ? (
            <NextLink href={url(currentPage - 1)} prefetch={false} passHref legacyBehavior>
              <PaginationLink>
                <ArrowButton direction="left" />
              </PaginationLink>
            </NextLink>
          ) : (
            <PaginationLink disabled>
              <ArrowButton direction="left" disabled />
            </PaginationLink>
          )}
        </PaginationItem>

        {pageNumbers.map((pageNumber, i) =>
          pageNumber === '...' ? (
            <PaginationItem key={`${pageNumber}${i}`}>
              <PaginationLink disabled label="ellipsis">
                &hellip;
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={pageNumber}>
              {pageNumber === currentPage ? (
                <PaginationLink current>{pageNumber}</PaginationLink>
              ) : (
                <NextLink href={url(pageNumber)} prefetch={false} passHref legacyBehavior>
                  <PaginationLink label={`Page ${pageNumber}`}>{pageNumber}</PaginationLink>
                </NextLink>
              )}
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          {!isLastPage ? (
            <NextLink href={url(currentPage + 1)} prefetch={false} passHref legacyBehavior>
              <PaginationLink>
                <ArrowButton direction="right" />
              </PaginationLink>
            </NextLink>
          ) : (
            <PaginationLink disabled>
              <ArrowButton direction="right" disabled />
            </PaginationLink>
          )}
        </PaginationItem>
      </ul>
    </nav>
  );
};
