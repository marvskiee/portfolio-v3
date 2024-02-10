import { useEffect, useState } from 'react';

interface ScrollInfo {
  scrollTop: number,
  scrollHeight: number
  clientHeight: number,
}

const useScrollInfo = () => {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    scrollTop: typeof document !== 'undefined' ? document.documentElement.scrollTop : 0,
    scrollHeight: typeof document !== 'undefined' ? document.documentElement.scrollHeight : 0,
    clientHeight: typeof document !== 'undefined' ? document.documentElement.clientHeight : 0,
  });

  const handleScroll = () => {
    setScrollInfo({
      scrollTop: document.documentElement.scrollTop,
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: document.documentElement.clientHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  return scrollInfo;
};

export default useScrollInfo;
