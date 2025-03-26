'use client';

import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement, { StaggerContainer } from '../ui/AnimatedElement';
import Button from '../ui/Button';
import ParallaxSection from '../ui/ParallaxSection';

const HowItWorksSection = () => {
  return (
    <Section id="how-it-works" className="bg-gray-50 dark:bg-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="slide-up" delay={0.1}>
          <SectionTitle 
            title="Comment ça marche" 
            subtitle="Bitga simplifie la gestion de votre boutique en quelques étapes simples"
            centered
          />
        </AnimatedElement>
        
        <div className="relative mt-16 mb-16">
          {/* Ligne de connexion entre les étapes */}
          <div className="absolute top-16 left-0 w-full h-1 bg-primary-200 dark:bg-primary-800 hidden md:block"></div>
          
          <StaggerContainer delay={0.2} staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-accent-400 dark:from-primary-700 dark:to-accent-700 text-white mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Inscrivez-vous</h3>
              <p className="text-gray-600 dark:text-gray-300">Créez votre compte en quelques minutes et configurez votre boutique.</p>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary-400 to-primary-400 dark:from-secondary-700 dark:to-primary-700 text-white mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Ajoutez vos produits</h3>
              <p className="text-gray-600 dark:text-gray-300">Importez votre inventaire ou ajoutez vos produits manuellement.</p>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-secondary-400 dark:from-accent-700 dark:to-secondary-700 text-white mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Gérez à distance</h3>
              <p className="text-gray-600 dark:text-gray-300">Suivez vos ventes et votre stock en temps réel, où que vous soyez.</p>
            </AnimatedElement>
          </StaggerContainer>
        </div>
        
        <ParallaxSection speed={0.3} direction="up">
          <div className="mt-8 text-center">
            <AnimatedElement animation="bounce" delay={0.5}>
              <Button variant='outline' size="lg" className="relative overflow-hidden group">
                <span className="relative z-10">Commencer maintenant</span>
                <span className="absolute inset-0 bg-white/20 animate-shine group-hover:bg-white/30 transition-all duration-500"></span>
              </Button>
            </AnimatedElement>
          </div>
        </ParallaxSection>
      </div>
    </Section>
  );
};

export default HowItWorksSection;