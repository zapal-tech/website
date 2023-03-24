import { useContext } from 'react';

import { GlobalContext, GlobalContextProps } from 'contexts/GlobalContext';

export const useGlobalContext = <PageProps = Record<string, any>>(): GlobalContextProps<PageProps> =>
  // @ts-expect-error - Cannot infer type of PageProps
  useContext<GlobalContextProps<PageProps>>(GlobalContext);
