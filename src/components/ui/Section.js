import React from 'react';

const Section = ({ children, className = '', id, bgColor = 'bg-white dark:bg-gray-900', ...props }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgColor} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;