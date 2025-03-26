import React from 'react';

const FeatureCard = ({ icon, title, description, className = '' }) => {
  // Générer une couleur aléatoire pour la bordure parmi les couleurs du thème
  const borderColors = [
    'border-l-primary-500',
    'border-l-secondary-500',
    'border-l-accent-500',
  ];
  
  const randomBorderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
  
  return (
    <div className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 ${randomBorderColor} hover:scale-105 transform ${className}`}>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-600 dark:text-primary-400 mb-4 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;