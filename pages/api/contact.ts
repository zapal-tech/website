import { NextApiRequest, NextApiResponse } from 'next';

import { ContactFormDto } from 'types/contactForm';

import { addContact } from 'services/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as ContactFormDto;

    try {
      await addContact(data);

      return res.status(201).end('Created');
    } catch (error) {
      return res.status(500).end('Internal Server Error');
    }
  }

  return res.status(404).end('Not Found');
}
