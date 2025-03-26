'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Création du contexte d'animation
const AnimationContext = createContext({});

// Hook personnalisé pour utiliser le contexte d'animation
export const useAnimation = () => useContext(AnimationContext);

// Fournisseur d'animation qui enveloppe l'application
export const AnimationProvider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Valeurs à partager dans le contexte
  const animationValues = {
    defaultDuration: 0.5,
    defaultEase: [0.6, 0.01, -0.05, 0.95],
  };

  if (!isMounted) {
    return null;
  }

  return (
    <AnimationContext.Provider value={animationValues}>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;