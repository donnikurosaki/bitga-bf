'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

// Composant pour les formes géométriques décoratives
const GeometricShape = ({ className, color, size, animation }) => {
  return (
    <div 
      className={`absolute ${size} ${color} rounded-full opacity-70 ${animation} ${className}`}
    />
  );
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <AnimatedElement 
            animation="slide-left" 
            delay={0.2} 
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Gérez votre boutique <span className="text-primary-600 dark:text-primary-400 relative inline-block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">à distance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Bitga vous permet de suivre votre stock, gérer vos vendeurs et générer des factures, même sans connexion internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <AnimatedElement animation="bounce" delay={0.8}>
                <Button variant='vibrant' size="lg" className="relative overflow-hidden group">
                  <span className="relative z-10">Commencer gratuitement</span>
                  <span className="absolute inset-0 bg-white/20 animate-shine group-hover:bg-white/30 transition-all duration-500"></span>
                </Button>
              </AnimatedElement>
              <AnimatedElement animation="fade-in" delay={1}>
                <Button variant="gradient" size="lg">Voir la démo</Button>
              </AnimatedElement>
            </div>
          </AnimatedElement>
          
          <AnimatedElement 
            animation="slide-right" 
            delay={0.4} 
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full h-[400px]">
              <div className="absolute top-0 left-0 w-full h-full animate-float">
                <Image 
                  src="/hero-illustration.svg" 
                  alt="Gestion de boutique à distance" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              {/* Formes géométriques décoratives */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-400 rounded-full opacity-70 animate-float-reverse"></div>
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary-400 rounded-full opacity-70 animate-float"></div>
              <div className="absolute top-20 right-20 w-16 h-16 bg-primary-300 rounded-full opacity-60 animate-float"></div>
              <div className="absolute bottom-20 left-20 w-20 h-20 bg-accent-300 rounded-full opacity-60 animate-float-reverse"></div>
              
              {/* Motifs géométriques inspirés des marchés */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent-500 transform rotate-45 opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary-500 transform rotate-45 opacity-40"></div>
              <div className="absolute top-40 left-10 w-8 h-8 bg-secondary-500 rounded-full opacity-40"></div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;