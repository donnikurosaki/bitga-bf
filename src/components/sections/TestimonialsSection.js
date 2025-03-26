'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement, { StaggerContainer } from '../ui/AnimatedElement';

const TestimonialsSection = () => {
  return (
    <Section id="testimonials" className="bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-accent-900 py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="slide-up" delay={0.1}>
          <SectionTitle 
            title={<span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">Ce que disent nos clients</span>} 
            subtitle="Découvrez comment Bitga aide les commerçants à travers le Burkina Faso"
            centered
          />
        </AnimatedElement>
        
        <div className="relative mt-16">
          {/* Éléments décoratifs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-300 dark:bg-accent-900/40 rounded-full opacity-50 animate-float-reverse hidden lg:block"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-300 dark:bg-primary-900/40 rounded-full opacity-50 animate-float hidden lg:block"></div>
          <div className="absolute top-1/3 right-0 w-20 h-20 bg-secondary-400 transform rotate-45 opacity-30"></div>
          <div className="absolute bottom-1/3 left-0 w-20 h-20 bg-primary-400 transform rotate-45 opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent-500 rounded-full opacity-20"></div>
          
          <StaggerContainer delay={0.2} staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full transform group-hover:scale-105 border-t-4 border-accent-500">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-300 to-primary-300 dark:from-accent-800 dark:to-primary-800 flex items-center justify-center mr-4 shadow-md">
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">FB</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Fatou Barro</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Épicerie, Koudougou</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">&quot;Les rapports détaillés m&apos;aident à prendre de meilleures décisions pour mon commerce. Je peux voir ce qui se vend bien et ce qui reste en stock trop longtemps.&quot;</p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.svg 
                      key={star} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * star }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full transform group-hover:scale-105 border-t-4 border-accent-500">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-300 to-primary-300 dark:from-accent-800 dark:to-primary-800 flex items-center justify-center mr-4 shadow-md">
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">AK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Aminata Koné</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Boutique de vêtements, Ouagadougou</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">&quot;Grâce à Bitga, je peux gérer ma boutique même lorsque je suis en déplacement. Le mode hors ligne est particulièrement utile dans notre région.&quot;</p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.svg 
                      key={star} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * star }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full transform group-hover:scale-105 border-t-4 border-accent-500">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-300 to-primary-300 dark:from-accent-800 dark:to-primary-800 flex items-center justify-center mr-4 shadow-md">
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">MS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Moussa Sanogo</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quincaillerie, Bobo-Dioulasso</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">&quot;La gestion des vendeurs est ce que j&apos;apprécie le plus. Je peux voir qui vend quoi et limiter les accès selon les responsabilités de chacun.&quot;</p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.svg 
                      key={star} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * star }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </StaggerContainer>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;