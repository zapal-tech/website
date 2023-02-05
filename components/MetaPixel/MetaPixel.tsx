/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const pageView = () => {
  window.fbq('track', 'PageView');
};

const handleRouteChange = () => {
  pageView();
};

export const MetaPixel = () => {
  const router = useRouter();

  useEffect(() => {
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${META_PIXEL_ID});
        fbq('track', 'PageView');
      `}
      </Script>

      <noscript>
        <img
          height={1}
          width={1}
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
};
