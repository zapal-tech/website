import { Props } from 'react-calendly/typings/components/InlineWidget/InlineWidget';

import colors from 'styles/colors.module.scss';

export const calendlyTitle = 'Zapal | Calendly';

export const getCalendlyInlineConfig = (locale?: string): Props => ({
  iframeTitle: calendlyTitle,
  url:
    locale === 'uk' ? process.env.NEXT_PUBLIC_CALENDLY_URL + '-uk' : (process.env.NEXT_PUBLIC_CALENDLY_URL as string),
  pageSettings: {
    backgroundColor: colors.black,
    textColor: colors.white,
    primaryColor: colors.oriolesOrange,
    hideGdprBanner: true,
  },
});
