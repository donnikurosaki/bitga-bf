import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center relative overflow-hidden';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-md border-2 border-primary-600 hover:border-primary-700 hover:scale-105 transform',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-md border-2 border-secondary-600 hover:border-secondary-700 hover:scale-105 transform',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-md border-2 border-accent-600 hover:border-accent-700 hover:scale-105 transform',
    outline: 'border-2 border-primary-500 bg-transparent hover:bg-primary-50 text-primary-600 dark:text-primary-400 dark:hover:bg-gray-800 dark:border-primary-500 hover:border-primary-600 hover:scale-105 transform',
    ghost: 'bg-transparent hover:bg-primary-50 text-primary-600 dark:text-primary-400 dark:hover:bg-gray-800 hover:scale-105 transform',
    gradient: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-md hover:scale-105 transform',
    vibrant: 'bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 text-white shadow-md hover:shadow-lg hover:scale-105 transform border-2 border-white'
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;