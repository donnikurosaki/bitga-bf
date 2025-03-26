'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Composant réutilisable pour animer n'importe quel élément
const AnimatedElement = ({
  children,
  animation = 'fade-in', // Options: fade-in, slide-up, slide-down, slide-left, slide-right, zoom-in, bounce
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  // Définir les animations disponibles
  const animations = {
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } }
    },
    'slide-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } }
    },
    'slide-down': {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } }
    },
    'slide-left': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } }
    },
    'slide-right': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } }
    },
    'zoom-in': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } }
    },
    'bounce': {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          type: 'spring', 
          stiffness: 300, 
          damping: 10, 
          delay 
        } 
      }
    },
    'rotate': {
      hidden: { opacity: 0, rotate: -10 },
      visible: { 
        opacity: 1, 
        rotate: 0, 
        transition: { 
          duration, 
          delay 
        } 
      }
    },
    'stagger': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };

  const selectedAnimation = animations[animation] || animations['fade-in'];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;

// Composant pour animer des éléments enfants avec un effet de cascade
export const StaggerContainer = ({ 
  children, 
  delay = 0.1, // Délai entre chaque élément enfant
  staggerDelay = 0.1, // Délai initial
  className = '',
  ...props 
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};