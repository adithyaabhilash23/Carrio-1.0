import React, { useRef, useState, useEffect } from 'react';
import { useCountUp } from '../../hooks/useCountUp';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  target,
  suffix = '',
  duration = 2000,
  className = '',
}) => {
  const [triggered, setTriggered] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const count = useCountUp(target, duration, triggered);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={elementRef} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
