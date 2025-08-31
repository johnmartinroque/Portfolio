import { useEffect, useRef, useState } from "react";

export default function useInView(options, animationDuration = 1000) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setShouldRender(true);
      } else {
        setIsVisible(false);
        // Delay hiding until exit animation finishes
        setTimeout(() => setShouldRender(false), animationDuration);
      }
    }, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options, animationDuration]);

  return [ref, isVisible, shouldRender];
}
