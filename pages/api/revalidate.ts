import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import {
  getAllRevalidationPages,
  getBlogRevalidationPages,
  getMainRevalidationPages,
  getProjectsRevalidationPages,
} from 'utils/revalidationPages';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
  const apiTokenHeader = req.headers['token'] as string | string[] | undefined;
  const urlHeader = req.headers['page-url'] as string | string[] | undefined;
  const pageTypeHeader = req.headers['page-type'] as 'main' | 'blog' | 'projects' | 'all' | string[] | undefined;

  const isValidApiTokenHeader =
    apiTokenHeader && typeof apiTokenHeader === 'string' && apiTokenHeader === process.env.REVALIDATE_API_TOKEN;
  const isValidUrlHeader =
    urlHeader && typeof urlHeader === 'string' && urlHeader.startsWith('/') && !urlHeader.match(/[\s,.]/);
  const isValidPageTypeHeader = pageTypeHeader && typeof pageTypeHeader === 'string';

  const revalidationUrls: string[] = [];

  if (!isValidApiTokenHeader) return res.status(401).send('Invalid token');

  if (!urlHeader && !pageTypeHeader) return res.status(400).send("No 'Page-Url' or 'Page-Type' header");
  if (urlHeader && pageTypeHeader) return res.status(400).send("Can't have both 'Page-Url' and 'Page-Type' header");

  if (urlHeader && !isValidUrlHeader) return res.status(400).send("Invalid 'Page-Url' header");
  if (pageTypeHeader && !isValidPageTypeHeader) return res.status(400).send("Invalid 'Page-Type' header");

  if (isValidPageTypeHeader && !isValidUrlHeader)
    switch (pageTypeHeader) {
      case 'all':
        revalidationUrls.push(...(await getAllRevalidationPages()));
        break;

      case 'main':
        revalidationUrls.push(...(await getMainRevalidationPages()));
        break;

      case 'blog':
        revalidationUrls.push(...(await getBlogRevalidationPages()));
        break;

      case 'projects':
        revalidationUrls.push(...(await getProjectsRevalidationPages()));
        break;
    }
  else if (isValidUrlHeader && !isValidPageTypeHeader) revalidationUrls.push(urlHeader);

  if (!revalidationUrls.length) return res.status(400).send('No urls to revalidate');

  try {
    for (const url of revalidationUrls) {
      await res.revalidate(url);
    }

    return res.status(200).send('Revalidation request sent');
  } catch (error) {
    return res.status(500).send('Error sending revalidation request');
  }
});

export default handler;
