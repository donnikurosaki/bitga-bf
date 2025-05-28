'use client';

import React, { useEffect, useState } from 'react'; // Added useEffect and useState
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

// Placeholder icons - in a real app, these would be proper icon components
const PlaceholderIcon = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
const InventoryIcon = () => <svg className="w-6 h-6 mr-2 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>;
const SalesIcon = () => <svg className="w-6 h-6 mr-2 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>;
const ActionIcon = () => <svg className="w-6 h-6 mr-2 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>;


export default function DashboardPage() {
  const { user, isLoggedIn } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // For loading state

  useEffect(() => {
    // Check if user is logged in. If not, redirect to auth page.
    // Give a frame for localstorage auth to kick in from AuthContext
    const timer = setTimeout(() => {
      if (!isLoggedIn) {
        router.push('/auth?redirect=/dashboard');
      } else {
        setIsLoading(false);
      }
    }, 100); // Small delay to allow AuthContext to initialize from localStorage
    
    return () => clearTimeout(timer);
  }, [isLoggedIn, router]);

  if (isLoading || !isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 py-12 flex flex-col justify-center items-center">
        <div className="text-center">
          {/* You can use a spinner component here */}
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">Chargement...</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Vérification de l'authentification.</p>
        </div>
      </div>
    );
  }

  // User is logged in, show the dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Mon Tableau de Bord
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Bienvenue, {user?.name || 'Utilisateur'}! Voici votre espace de gestion Bitga.
        </p>
      </header>

      <main className="container mx-auto animate-fade-in"> {/* Added fade-in for content */}
        {/* Grid for dashboard sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section: Inventory Overview */}
          <section className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <InventoryIcon />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Aperçu des stocks</h2>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>Produits totaux: <span className="font-bold text-primary-600 dark:text-primary-400">125</span></p>
              <p>En rupture de stock: <span className="font-bold text-red-500">8</span></p>
              <p>Catégories: <span className="font-bold text-primary-600 dark:text-primary-400">15</span></p>
              <button className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">Voir détails inventaire &rarr;</button>
            </div>
          </section>

          {/* Section: Recent Sales */}
          <section className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <SalesIcon />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Ventes Récentes</h2>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>Ventes aujourd'hui: <span className="font-bold text-secondary-600 dark:text-secondary-400">12</span></p>
              <p>Revenu aujourd'hui: <span className="font-bold text-secondary-600 dark:text-secondary-400">350,00 €</span></p>
              <p>Transaction moyenne: <span className="font-bold text-secondary-600 dark:text-secondary-400">29,17 €</span></p>
              <button className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">Voir toutes les ventes &rarr;</button>
            </div>
          </section>

          {/* Section: Quick Actions */}
          <section className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <ActionIcon />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Actions Rapides</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center w-full px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-150">
                <PlaceholderIcon className="w-5 h-5 mr-2" /> Ajouter Produit
              </button>
              <button className="flex items-center justify-center w-full px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-secondary-500 hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-400 transition-colors duration-150">
                <PlaceholderIcon className="w-5 h-5 mr-2" /> Nouvelle Facture
              </button>
              <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150">
                <PlaceholderIcon className="w-5 h-5 mr-2" /> Gérer Vendeurs
              </button>
              <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150">
                <PlaceholderIcon className="w-5 h-5 mr-2" /> Voir Rapports
              </button>
            </div>
          </section>
          
          {/* Placeholder for more sections if needed */}
          <section className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 md:col-span-1 lg:col-span-3">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Autre Section Pertinente</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Plus de contenu et de fonctionnalités du tableau de bord peuvent être ajoutés ici. Par exemple, des graphiques de performance, des notifications importantes, ou des raccourcis vers d'autres modules.
            </p>
            <div className="mt-6 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Zone pour Graphique/Données</p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
