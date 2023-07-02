import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean | null {
  const [matches, setMatches] = useState<null | boolean>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const listener = () => setMatches(!!mediaQueryList.matches);

    listener();

    mediaQueryList.addEventListener('change', listener);

    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
