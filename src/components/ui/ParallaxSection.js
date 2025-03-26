'use client';

import { useRef, useEffect } from 'react';

// Composant pour créer un effet de parallaxe sur une section
const ParallaxSection = ({
  children,
  className = '',
  speed = 0.5, // Vitesse de l'effet parallaxe (0 = pas d'effet, 1 = effet complet)
  direction = 'up', // Direction du parallaxe: 'up', 'down', 'left', 'right'
  ...props
}) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    // Fonction pour gérer le défilement
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculer si la section est visible
      if (
        scrollPosition + windowHeight > sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Calculer la position relative de la section dans la fenêtre
        const relativePosition = (scrollPosition + windowHeight - sectionTop) / (windowHeight + sectionHeight);
        
        // Appliquer l'effet de parallaxe en fonction de la direction
        let transform = '';
        const moveAmount = (relativePosition - 0.5) * speed * 100;
        
        switch (direction) {
          case 'up':
            transform = `translateY(${-moveAmount}px)`;
            break;
          case 'down':
            transform = `translateY(${moveAmount}px)`;
            break;
          case 'left':
            transform = `translateX(${-moveAmount}px)`;
            break;
          case 'right':
            transform = `translateX(${moveAmount}px)`;
            break;
          default:
            transform = `translateY(${-moveAmount}px)`;
        }
        
        section.style.transform = transform;
      }
    };
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', handleScroll);
    
    // Appeler une fois pour initialiser
    handleScroll();
    
    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);
  
  return (
    <div
      ref={sectionRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;