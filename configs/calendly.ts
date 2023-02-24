import { Props } from 'react-calendly/typings/components/InlineWidget/InlineWidget';

import colors from 'styles/colors.module.scss';

export const calendlyInlineConfig: Props = {
  url: process.env.NEXT_PUBLIC_CALENDLY_URL as string,
  pageSettings: {
    backgroundColor: colors.jetBlack,
    textColor: colors.white,
    primaryColor: colors.oriolesOrange,
    hideGdprBanner: true,
  },
};
