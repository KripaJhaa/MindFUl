import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldAnimate = (elementY: number) => {
    return scrollY > elementY - window.innerHeight / 1.2;
  };

  return { scrollY, shouldAnimate };
}
