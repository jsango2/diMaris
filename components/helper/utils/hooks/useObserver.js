import React from 'react';

export const useObserver = (element, options) => {
  const [isEntryIntersecting, setIsEntryIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsEntryIntersecting(entry.isIntersecting), options);

    element.current && observer.observe(element.current);

    return () => observer.disconnect();
  }, [element, options]);

  return isEntryIntersecting;
};
