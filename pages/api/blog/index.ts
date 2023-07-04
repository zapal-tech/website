import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  const data = fetch('localhost:1337/api/articles', { method: 'GET' }).then((res) => {
    const data = res.json();

    return data;
  });

  return res.json(data);
});

export default handler;
