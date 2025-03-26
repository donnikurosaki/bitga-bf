'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import FeatureCard from '../ui/FeatureCard';
import AnimatedElement, { StaggerContainer } from '../ui/AnimatedElement';
import ParallaxSection from '../ui/ParallaxSection';

// Composant pour les formes géométriques décoratives
const GeometricShape = ({ className, color, size, animation }) => {
  return (
    <div 
      className={`absolute ${size} ${color} rounded-full opacity-70 ${animation} ${className}`}
    />
  );
};

// Composant pour les motifs géométriques carrés
const GeometricSquare = ({ className, color, size, rotation }) => {
  return (
    <div 
      className={`absolute ${size} ${color} ${rotation} opacity-40 ${className}`}
    />
  );
};

const FeaturesSection = () => {
  return (
    <Section id="features" className="bg-gradient-to-br from-white via-primary-50 to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Formes géométriques décoratives */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-300 rounded-full opacity-30 animate-float-reverse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-400 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-accent-400 transform rotate-45 opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-12 h-12 bg-primary-500 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-0 w-10 h-10 bg-secondary-500 rounded-full opacity-20"></div>
        <AnimatedElement animation="slide-up" delay={0.1}>
          <SectionTitle 
            title={<span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Fonctionnalités principales</span>} 
            subtitle="Tout ce dont vous avez besoin pour gérer efficacement votre boutique"
            centered
          />
        </AnimatedElement>
        
        <StaggerContainer delay={0.2} staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard 
            icon={
              <div className="relative w-8 h-8">
                <Image src="/inventory-management.svg" alt="Gestion de stock" fill className="object-contain" />
              </div>
            }
            title="Gestion de stock" 
            description="Suivez facilement vos entrées et sorties de stock en temps réel. Recevez des alertes lorsque les niveaux sont bas."
            className="hover:scale-105 transition-transform duration-300"
          />
          <FeatureCard 
            icon={
              <div className="relative w-8 h-8">
                <Image src="/staff-management.svg" alt="Gestion des vendeurs" fill className="object-contain" />
              </div>
            }
            title="Gestion des vendeurs" 
            description="Attribuez des permissions spécifiques à chaque vendeur et suivez leurs performances de vente."
            className="hover:scale-105 transition-transform duration-300"
          />
          <FeatureCard 
            icon={
              <div className="relative w-8 h-8">
                <Image src="/offline-invoice.svg" alt="Mode hors ligne" fill className="object-contain" />
              </div>
            }
            title="Mode hors ligne" 
            description="Continuez à vendre même sans connexion internet. Toutes les données se synchronisent automatiquement."
            className="hover:scale-105 transition-transform duration-300"
          />
          <FeatureCard 
            icon={
              <div className="relative w-10 h-10 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            }
            title="Rapports détaillés" 
            description="Obtenez des insights précieux sur vos ventes, votre stock et les performances de vos vendeurs."
            className="hover:scale-105 transition-transform duration-300"
          />
          <FeatureCard 
            icon={
              <div className="relative w-10 h-10 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            }
            title="Facturation simple" 
            description="Générez des factures professionnelles en quelques clics et envoyez-les directement à vos clients."
            className="hover:scale-105 transition-transform duration-300"
          />
          <FeatureCard 
            icon={
              <div className="relative w-10 h-10 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            }
            title="Sécurité avancée" 
            description="Protégez vos données avec un chiffrement de bout en bout et des contrôles d'accès granulaires."
            className="hover:scale-105 transition-transform duration-300"
          />
        </StaggerContainer>
        
        <ParallaxSection speed={0.2} direction="up" className="mt-16">
          <div className="flex justify-center">
            <div className="bg-primary-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-3xl">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Découvrez comment Bitga peut transformer votre gestion de boutique</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">Rejoignez plus de 500 commerçants qui utilisent déjà Bitga au quotidien</p>
              <div className="flex justify-center">
                <Button variant='vibrant' size="lg" className="animate-pulse">Essayer gratuitement</Button>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </Section>
  );
};

export default FeaturesSection;