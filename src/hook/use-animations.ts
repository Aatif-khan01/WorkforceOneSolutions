import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    ref,
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const fadeIn = {
    ref,
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.6 }
  };

  const scaleIn = {
    ref,
    initial: { scale: 0.8, opacity: 0 },
    animate: isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 },
    transition: { duration: 0.6 }
  };

  const slideInLeft = {
    ref,
    initial: { x: -100, opacity: 0 },
    animate: isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    ref,
    initial: { x: 100, opacity: 0 },
    animate: isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 },
    transition: { duration: 0.6 }
  };

  return {
    fadeInUp,
    fadeIn,
    scaleIn,
    slideInLeft,
    slideInRight
  };
};