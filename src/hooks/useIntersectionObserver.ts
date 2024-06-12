import { useEffect, useRef } from "react";

type TCallback = (entries: IntersectionObserverEntry[]) => void;

interface IObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  thresshold?: number | number[];
}

export const useIntersectionObserver = (
  callback: TCallback,
  options?: IObserverOptions
) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  });

  return targetRef;
};
