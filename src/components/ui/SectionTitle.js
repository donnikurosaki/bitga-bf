import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false, className = '' }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl animate-fade-in delay-100">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;