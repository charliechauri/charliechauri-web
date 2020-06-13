/**
 * Create ellipsis: initially return one dot then add another
 * one every second until ellipsis are completed and cycle back
 */
import { useState, useEffect } from 'react';

const MAX_COUNT = 3;
const INITIAL_COUNT = 1;
const SYMBOL = '.';

const getEllipsis = (count: number): string => {
  let [ellipsis, index] = ['', 0];

  while (index <= count - 1) {
    ellipsis += SYMBOL;
    index += 1;
  }

  return ellipsis;
};

const useEllipsis = () => {
  const INTERVAL = 1000;
  const [ellipsisCount, setEllipsis] = useState<number>(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ellipsisCount === MAX_COUNT) {
        setEllipsis(INITIAL_COUNT);
      } else {
        setEllipsis(ellipsisCount + INITIAL_COUNT);
      }
    }, INTERVAL);

    return () => clearTimeout(timeout);
  });

  return getEllipsis(ellipsisCount);
};

export default useEllipsis;
