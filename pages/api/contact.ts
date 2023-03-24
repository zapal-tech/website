import { NextApiRequest, NextApiResponse } from 'next';

import { ContactFormState } from 'types/contactForm';

import { addContact } from 'services/firestore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as ContactFormState;

    try {
      await addContact(data);

      return res.status(201).end('Created');
    } catch (error) {
      return res.status(500).end('Internal Server Error');
    }
  }

  return res.status(405).end('Method not allowed');
}
