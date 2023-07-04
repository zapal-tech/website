import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { ContactFormState } from 'types/contactForm';

import { addContact } from 'services/api';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
  const data = req.body as ContactFormState;

  try {
    await addContact(data);

    return res.status(201).end('Created');
  } catch (error) {
    return res.status(500).end('Internal Server Error');
  }
});

export default handler;
