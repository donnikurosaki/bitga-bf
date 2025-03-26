'use client';

import Link from 'next/link';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-100 via-yellow-50 to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 py-12 border-t-4 border-orange-500 dark:border-orange-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-32 h-12">
                <Image src="/bitga-logo.svg" alt="Bitga" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La solution complète pour gérer votre boutique à distance, même hors ligne.
            </p>
            <div className="flex space-x-4 animate-pulse">
              <a href="#" className="text-orange-500 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300 dark:text-orange-400 dark:hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300 dark:text-orange-400 dark:hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300 dark:text-orange-400 dark:hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-orange-600 dark:text-orange-400 border-b-2 border-yellow-400 dark:border-yellow-600 inline-block pb-2">Produit</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Télécharger
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Mises à jour
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-orange-600 dark:text-orange-400 border-b-2 border-yellow-400 dark:border-yellow-600 inline-block pb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Centre d&apos;aide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Communauté
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-orange-600 dark:text-orange-400 border-b-2 border-yellow-400 dark:border-yellow-600 inline-block pb-2">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-orange-500 transform hover:-translate-y-1 transition-all duration-300 dark:text-gray-300 dark:hover:text-orange-400">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-orange-200 dark:border-orange-800 mt-12 pt-8 text-center text-gray-700 dark:text-gray-300 bg-gradient-to-r from-transparent via-orange-100/30 dark:via-orange-900/30 to-transparent">
          <p>&copy; {new Date().getFullYear()} Bitga. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;