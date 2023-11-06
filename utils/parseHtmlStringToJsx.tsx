import parse, { DOMNode, Element, HTMLReactParserOptions, domToReact } from 'html-react-parser';
import NextImage from 'next/image';
import { createPngDataUri } from 'unlazy/blurhash';

import { ApiImage } from 'types/api';

import { Card } from 'components';
import { Carousel } from 'components/Carousel/Carousel';
import { Image } from 'components/Image/Image';

import { imageLoader } from './imageLoader';
import { fullWidthImageSize } from './imageSizes';

export const parseHtmlStringToJsx = (content: string | null) => {
  if (!content) return null;

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.attribs.class?.includes('media--image') && domNode.attribs['data-media']) {
          const image = JSON.parse(domNode.attribs['data-media']) as ApiImage | undefined;

          return (
            <Card className={domNode.attribs.class}>
              <NextImage
                fill
                sizes={fullWidthImageSize}
                loader={(loaderProps) => imageLoader({ ...loaderProps, image })}
                src={image?.url || ''}
                alt={image?.alt || ''}
                placeholder={image?.blurhash ? 'blur' : 'empty'}
                blurDataURL={image?.blurhash ? createPngDataUri(image.blurhash) : undefined}
              />
            </Card>
          );
        }

        if (domNode.attribs.class?.includes('slide-image') && domNode.attribs['data-image']) {
          const image = JSON.parse(domNode.attribs['data-image']) as ApiImage | undefined;

          return <Image className={domNode.attribs.class} image={image} sizes={fullWidthImageSize} />;
        }

        if (domNode.attribs?.class?.includes('slider')) {
          return (
            <Carousel
              autoPlay={domNode.attribs['data-autoplay'] === 'true'}
              infiniteLoop={domNode.attribs['data-autoplay'] === 'true'}
              animationHandler={domNode.attribs['data-animation'] as 'fade' | 'slide'}
              emulateTouch={domNode.attribs['data-animation'] !== 'fade'}
              stopOnHover={domNode.attribs['data-animation'] !== 'fade'}
            >
              {domToReact(domNode.children as DOMNode[], options) as JSX.Element[]}
            </Carousel>
          );
        }
      }
    },
  };

  return parse(content, options);
};
