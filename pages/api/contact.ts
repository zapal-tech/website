import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { ContactFormDto } from 'types/contactForm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as ContactFormDto;

    try {
      await axios.post('/contact-form-leads', data, {
        baseURL: 'https://cms.zapal.tech/api',
        headers: { Authorization: process.env.API_KEY },
      });

      return res.status(201).end('Created');
    } catch (error) {
      return res.status(500).end('Internal Server Error');
    }
  }

  return res.status(404).end('Not Found');
}
