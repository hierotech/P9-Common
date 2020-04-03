import {useEffect, useState} from 'react';

import {getWindowSize, measureElement} from './frontend';

const ELEMENT_MAP = new Map();
const HANDLERS = new Set();

window.addEventListener('resize', () => {
  const size = getWindowSize();

  HANDLERS.forEach(setSize => {
    setSize(size);
  });

  ELEMENT_MAP.forEach((setSize, elementRef) => {
    if (!elementRef.current) {
      return;
    }

    setSize(measureElement(elementRef.current));
  });
});

export const useCurrentDate = (updateInterval = 1000) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, updateInterval);

    return () => clearInterval(timer);
  }, [updateInterval]);

  return currentDate;
};

export const useElementSize = (elementRef, defaultSize = {width: 0, height: 0}) => {
  const [size, setSize] = useState(defaultSize);

  useEffect(() => {
    ELEMENT_MAP.set(elementRef, setSize);

    if (elementRef.current) {
      setSize(measureElement(elementRef.current));
    }

    return () => {
      ELEMENT_MAP.delete(elementRef);
    };
  }, [elementRef]);

  return [size];
};

export const useWindowSize = () => {
  const [size, setSize] = useState(getWindowSize());

  useEffect(() => {
    HANDLERS.add(setSize);

    return () => {
      HANDLERS.delete(setSize);
    };
  }, []);

  return [size];
};
