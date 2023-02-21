import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const projectsMock = [
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

const handler = nc<NextApiRequest, NextApiResponse>({
  onNoMatch: (req, res) => res.status(405).end('Method not allowed'),
}).get(async (req, res) => {
  return res.status(200).json(projectsMock);
});

export default handler;
