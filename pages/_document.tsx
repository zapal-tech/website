import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const gTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_CMS_URL} />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_CMS_URL} />

        {process.env.NODE_ENV === 'production' && (
          <>
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
          </>
        )}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
