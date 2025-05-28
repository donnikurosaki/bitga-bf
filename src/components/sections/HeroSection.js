'use client';

import Image from 'next/image';
// import { motion } from 'framer-motion'; // Removed duplicate motion import
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react'; // Moved to top

// Helper hook for mouse parallax (can be moved to a separate file if used elsewhere)
const useMouseParallax = () => {
  const x = useMotionValue(0.5); // Normalized 0 to 1
  const y = useMotionValue(0.5); // Normalized 0 to 1

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientWidth, clientHeight } = document.documentElement;
      // Ensure clientWidth and clientHeight are not zero to avoid division by zero
      if (clientWidth > 0 && clientHeight > 0) {
        x.set(event.clientX / clientWidth);
        y.set(event.clientY / clientHeight);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return { x, y };
};

// ParallaxWrapper component
const ParallaxWrapper = ({ children, strength = 10 }) => {
  const { x: mouseX, y: mouseY } = useMouseParallax();
  const dx = useTransform(mouseX, (value) => (value - 0.5) * strength * 2);
  const dy = useTransform(mouseY, (value) => (value - 0.5) * strength * 2);
  // Ensure children is a single motion component or a structure that motion.div can animate
  return <motion.div style={{ x: dx, y: dy }}>{children}</motion.div>; 
};


// Composant pour les formes géométriques décoratives
const GeometricShape = ({ 
  className, 
  initialColor, 
  // hoverColor, // Removed hoverColor prop
  size, 
  initialPosition, 
  animationType = 'float', // 'float', 'float-reverse', or 'none'
  parallaxStrength = 20 // How much it moves with mouse
}) => {
  const { x: mouseX, y: mouseY } = useMouseParallax();

  const variants = {
    float: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    'float-reverse': {
      y: [0, 10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    none: {}
  };

  const dx = useTransform(mouseX, (value) => (value - 0.5) * parallaxStrength * 2);
  const dy = useTransform(mouseY, (value) => (value - 0.5) * parallaxStrength * 2);

  return (
    <motion.div 
      className={`absolute ${size} ${initialColor} rounded-full opacity-70 ${className}`}
      style={{ ...initialPosition, x: dx, y: dy }}
      variants={variants}
      animate={animationType}
      whileHover={{ scale: 1.15, opacity: 0.85 }} // Simplified hover effect
    />
  );
};


const HeroSection = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2, // Initial delay before first child animates
      },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section 
      className="pt-32 pb-20 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 relative"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content with new stagger animations */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              variants={textChildVariants}
            >
              Gérez votre boutique <span className="text-primary-600 dark:text-primary-400 relative inline-block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">à distance</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              variants={textChildVariants}
            >
              Bitga vous permet de suivre votre stock, gérer vos vendeurs et générer des factures, même sans connexion internet.
            </motion.p>
            {/* Buttons remain with their individual AnimatedElement for entry + motion.div for hover/tap */}
            {/* Adjusted delay for buttons: text container delayChildren (0.2) + last text child (0.2) + own delay */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <AnimatedElement animation="bounce" delay={0.2 + 0.2 + 0.4}> 
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant='vibrant' size="lg" className="relative overflow-hidden group">
                    <span className="relative z-10">Commencer gratuitement</span>
                    <span className="absolute inset-0 bg-white/20 animate-shine group-hover:bg-white/30 transition-all duration-500"></span>
                  </Button>
                </motion.div>
              </AnimatedElement>
              <AnimatedElement animation="fade-in" delay={0.2 + 0.2 + 0.6}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="gradient" size="lg">Voir la démo</Button>
                </motion.div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
          
          <AnimatedElement 
            animation="slide-right" 
            delay={0.4} 
            className="lg:w-1/2 relative" // Ensure this parent is relative for absolute positioning of shapes
          >
            <motion.div className="relative w-full h-[400px]">
              <ParallaxWrapper strength={15}>
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full"
                  variants={{ float: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } } }}
                  animate="float"
                >
                  <Image 
                    src="/hero-illustration.svg" 
                    alt="Gestion de boutique à distance" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </ParallaxWrapper>
              
              {/* Formes géométriques décoratives - Using GeometricShape component with built-in parallax */}
              <GeometricShape 
                initialPosition={{ bottom: '-2.5rem', right: '-2.5rem' }} 
                size="w-32 h-32" 
                initialColor="bg-accent-400" 
                // hoverColor prop removed
                animationType="float-reverse"
                parallaxStrength={30}
              />
              <GeometricShape 
                initialPosition={{ top: '-2.5rem', left: '-2.5rem' }} 
                size="w-24 h-24" 
                initialColor="bg-secondary-400" 
                // hoverColor prop removed
                animationType="float"
                parallaxStrength={20}
              />
              <GeometricShape 
                initialPosition={{ top: '5rem', right: '5rem' }} 
                size="w-16 h-16" 
                initialColor="bg-primary-300" 
                // hoverColor prop removed
                animationType="float"
                parallaxStrength={15}
              />
              <GeometricShape 
                initialPosition={{ bottom: '5rem', left: '5rem' }} 
                size="w-20 h-20" 
                initialColor="bg-accent-300" 
                // hoverColor prop removed
                animationType="float-reverse"
                parallaxStrength={25}
              />
              
              {/* Motifs géométriques - these are not rounded, so GeometricShape might need adjustment or use raw motion.div */}
              <motion.div 
                className="absolute top-0 right-0 w-16 h-16 bg-accent-500 transform rotate-45 opacity-40"
                whileHover={{ scale: 1.1, opacity: 0.6 }}
                // style={{ x: dxMotif1, y: dyMotif1 }} // Add parallax if desired
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-16 h-16 bg-primary-500 transform rotate-45 opacity-40"
                whileHover={{ scale: 1.1, opacity: 0.6 }}
                // style={{ x: dxMotif2, y: dyMotif2 }} // Add parallax if desired
              />
              <motion.div 
                className="absolute top-40 left-10 w-8 h-8 bg-secondary-500 rounded-full opacity-40"
                whileHover={{ scale: 1.2, opacity: 0.7 }}
                // style={{ x: dxMotif3, y: dyMotif3 }} // Add parallax if desired
              />
            </motion.div>
          </AnimatedElement>
        </div>
      </div>
      {/* Removed extra closing div here */}
    </motion.section>
  );
};

export default HeroSection;