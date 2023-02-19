import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  children: React.ReactNode;
  selector: string;
};

export const Portal: React.FC<PortalProps> = ({ children, selector }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);

    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
