'use client';

import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

const PricingSection = () => {
  return (
    <Section id="pricing" className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-primary-900 py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Formes géométriques décoratives */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-300 rounded-full opacity-30 animate-float-reverse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-400 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-secondary-400 transform rotate-45 opacity-20"></div>
        <SectionTitle 
          title="Tarifs simples et transparents"
          subtitle="Choisissez le forfait qui correspond le mieux à vos besoins"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <AnimatedElement animation="fade-in" delay={0.1} className="h-full">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Débutant</h3>
              <div className="text-3xl font-bold mb-4 text-primary-600 dark:text-primary-400">Gratuit</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Parfait pour les petites boutiques qui démarrent</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Jusqu&apos;à 100 produits
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1 vendeur
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mode hors ligne basique
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rapports mensuels
                </li>
              </ul>
              
              <Button variant="outline" size="lg" className="w-full">Commencer</Button>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.2} className="h-full">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative transform scale-105 z-10 h-full">
              <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAIRE</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Standard</h3>
              <div className="text-3xl font-bold mb-4 text-primary-600 dark:text-primary-400">15 000 FCFA<span className="text-base font-normal text-gray-600 dark:text-gray-400">/mois</span></div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Idéal pour les boutiques en croissance</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Produits illimités
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Jusqu&apos;à 5 vendeurs
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mode hors ligne complet
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rapports en temps réel
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Support prioritaire
                </li>
              </ul>
              
              {/* <Button size="lg" className="w-full bg-primary-600 hover:bg-primary-700 text-white">Commencer</Button> */}
              <Button variant="outline" size="lg" className="w-full">Commencer</Button>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.3} className="h-full">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Professionnel</h3>
              <div className="text-3xl font-bold mb-4 text-primary-600 dark:text-primary-400">30 000 FCFA<span className="text-base font-normal text-gray-600 dark:text-gray-400">/mois</span></div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Solution complète pour les grandes entreprises</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Produits illimités
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Vendeurs illimités
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mode hors ligne premium
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rapports en temps réel
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Support prioritaire
                </li>
              </ul>
              
              {/* <Button size="lg" className="w-full bg-primary-600 hover:bg-primary-700 text-white">Commencer</Button> */}
              <Button variant="outline" size="lg" className="w-full">Commencer</Button>
              
            </div>
          </AnimatedElement>
          
        </div>
      </div>
    </Section>
  )
}

export default PricingSection;