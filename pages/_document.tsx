import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import companyAddressData from 'public/json-ld/address.json';
import companyData from 'public/json-ld/company-data.json';

const gTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="company-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companyData) }}
        />
        <Script
          id="company-address-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companyAddressData) }}
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gTagId}`}
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gTagId}');`}
        </Script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
