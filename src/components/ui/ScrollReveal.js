'use client';

import { useEffect, useRef } from 'react';

// Composant qui révèle son contenu lors du défilement
const ScrollReveal = ({
  children,
  className = '',
  threshold = 0.1, // Pourcentage de visibilité requis pour déclencher l'animation
  rootMargin = '0px', // Marge autour de la zone de déclenchement
  animationClass = 'animate-fade-in', // Classe d'animation par défaut
  delay = 0, // Délai en ms avant le déclenchement de l'animation
  ...props
}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    // Configuration de l'observateur d'intersection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ajouter un délai si nécessaire
            setTimeout(() => {
              currentRef.classList.add(animationClass);
            }, delay);
            
            // Arrêter d'observer une fois l'animation déclenchée
            observer.unobserve(currentRef);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    // Commencer à observer l'élément
    observer.observe(currentRef);
    
    // Nettoyer l'observateur lors du démontage du composant
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass, delay, rootMargin, threshold]);
  
  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;