'use client';

import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../ui/ContactForm';
import AnimatedElement from '../ui/AnimatedElement';

const ContactSection = () => {
  return (
    <Section id="contact" className="bg-gradient-to-br from-secondary-50 via-white to-accent-50 dark:from-gray-800 dark:via-gray-900 dark:to-secondary-900 py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Formes géométriques décoratives */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-300 rounded-full opacity-30 animate-float-reverse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-400 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary-400 transform rotate-45 opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-secondary-500 rounded-full opacity-20"></div>
        <AnimatedElement animation="slide-up" delay={0.1}>
          <SectionTitle 
            title={<span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">Contactez-nous</span>} 
            subtitle="Vous avez des questions ou besoin d'aide ? Notre équipe est là pour vous."
            centered
          />
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedElement animation="slide-left" delay={0.3}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border-l-4 border-accent-500 hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Informations de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 dark:text-white font-medium">Adresse</p>
                    <p className="text-gray-600 dark:text-gray-300">Palogo, Koudougou, Burkina Faso</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 dark:text-white font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">contact@bitga.bf</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 dark:text-white font-medium">Téléphone</p>
                    <p className="text-gray-600 dark:text-gray-300">+226 76 XX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 dark:text-white font-medium">Heures d&apos;ouverture</p>
                    <p className="text-gray-600 dark:text-gray-300">Lundi - Vendredi: 8h00 - 17h00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-right" delay={0.4}>
            <ContactForm />
          </AnimatedElement>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;