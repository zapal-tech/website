import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { ContactFormDto } from 'types/contactForm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as ContactFormDto;

    console.log(process.env.API_URL);

    try {
      await axios.post('/contact-form-leads', data, {
        baseURL: process.env.API_URL,
        headers: { Authorization: process.env.API_KEY },
      });

      return res.status(201).end('Created');
    } catch (error) {
      console.error(error);

      return res.status(500).end('Internal Server Error');
    }
  }

  return res.status(404).end('Not Found');
}
